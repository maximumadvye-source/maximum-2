import React from 'react';

const testimonials = [
  {
    name: 'علي سعيد للمقاولات الكهربائية',
    text: 'فريق محترف، تعاملهم راقٍ وسرعة في الإنجاز. أنصح بالتعامل معهم لأي مشروع كهربائي.',
    img: '/images/ampcore/01.jpg',
  },
  {
    name: 'شركة صنعاء الحديثة',
    text: 'خدمة ممتازة وجودة عالية في التنفيذ. شكراً لكم على الاحترافية.',
    img: '/images/ampcore/CollinsAerospace_Logo_White.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="bcn-section" id="testimonials" data-aos="fade-up">
      <h2 className="bcn-section-title">آراء العملاء</h2>
      <div className="bcn-portfolio-grid">
        {testimonials.map((t, i) => (
          <div className="bcn-portfolio-item" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
            <div className="bcn-portfolio-img">
              <picture>
                <source type="image/webp" media="(max-width:800px)" srcSet={t.img.replace(/\.[^.]+$/, '-sm.webp')} />
                <source type="image/webp" srcSet={t.img.replace(/\.[^.]+$/, '.webp')} />
                <img src={t.img} alt={t.name} loading="lazy" className="bcn-portfolio-thumb" style={{ height: '120px' }} width="160" height="120" />
              </picture>
            </div>
            <span style={{ fontWeight: 'bold' }}>{t.name}</span>
            <p style={{ margin: '8px 0 0', fontSize: '1rem' }}>{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
