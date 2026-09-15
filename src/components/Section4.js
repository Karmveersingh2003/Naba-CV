import React from 'react';

const skillDomains = [
  {
    num: '01', crestClass: '', icon: 'fa-hotel', label: 'CORE SYSTEMS', title: 'Hospitality Platforms',
    chips: [
      { icon: 'fa-cloud', text: 'Opera Cloud (21.5 / 25.1.7)' },
      { icon: 'fa-desktop', text: 'Opera PMS (Oracle)' },
      { icon: 'fa-cash-register', text: 'Simphony POS (19.5 / 19.8)' },
      { icon: 'fa-window-restore', text: 'Wincloud PMS' },
      { icon: 'fa-database', text: 'IDS 7.0 (PMS & POS)' },
      { icon: 'fa-boxes-stacked', text: 'Materials Control' },
      { icon: 'fa-terminal', text: 'POS Ultra' },
    ],
  },
  {
    num: '02', crestClass: 'cyan-crest', icon: 'fa-network-wired', label: 'INFRASTRUCTURE', title: 'Networks & Infrastructure',
    chips: [
      { icon: 'fa-wifi', text: 'Network troubleshooting' },
      { icon: 'fa-ethernet', text: 'Wired & Wireless Networks' },
      { icon: 'fa-server', text: 'Windows Server Admin' },
      { icon: 'fa-sitemap', text: 'Active Directory' },
      { icon: 'fa-envelope', text: 'Office 365' },
      { icon: 'fa-chart-line', text: 'System performance monitoring' },
      { icon: 'fa-phone-volume', text: 'Telecommunication systems' },
    ],
  },
  {
    num: '03', crestClass: 'emerald-crest', icon: 'fa-shield-virus', label: 'RISK & CONTROL', title: 'Security & Governance',
    chips: [
      { icon: 'fa-lock', text: 'Data security' },
      { icon: 'fa-user-shield', text: 'Information security' },
      { icon: 'fa-scale-balanced', text: 'IT compliance' },
      { icon: 'fa-gavel', text: 'IT governance' },
      { icon: 'fa-triangle-exclamation', text: 'IT risk management' },
      { icon: 'fa-life-ring', text: 'Disaster recovery' },
      { icon: 'fa-cloud-arrow-up', text: 'Online storage backups' },
    ],
  },
  {
    num: '04', crestClass: 'purple-crest', icon: 'fa-headset', label: 'OPERATIONS', title: 'Service & Asset Ops',
    chips: [
      { icon: 'fa-ticket', text: 'Technical support' },
      { icon: 'fa-file-lines', text: 'Documentation creation' },
      { icon: 'fa-warehouse', text: 'Inventory management' },
      { icon: 'fa-barcode', text: 'IT asset management' },
      { icon: 'fa-gears', text: 'IT service management' },
      { icon: 'fa-users', text: 'Team collaboration' },
      { icon: 'fa-handshake', text: 'Vendor management' },
    ],
  },
];

export default function Section4() {
  return (
    <>
      {/* Projects */}
      <section className="s4-section" id="projects">
        <div className="s4-container">
          <div className="s4-eyebrow" data-aos="fade-right">
            <i className="fa-solid fa-cloud-bolt" /> Enterprise Projects
          </div>
          <h2 className="s4-headline" data-aos="fade-up">
            Critical Datacenter &amp; <span className="s4-gold-text">POS Migrations</span>
          </h2>
          <p className="s4-subtitle" data-aos="fade-up" data-aos-delay="80">
            High-stakes platform upgrades and datacenter relocations executed with zero data loss and uninterrupted hotel operations.
          </p>

          <div className="s4-projects-grid" data-aos="fade-up" data-aos-delay="120">

            {/* Project 01 */}
            <article className="s4-project-card">
              <div className="s4-card-content">
                <div className="s4-project-top">
                  <div className="s4-crest"><i className="fa-solid fa-cloud-arrow-up" /></div>
                  <span className="s4-badge">TRANS-CONTINENTAL CLOUD</span>
                </div>
                <div className="s4-project-index">PROJECT 01 / 02</div>
                <h3>Oracle Opera Cloud Migration</h3>
                <p className="s4-project-desc">
                  Executed full lifecycle version migration and cross-continent datacenter shift,
                  minimizing round-trip interface latency and ensuring full reservation integrity for hotel guests.
                </p>
                <div className="s4-milestone">
                  <h5><i className="fa-solid fa-terminal" /> Resume Milestones Attained</h5>
                  <ul>
                    <li><i className="fa-solid fa-circle-check" /><span>Migrate Opera cloud version from 21.5 to 25.1.7</span></li>
                    <li><i className="fa-solid fa-circle-check" /><span>Migrate Opera data center from Frankfurt to Mumbai</span></li>
                  </ul>
                </div>
              </div>
              <div className="s4-pipeline">
                <div className="s4-pipeline-label"><span>Migration Pipeline</span><span className="s4-live">LIVE</span></div>
                <div className="s4-pipeline-nodes">
                  <div className="s4-node">
                    <div className="s4-node-icon"><i className="fa-solid fa-server" /></div>
                    <span>Origin DC</span><strong>Frankfurt</strong>
                  </div>
                  <div className="s4-wire">
                    <div className="s4-wire-line" />
                    <div className="s4-wire-packet" />
                    <i className="fa-solid fa-chevron-right s4-wire-arrow" />
                  </div>
                  <div className="s4-node">
                    <div className="s4-node-icon s4-target-node"><i className="fa-solid fa-database" /></div>
                    <span>Target DC</span><strong className="s4-target-text">Mumbai</strong>
                  </div>
                </div>
                <div className="s4-pipeline-status">
                  <span><i className="fa-solid fa-circle" /> Status: LIVE PRODUCTION</span>
                  <span>Version: v25.1.7</span>
                </div>
              </div>
            </article>

            {/* Project 02 */}
            <article className="s4-project-card">
              <div className="s4-card-content">
                <div className="s4-project-top">
                  <div className="s4-crest s4-cyan-crest"><i className="fa-solid fa-cash-register" /></div>
                  <span className="s4-badge s4-cyan-badge">ENTERPRISE POS STACK</span>
                </div>
                <div className="s4-project-index">PROJECT 02 / 02</div>
                <h3>Oracle Simphony Migration</h3>
                <p className="s4-project-desc">
                  Executed end-to-end upgrade of point-of-sale infrastructure across food &amp; beverage outlets,
                  banquet terminals, and kitchen display systems (KDS) with Materials Control synchronization.
                </p>
                <div className="s4-milestone s4-cyan-milestone">
                  <h5><i className="fa-solid fa-terminal" /> Resume Milestones Attained</h5>
                  <ul>
                    <li><i className="fa-solid fa-circle-check" /><span>Migrate Oracle Micros Simphony version from 19.5 to 19.8</span></li>
                    <li><i className="fa-solid fa-circle-check" /><span>Workstation client deployment &amp; POS receipt printer routing</span></li>
                    <li><i className="fa-solid fa-circle-check" /><span>Zero downtime during peak hotel F&amp;B service windows</span></li>
                  </ul>
                </div>
              </div>
              <div className="s4-pipeline">
                <div className="s4-pipeline-label"><span>POS Upgrade Pipeline</span><span className="s4-verified">VERIFIED</span></div>
                <div className="s4-pipeline-nodes">
                  <div className="s4-node">
                    <div className="s4-node-icon"><i className="fa-solid fa-desktop" /></div>
                    <span>Build 19.5</span><strong>Legacy</strong>
                  </div>
                  <div className="s4-wire s4-cyan-wire">
                    <div className="s4-wire-line" />
                    <div className="s4-wire-packet" />
                    <i className="fa-solid fa-chevron-right s4-wire-arrow" />
                  </div>
                  <div className="s4-node">
                    <div className="s4-node-icon s4-simphony-target"><i className="fa-solid fa-receipt" /></div>
                    <span>Build 19.8</span><strong className="s4-cyan-text">Production</strong>
                  </div>
                </div>
                <div className="s4-pipeline-status">
                  <span><i className="fa-solid fa-circle" /> Sync Status: Materials Control OK</span>
                  <span>Terminals: Verified</span>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="s4-section s4-skills-section" id="skills">
        <div className="s4-container">
          <div className="s4-eyebrow" data-aos="fade-right">
            <i className="fa-solid fa-microchip" /> System Architecture
          </div>
          <h2 className="s4-headline" data-aos="fade-up">
            Comprehensive Skills &amp; <span className="s4-gold-text">Hospitality Stack</span>
          </h2>
          <p className="s4-subtitle" data-aos="fade-up" data-aos-delay="80">
            Every technical skill, governance domain, and operational protocol from the resume classified by specialization.
          </p>

          <div className="s4-skills-grid">
            {skillDomains.map((d, i) => (
              <article className="s4-skill-card" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="s4-skill-number">{d.num}</div>
                <div className="s4-domain-header">
                  <div className={`s4-domain-crest ${d.crestClass}`}>
                    <i className={`fa-solid ${d.icon}`} />
                  </div>
                  <div>
                    <span className="s4-domain-label">{d.label}</span>
                    <h4>{d.title}</h4>
                  </div>
                </div>
                <div className="s4-skill-divider" />
                <div className="s4-chips">
                  {d.chips.map((c, j) => (
                    <span className="s4-chip" key={j}>
                      <i className={`fa-solid ${c.icon}`} />{c.text}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
