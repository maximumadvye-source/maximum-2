import React, { useEffect, useRef } from 'react'

export default function Hero() {
  const innerRef = useRef(null)

  useEffect(() => {
    const el = innerRef.current
    if (!el) return

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
        }
      })
    }, { threshold: 0.2 })

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="amp-hero" id="top">
      <img src="/images/ampcore/Ampcore_Electrical_Banner_bg-1-1.webp" alt="خلفية" className="amp-hero-bg" loading="eager" fetchpriority="high" width="1600" height="900" />
      <div className="amp-hero-inner" ref={innerRef} role="region" aria-label="القسم التعريفي" data-aos="fade-up">
        <h1 className="amp-hero-title">حلول كهربائية متكاملة واحترافية في صنعاء</h1>
        <p className="amp-hero-sub">تصميم وتنفيذ وصيانة أنظمة كهربائية بمواصفات عالية وباعتماد معايير الجهة المختصة.</p>
        <div className="amp-hero-ctas">
          <a href="#contact" className="amp-cta primary">تواصل الآن</a>
          <a href="#portfolio" className="amp-cta outline">خدماتنا</a>
        </div>
      </div>
    </section>
  )
}
