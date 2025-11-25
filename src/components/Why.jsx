import React from 'react';

const items = [
    {
        img: '/images/ampcore/02.webp',
        title: 'تجهيزات المستأجرين',
        desc:
            'تطوير الأنظمة الكهربائية القائمة وجعل مساحة العمل/المكتب مناسبة للسكن، حيث يكمل المالك بناء القاعدة / الهيكل والنواة. يجب تحديث جميع التعديلات الكهربائية في سجلات DEWA من خلال الحصول على موافقة تصميم DEWA قبل بدء أعمال التركيب الكهربائي.',
    },
    {
        img: '/images/ampcore/03.webp',
        title: 'شركة ديوا NOC & الموافقة',
        desc:
            'جدول الأحمال الكهربائية وموافقة تصميم الدوائر الكهربائية، شهادة NOC لمبنى DEWA، الحصول على توصيل الكهرباء والمياه، طلب تجهيز الكهرباء، ترقية حمل الطاقة (NOC إضافي) كهربائي، كهرباء الخدمة، جميع هذه الخدمات والموافقات التي تم الحصول عليها من DEWA عبر الطلب الإلكتروني من قبل مقاول كهربائي معتمد من DEVA.',
    },
    {
        img: '/images/ampcore/04.webp',
        title: 'بناء',
        desc:
            'إعداد رسم التصميم الكهربائي للحصول على الموافقة من DEWA، وتوريد العناصر الكهربائية والتركيب وفقا لمعيار DEWA. بدءا من توريد البناء إلى إكمال الاتصالات الكهربائية والمياه الدائمة للمشروع. الاختبار النهائي وتشغيل المشروع بالكامل وفقا للوائح DEWA.',
    },
    {
        img: '/images/ampcore/01.webp',
        title: 'صيانة الكهرباء والتجديدات',
        desc:
            'تشمل الصيانة الكهربائية والتجديدات ترميم وإصلاح التركيبات الكهربائية والنظام الحالي مثل المفاتيح والمقابس، الأسلاك، الكابلات المدرعة، كابل HO7، صندوق توزيع الكهرباء، SMDB، بنوك المكثفات، لوحات LV، وغيرها. وفقا للأنظمة والمعايير.',
    },
];

export default function Why() {
    return (
        <section className="bcn-section" id="why" data-aos="fade-up">
            <h2 className="bcn-section-title">لماذا اخترت AMPCORE؟</h2>
            <div className="bcn-why-list">
                {items.map((it, i) => (
                    <div className="bcn-why-item" key={i} data-aos="zoom-in" data-aos-delay={i * 80}>
                        <picture>
                            <source type="image/webp" media="(max-width:800px)" srcSet={it.img.replace(/\.[^.]+$/, '-sm.webp')} />
                            <source type="image/webp" srcSet={it.img} />
                            <img src={it.img.replace(/\.webp$/, '.webp')} alt={it.title} style={{ width: 96, height: 96, objectFit: 'contain', display: 'block', margin: '0 auto 14px' }} loading="lazy" width="96" height="96" />
                        </picture>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '8px 0' }}>{it.title}</h3>
                        <p style={{ color: '#444', fontSize: '0.98rem', lineHeight: 1.5 }}>{it.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
