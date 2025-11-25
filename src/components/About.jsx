import React from 'react';

export default function About() {
  return (
    <section className="bcn-section" id="about" data-aos="fade-up">
      <h2 className="bcn-section-title">من نحن</h2>
      <p className="bcn-section-desc">نحن فريق مهني بقيادة المهندس أدم عمر، متخصصون في الأنظمة الكهربائية، شبكات الإنترنت، وشاشات العرض الحديثة.
        نلتزم بتقديم خدمات موثوقة للمنازل، المحلات، والمنشآت التجارية، مع تطبيق أعلى معايير الجودة والسلامة في كل مشروع نقوم به..
      </p>
      <picture>
        <source type="image/webp" srcSet={'/images/ampcore/CollinsAerospace_Logo_White.webp'} />
        <source type="image/webp" media="(max-width:800px)" srcSet={'/images/ampcore/CollinsAerospace_Logo_White-sm.webp'} />
        <img src="/images/ampcore/CollinsAerospace_Logo_White.jpg" alt="مشروع كهربائي" style={{ maxWidth: '320px', borderRadius: '12px', margin: '24px auto', display: 'block' }} loading="lazy" width="320" height="120" />
      </picture>
    </section>
  );
}
