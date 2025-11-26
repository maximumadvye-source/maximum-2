const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const outFile = path.join(publicDir, 'gallery-manifest.json');

function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const files = [];
    for (const e of entries) {
        const full = path.join(dir, e.name);
        if (e.isDirectory()) {
            files.push(...walk(full));
        } else if (e.isFile()) {
            const ext = path.extname(e.name).toLowerCase();
            if (['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif', '.avif'].includes(ext)) {
                files.push(full);
            }
        }
    }
    return files;
}

function toPublicUrl(filePath) {
    const rel = path.relative(publicDir, filePath).split(path.sep).join('/');
    return '/' + rel;
}

try {
    // If a dedicated gallery folder exists, use only its images for the manifest.
    const galleryDir = path.join(publicDir, 'المعرض');
    let files;
    if (fs.existsSync(galleryDir) && fs.statSync(galleryDir).isDirectory()) {
        files = walk(galleryDir);
    } else {
        files = walk(publicDir).filter(f => path.basename(f) !== 'gallery-manifest.json');
    }

    // Natural sort helper (numeric-aware, case-insensitive)
    const collator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });

    function naturalSort(a, b) {
        return collator.compare(a, b);
    }

    // Sort naturally; if producing from the gallery folder the paths will
    // already be rooted under '/المعرض/'. For mixed-mode fallback, prefer
    // '/المعرض/' then '/images/ampcore/' then '/images/'.
    function manifestSort(a, b) {
        const aPublic = toPublicUrl(a);
        const bPublic = toPublicUrl(b);
        const pref = ['/' + 'المعرض' + '/', '/images/ampcore/', '/images/'];
        const ia = pref.findIndex(p => aPublic.startsWith(p));
        const ib = pref.findIndex(p => bPublic.startsWith(p));
        const sa = ia === -1 ? pref.length : ia;
        const sb = ib === -1 ? pref.length : ib;
        if (sa !== sb) return sa - sb;
        return naturalSort(aPublic, bPublic);
    }

    let urls = files.map(toPublicUrl).sort(manifestSort);

    // Deduplicate: prefer /images/ampcore/ version when basename duplicates exist
    const seen = new Map(); // key -> chosen url
    for (const url of urls) {
        const base = url.split('/').pop().toLowerCase();
        if (!seen.has(base)) {
            seen.set(base, url);
            continue;
        }
        // already have a candidate; prefer the existing if it's from ampcore, else prefer ampcore
        const existing = seen.get(base);
        const preferPrefix = '/images/ampcore/';
        const existingIsAmp = existing.startsWith(preferPrefix);
        const urlIsAmp = url.startsWith(preferPrefix);
        if (!existingIsAmp && urlIsAmp) {
            // replace with ampcore version
            seen.set(base, url);
        }
        // otherwise keep existing
    }

    // Preserve the desired order: take entries in the original sorted order but unique
    const uniqueUrls = [];
    const added = new Set();
    for (const url of urls) {
        const base = url.split('/').pop().toLowerCase();
        const chosen = seen.get(base);
        if (chosen && !added.has(chosen)) {
            uniqueUrls.push(chosen);
            added.add(chosen);
        }
    }

    urls = uniqueUrls;
    fs.writeFileSync(outFile, JSON.stringify(urls, null, 2), 'utf8');
    console.log('Wrote', outFile, 'with', urls.length, 'entries (deduplicated)');
} catch (err) {
    console.error('Error generating gallery manifest:', err);
    process.exit(1);
}
