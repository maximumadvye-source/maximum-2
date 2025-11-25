import React from 'react';

const items = [
    {
        img: '/images/ampcore/02.webp',
        title: 'تجهيزات المستأجرين',
        desc:
            'نعمل على تطوير الأنظمة الكهربائية الحالية وتجهيز مساحات العمل أو المكاتب لتصبح جاهزة للاستخدام بشكل آمن وفعّال، مع الاعتماد على الهيكل الأساسي الذي يوفره المالك. ويتم تنفيذ أي تحديثات كهربائية وفق المتطلبات الرسمية، وبعد الحصول على الموافقات اللازمة قبل بدء أعمال التركيب.',
    },
    {
        img: '/images/ampcore/03.webp',
        title: 'شركة ديوا NOC & الموافقة',
        desc:
            'نوفر خدمة إعداد طلبات الموافقات الكهربائية، بما فيها جداول الأحمال، مخططات التوزيع، طلبات توصيل الطاقة والمياه، وترقية الأحمال عند الحاجة. يتم تقديم جميع الطلبات عبر القنوات الرسمية من خلال فنيين ومقاولين مؤهلين.',
    },
    {
        img: '/images/ampcore/04.webp',
        title: 'بناء',
        desc:
            'يشمل ذلك إعداد مخططات التصميم الكهربائي، وتوريد جميع المواد والمكونات الكهربائية، ثم تنفيذ الأعمال وفق المعايير المعتمدة. نتابع المشروع من مرحلة التجهيز وحتى التشغيل الكامل للكهرباء والمياه، مع إجراء الفحوصات النهائية لضمان التوافق مع اللوائح.',
    },
    {
        img: '/images/ampcore/01.webp',
        title: 'صيانة الكهرباء والتجديدات',
        desc:
            'نقدم خدمات الصيانة والإصلاح للأنظمة الكهربائية بمختلف مكوناتها مثل المفاتيح والمخارج، الأسلاك، الكابلات، صناديق التوزيع، لوحات التحكم، وأنظمة الجهد المنخفض. يتم تنفيذ جميع الأعمال وفق المعايير الفنية المعتمدة لضمان الأداء الآمن والمستقر.',
    },
];


export default function Why() {
    return (
        <section className="bcn-section" id="why" data-aos="fade-up">
            <h2 className="bcn-section-title">لماذا اخترت ADAMOMER؟</h2>
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



