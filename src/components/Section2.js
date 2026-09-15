import React from 'react';

const cards = [
  { num: '01', icon: '◇', title: 'Cloud PMS Orchestration', text: 'Specialist in Oracle Opera Cloud (v21.5 to v25.1.7), Wincloud, and IDS 7.0 PMS. Zero-downtime cutovers, guest folio integrity, and multi-property architecture.' },
  { num: '02', icon: '◈', title: 'POS & F&B Engineering', text: 'Certified administration of Oracle Micros Simphony (v19.5 to v19.8), IDS POS, POS Ultra, and tight synchronization with Materials Control inventory backends.' },
  { num: '03', icon: '◉', title: 'Cybersecurity & BCP', text: 'Comprehensive IT governance, disaster recovery planning, offsite storage backup verification, firewall rules, and stringent corporate data protection policies.' },
  { num: '04', icon: '⌁', title: 'Multi-Location IT Ops', text: 'High-density wired & wireless networks, Windows Server AD, Office 365, SLA helpdesk ticketing systems, hardware maintenance, and IT procurement budgets.' },
];

const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: 'PMS', label: 'Enterprise Systems' },
  { value: 'POS', label: 'F&B Technology' },
  { value: '24/7', label: 'High Availability' },
];

export default function Section2() {
  return (
    <section className="s2-section" id="executive-profile">
      <div className="s2-label" data-aos="fade-right">Executive Profile</div>

      <div className="s2-header">
        <div data-aos="fade-up">
          <h2 className="s2-heading">
            Enterprise Systems
            <span>&amp; Hospitality Leadership</span>
          </h2>
        </div>
        <div className="s2-header-desc" data-aos="fade-up" data-aos-delay="100">
          Orchestrating <strong>high-availability guest technology,</strong> secure payment gateways,
          and enterprise property management across premier hotel chains.
        </div>
      </div>

      <div className="s2-profile-intro" data-aos="fade-up" data-aos-delay="150">
        <div className="s2-quote-mark">"</div>
        <p className="s2-profile-text">
          <strong>Results-driven IT Professional</strong> with over 6 years of experience in IT strategy,
          infrastructure management, and hospitality technology. Proven expertise in managing servers,
          desktops, networks (wired/wireless), PMS (Opera Cloud, Wincloud, and IDS) systems, POS
          (Simphony and IDS) systems, and IT operations for luxury hotels and corporate environments.
          Skilled in cloud technologies, cybersecurity, system administration, and vendor management
          with a focus on delivering seamless user experiences and operational efficiency.
        </p>
      </div>

      <div className="s2-capabilities">
        {cards.map((c, i) => (
          <article className="s2-card" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
            <div className="s2-card-number">{c.num}</div>
            <div className="s2-card-icon">{c.icon}</div>
            <h3 className="s2-card-title">{c.title}</h3>
            <p className="s2-card-text">{c.text}</p>
          </article>
        ))}
      </div>

      <div className="s2-footer" data-aos="fade-up" data-aos-delay="200">
        {stats.map((s, i) => (
          <div className="s2-stat" key={i}>
            <div className="s2-stat-value">{s.value}</div>
            <div className="s2-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
