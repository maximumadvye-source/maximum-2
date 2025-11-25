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
    const files = walk(publicDir).filter(f => path.basename(f) !== 'gallery-manifest.json');

    // Natural sort helper (numeric-aware, case-insensitive)
    const collator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });

    function naturalSort(a, b) {
        return collator.compare(a, b);
    }

    // Prefer images under /images/ampcore/ first, then others; within each group use natural sort
    function manifestSort(a, b) {
        const aPublic = toPublicUrl(a);
        const bPublic = toPublicUrl(b);
        const prefix = 'images/ampcore/';
        const aIsAmp = aPublic.startsWith('/' + prefix);
        const bIsAmp = bPublic.startsWith('/' + prefix);
        if (aIsAmp && !bIsAmp) return -1;
        if (!aIsAmp && bIsAmp) return 1;
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
