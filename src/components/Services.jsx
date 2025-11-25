import React from 'react';

const services = [
  {
    title: 'تركيب إنارة',
    desc: 'توريد وتركيب حلول إنارة داخلية وخارجية عالية الجودة.',
    img: '/images/ampcore/lighting.jpg',
  },
  {
    title: 'تمديدات وكابلات',
    desc: 'تمديدات كهربائية وفق المعايير الفنية والتشغيلية.',
    img: '/images/ampcore/rewires.jpg',
  },
  {
    title: 'لوحات وتحكم',
    desc: 'تصميم وتركيب لوحات توزيع وتحكم جاهزة للمشاريع.',
    img: '/images/ampcore/switchgear.jpg',
  },
  {
    title: 'ترقيات القدرة',
    desc: 'خدمات رفع قدرة الشبكات وتوصيل الاعتمادات المطلوبة.',
    img: '/images/ampcore/power.jpg',
  },
];

export default function Services() {
  return (
    <section className="bcn-section" id="services" data-aos="fade-up">
      <h2 className="bcn-section-title">خدماتنا</h2>
      <div className="bcn-services-grid">
        {services.map((srv, i) => (
          <div className="bcn-service-card" key={i} data-aos="zoom-in" data-aos-delay={i * 80}>
            <picture>
              <source type="image/webp" srcSet={srv.img.replace(/\.[^.]+$/, '.webp')} />
              <source type="image/webp" media="(max-width:800px)" srcSet={srv.img.replace(/\.[^.]+$/, '-sm.webp')} />
              <img src={srv.img} alt={srv.title} className="bcn-service-img" loading="lazy" decoding="async" width="320" height="180" />
            </picture>
            <div className="bcn-service-body">
              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
