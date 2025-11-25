import React, { useEffect, useState } from 'react';

export default function Portfolio() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let mounted = true;
    // Try to load generated manifest in public folder
    fetch('/gallery-manifest.json')
      .then((r) => {
        if (!r.ok) throw new Error('manifest not found');
        return r.json();
      })
      .then((list) => {
        if (mounted && Array.isArray(list)) {
          setImages(list.map((url) => ({ img: url, caption: '' })));
        }
      })
      .catch(() => {
        // fallback: use the hardcoded default list if manifest missing
        setImages([
          { img: '/images/ampcore/ElectricalWrokAutodrome-2.jpg', caption: 'مشروع أوتودروم - تنفيذ تمديدات كهربائية متكاملة' },
          { img: '/images/ampcore/ElectricalWrokAutodrome-3.jpg', caption: 'مشروع صيانة وتجديد أنظمة كهربائية' },
          { img: '/images/ampcore/CollinsAerospace_Logo_White.jpg', caption: 'تركيب أنظمة كهربائية لمصنع طيران' },
          { img: '/images/ampcore/dewa.jpg', caption: 'اعتماد هيئة كهرباء ومياه دبي (DEWA)' },
        ]);
      });

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
