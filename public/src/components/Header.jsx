import React from 'react'
import '../AppHeader.css'

export default function Header() {
  return (
    <>
      <div className="topbar" role="navigation" aria-label="شريط الحالة العلوي">
        <div className="topbar-inner">
          <div className="topbar-icons" aria-hidden="false">
            <a href="tel:+967771199341" className="topbar-icon" aria-label="اتصل بنا">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 16.5v3a2.25 2.25 0 0 1-2.5 2.25C9.9 21.3 2.7 14.1 1.25 5.5A2.25 2.25 0 0 1 3.5 3h3A1.25 1.25 0 0 1 7.75 4.25c0 .7-.05 1.55-.2 2.15a1.25 1.25 0 0 0 .3 1.1l2 2a1.25 1.25 0 0 0 1.1.3c.6-.15 1.45-.2 2.15-.2A1.25 1.25 0 0 1 16 11.5v3A2.25 2.25 0 0 1 13.75 17h-1.25" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a href="https://wa.me/967771199341" target="_blank" rel="noopener noreferrer" className="topbar-icon" aria-label="واتساب">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 3.5A11.9 11.9 0 0 0 3.5 20.5L2 22l1.5-4.5A11.9 11.9 0 0 0 20.5 3.5z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.5 13.5c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1-.2.2-.8.7-1 1-.2.2-.4.2-.6.1-.6-.3-1.9-1.1-3.1-3.3-.2-.3 0-.5.1-.6.1-.1.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-1.4-3-2-4.1-.5-.9-1.1-1-1.6-1.1-.4-.1-1-.1-1.5-.1s-1 .1-1.5.6c-.5.4-1.7 1.7-1.7 4.2 0 2.5 1.8 4.9 2.1 5.2.3.3 3.1 4.9 7.6 6.3 1 .3 1.8.4 2.5.3.8-.1 2.5-1 2.8-2.4.2-1.5.2-2.8-.6-3.5z" stroke="#fff" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a href="#location" className="topbar-icon" aria-label="الموقع">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round" /><path d="M12 21s7-4.5 7-10a7 7 0 1 0-14 0c0 5.5 7 10 7 10z" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round" /></svg>
            </a>
          </div>

          <div className="topbar-title">فريق مهني بقيادة المهندس أدم عمر </div>

          <div style={{ width: 36 }} />
        </div>
      </div>

      <header className="amp-header sticky top-0 z-50 bg-white/90 backdrop-blur-lg">
        <div className="amp-header-inner">
          {/* شعار الموقع */}
          <a href="#top" aria-label="الصفحة الرئيسية" className="amp-logo-wrap">
            <img src="/2SH.png" alt="Logo" />
          </a>
        </div>
      </header>
    </>
  )
}
