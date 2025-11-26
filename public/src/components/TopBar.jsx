import React from 'react'

export default function Header() {
  return (
    <>
      <div className="topbar" role="navigation" aria-label="شريط الحالة العلوي">
        <div className="topbar-inner">

          {/* أيقونات اليسار */}
          <div className="topbar-icons" aria-hidden="false">
            <a href="#services" className="topbar-icon" aria-label="خدماتنا">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                <path d="M4 4h16v2H4zM4 11h16v2H4zM4 18h16v2H4z" stroke="#fff" strokeWidth="1.2" />
              </svg>
            </a>

            <a href="tel:+971000000000" className="topbar-icon" aria-label="اتصل بنا">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                <path d="M21 16.5v3a2.25 2.25 0 0 1-2.5 2.25C9.9 21.3 2.7 14.1 1.25 5.5A2.25 2.25 0 0 1 3.5 3h3A1.25 1.25 0 0 1 7.75 4.25c0 .7-.05 1.55-.2 2.15a1.25 1.25 0 0 0 .3 1.1l2 2a1.25 1.25 0 0 0 1.1.3c.6-.15 1.45-.2 2.15-.2A1.25 1.25 0 0 1 16 11.5v3A2.25 2.25 0 0 1 13.75 17h-1.25"
                  stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a href="#location" className="topbar-icon" aria-label="الموقع">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                <path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                  stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round" />
                <path d="M12 21s7-4.5 7-10a7 7 0 1 0-14 0c0 5.5 7 10 7 10z"
                  stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round" />
              </svg>
            </a>
          </div>

          {/* العنوان */}
          <div className="topbar-title">شركة Ampcore للتركيب الكهربائي للمقاولات ذ.م.م</div>

          <div style={{ width: 36 }} />
        </div>
      </div>

      <header className="amp-header">
        <div className="amp-header-inner">
          <a href="#top" aria-label="الصفحة الرئيسية" className="amp-logo-wrap"></a>
        </div>
      </header>
    </>
  )
}
