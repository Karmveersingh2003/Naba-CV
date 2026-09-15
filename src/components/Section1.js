import React, { useEffect, useRef } from 'react';
import profileImg from './imgg.png';

const marqueeItems = [
  'HOSPITALITY IT INFRASTRUCTURE',
  '100% OPERATIONAL',
  'OPERA CLOUD v25.1.7',
  'ORACLE MICROS SIMPHONY',
  'DATACENTER MIGRATIONS',
  'MULTI-PROPERTY NETWORKS',
  'HIGH-AVAILABILITY OPS',
  'CYBERSECURITY & BCP',
];

export default function Section1() {
  const heroRef = useRef(null);
  const wordRef = useRef(null);
  const personRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    let tx = 0, ty = 0, cx = 0, cy = 0;
    let raf;

    const onMove = e => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      tx = (e.clientX - rect.left) / rect.width - 0.5;
      ty = (e.clientY - rect.top) / rect.height - 0.5;
    };
    const onLeave = () => { tx = 0; ty = 0; };

    const hero = heroRef.current;
    hero?.addEventListener('mousemove', onMove);
    hero?.addEventListener('mouseleave', onLeave);

    function loop() {
      cx += (tx - cx) * 0.05;
      cy += (ty - cy) * 0.05;
      if (wordRef.current) {
        wordRef.current.style.setProperty('--word-x', `${cx * 18}px`);
        wordRef.current.style.setProperty('--word-y', `${cy * 10}px`);
      }
      if (personRef.current) {
        personRef.current.style.setProperty('--person-x', `${cx * -7}px`);
        personRef.current.style.setProperty('--person-y', `${cy * -4}px`);
      }
      raf = requestAnimationFrame(loop);
    }
    loop();

    const nav = marqueeRef.current?.closest('.s1-top-nav');
    const onEnter = () => { if (marqueeRef.current) marqueeRef.current.style.animationPlayState = 'paused'; };
    const onExit  = () => { if (marqueeRef.current) marqueeRef.current.style.animationPlayState = 'running'; };
    nav?.addEventListener('mouseenter', onEnter);
    nav?.addEventListener('mouseleave', onExit);

    return () => {
      cancelAnimationFrame(raf);
      hero?.removeEventListener('mousemove', onMove);
      hero?.removeEventListener('mouseleave', onLeave);
      nav?.removeEventListener('mouseenter', onEnter);
      nav?.removeEventListener('mouseleave', onExit);
    };
  }, []);

  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section className="s1-hero" id="hero" ref={heroRef}>
      <div className="s1-hero-content">

        {/* ── marquee nav ── */}
        <div className="s1-top-nav">
          <div className="s1-nav-pill">
            <div className="s1-marquee-track" ref={marqueeRef}>
              {items.map((item, i) => (
                <React.Fragment key={i}>
                  <span className="s1-nav-item">{item}</span>
                  <span className="s1-nav-dot">•</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* ── top-left identity ── */}
        <div className="s1-identity" data-aos="fade-right" data-aos-delay="100">
          <h1>NABA JYOTI MEDHI</h1>
          <p>IT Manager&nbsp;•&nbsp;The Quorum Mumbai</p>
        </div>

        {/* ── top-right tagline ── */}
        {/* <div className="s1-tagline" data-aos="fade-left" data-aos-delay="150">
          Architecting<br />Hospitality IT &amp;<br />Cloud Systems
        </div> */}

        {/* ── giant background word ── */}
        <div className="s1-creative-word" ref={wordRef}>Technology</div>

        {/* ── centre profile image ── */}
        <div className="s1-person-wrapper" ref={personRef}>
          <img src={profileImg} alt="Naba Jyoti Medhi" className="s1-person" data-aos="fade-right" data-aos-delay="200"/>
        </div>

        {/* ── right-side main title ── */}
        <h2 className="s1-main-title" data-aos="fade-up" data-aos-delay="200" style={{ color: "white" }}>IT MANAGER</h2>

        {/* ── bottom-left stats ── */}
        {/* <div className="s1-stats-row" data-aos="fade-up" data-aos-delay="230">
          <div className="s1-stat-item">
            <span className="s1-stat-val">6+</span>
            <span className="s1-stat-lbl">Years Leadership</span>
          </div>
          <div className="s1-stat-divider" />
          <div className="s1-stat-item">
            <span className="s1-stat-val">6</span>
            <span className="s1-stat-lbl">Hospitality Roles</span>
          </div>
          <div className="s1-stat-divider" />
          <div className="s1-stat-item">
            <span className="s1-stat-val">99.9%</span>
            <span className="s1-stat-lbl">Infrastructure SLA</span>
          </div>
        </div> */}

        {/* ── bottom-left socials ── */}
        <div className="s1-socials" data-aos="fade-up" data-aos-delay="260">
          <a href="mailto:nabajyoti.mdhi@gmail.com" className="s1-social">
            <span className="s1-icon s1-email"><i className="fa-solid fa-envelope" /></span>
            <span>Copy Email</span>
          </a>
          <a href="https://www.linkedin.com/in/nabajyoti-medhi" target="_blank" rel="noopener noreferrer" className="s1-social">
            <span className="s1-icon s1-linkedin"><i className="fa-brands fa-linkedin-in" /></span>
            <span>LinkedIn</span>
          </a>
          <a href="tel:+917676781716" className="s1-social">
            <span className="s1-icon s1-phone"><i className="fa-solid fa-phone" /></span>
            <span>+91 76767 81716</span>
          </a>
        </div>

        {/* ── bottom description bar ── */}
        <div className="s1-bottom-area" data-aos="fade-up" data-aos-delay="300">
          <div className="s1-bottom-line" />
          <p className="s1-description">
        IT Professional with 6+ years of experience in IT infrastructure, hospitality technology, cloud solutions, cybersecurity, and system administration. Skilled in servers, networks, PMS/POS systems, and IT operations, with experience in Opera Cloud, Simphony, Wincloud, and IDS.
          </p>
        </div>

        <div className="s1-grain" />
      </div>
    </section>
  );
}
