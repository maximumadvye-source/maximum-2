import React, { useEffect, useState } from 'react';

export default function Portfolio() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let mounted = true;
    // Try to load generated manifest in public folder. If missing, generate a list
    // of expected files /المعرض/SNA1.webp .. /المعرض/SNA300.webp and include only
    // those that actually exist (checked via HEAD requests, limited concurrency).
    const load = async () => {
      try {
        const r = await fetch('/gallery-manifest.json');
        if (r.ok) {
          const list = await r.json();
          if (mounted && Array.isArray(list) && list.length) {
            setImages(list.map((url) => ({ img: url, caption: '' })));
            return;
          }
        }
      } catch (err) {
        // fallthrough to generated list
      }

      // generate candidate paths
      const maxIndex = 300;
      const base = '/المعرض/SNA';
      const candidates = Array.from({ length: maxIndex }, (_, i) => `${base}${i + 1}.webp`);

      // concurrency-limited existence checks
      const concurrency = 12;
      let cursor = 0;
      const found = [];

      const worker = async () => {
        while (true) {
          const i = cursor++;
          if (i >= candidates.length) break;
          const url = candidates[i];
          try {
            const res = await fetch(url, { method: 'HEAD' });
            if (res && res.ok) found.push(url);
          } catch (e) {
            // ignore network errors for this url
          }
        }
      };

      await Promise.all(Array.from({ length: concurrency }).map(() => worker()));

      if (mounted) {
        if (found.length) {
          // sort found by numeric order just in case
          found.sort((a, b) => {
            const na = parseInt(a.match(/SNA(\d+)\.webp$/)?.[1] || '0', 10);
            const nb = parseInt(b.match(/SNA(\d+)\.webp$/)?.[1] || '0', 10);
            return na - nb;
          });
          setImages(found.map((url) => ({ img: url, caption: '' })));
        } else {
          // final fallback: a small curated list
          setImages([
            { img: '/images/ampcore/ElectricalWrokAutodrome-2.jpg', caption: 'مشروع أوتودروم - تنفيذ تمديدات كهربائية متكاملة' },
            { img: '/images/ampcore/ElectricalWrokAutodrome-3.jpg', caption: 'مشروع صيانة وتجديد أنظمة كهربائية' },
            { img: '/images/ampcore/CollinsAerospace_Logo_White.jpg', caption: 'تركيب أنظمة كهربائية لمصنع طيران' },
            { img: '/images/ampcore/dewa.jpg', caption: 'اعتماد هيئة كهرباء ومياه دبي (DEWA)' },
          ]);
        }
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="bcn-section" id="portfolio" data-aos="fade-up">
      <h2 className="bcn-section-title">معرض الأعمال</h2>
      <div className="bcn-portfolio-grid">
        {images.map((p, i) => (
          <div className="bcn-portfolio-item" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
            <div className="bcn-portfolio-img" aria-hidden="false">
              <picture>
                <source type="image/webp" media="(max-width:800px)" srcSet={p.img.replace(/\.[^.]+$/, '-sm.webp')} />
                <source type="image/webp" srcSet={p.img.replace(/\.[^.]+$/, '.webp')} />
                <img src={p.img} alt={p.caption || `صورة ${i + 1}`} loading="lazy" className="bcn-portfolio-thumb" width="320" height="180" />
              </picture>
              <div className="bcn-portfolio-overlay">
                <span className="bcn-portfolio-caption">{p.caption}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
