const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configure paths
const base = path.join(__dirname, '..', 'public');
const folders = [
    path.join(base, 'images'),
    path.join(base, 'images', 'ampcore')
];

async function processFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

    const dir = path.dirname(filePath);
    const name = path.basename(filePath, ext);
    const webpPath = path.join(dir, `${name}.webp`);
    const smallPath = path.join(dir, `${name}-sm.webp`);

    try {
        // create full webp
        await sharp(filePath)
            .webp({ quality: 80 })
            .toFile(webpPath);

        // create small webp (width 800)
        await sharp(filePath)
            .resize({ width: 800, withoutEnlargement: true })
            .webp({ quality: 72 })
            .toFile(smallPath);

        console.log('converted', filePath, '->', webpPath, 'and', smallPath);
    } catch (err) {
        console.error('error processing', filePath, err);
    }
}

async function walkAndProcess(dir) {
    const items = fs.readdirSync(dir);
    for (const it of items) {
        const p = path.join(dir, it);
        const stat = fs.statSync(p);
        if (stat.isDirectory()) {
            await walkAndProcess(p);
        } else {
            await processFile(p);
        }
    }
}

(async () => {
    for (const f of folders) {
        if (fs.existsSync(f)) {
            await walkAndProcess(f);
        }
    }
    console.log('done');
})();