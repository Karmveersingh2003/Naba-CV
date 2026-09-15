import React, { useState, useRef } from 'react';

const COMMANDS = {
  status: '<span class="t-green">[OK]</span> Hospitality IT environment healthy.<br>Opera Cloud: <span class="t-cyan">25.1.7</span><br>Simphony POS: <span class="t-cyan">19.8</span><br>Infrastructure: <span class="t-green">OPERATIONAL</span>',
  'opera-cloud': 'Oracle Opera Cloud migration: <span class="t-cyan">21.5 → 25.1.7</span><br>Datacenter migration: <span class="t-hi">Frankfurt → Mumbai</span>',
  experience: 'Professional focus: <span class="t-hi">Hospitality IT Management</span><br>PMS / POS / Network / Infrastructure / IT Operations',
  projects: 'Enterprise Projects:<br>01 — Oracle Opera Cloud Migration<br>02 — Oracle Simphony Migration',
  education: 'Academic Credentials:<br>BA — Gauhati University<br>PGDCH&amp;N — Epitome<br>PGDCA — Epitome',
  contact: 'Email: <span class="t-cyan">nabajyoti.mdhi@gmail.com</span><br>Phone: <span class="t-cyan">+91 76767 81716</span>',
  help: 'Available commands: <span class="t-cyan">status, opera-cloud, experience, projects, education, contact, clear</span>',
};

export default function Section5() {
  const [lines, setLines] = useState([
    { prompt: true, text: 'sys-info --candidate' },
    { prompt: false, hi: true, text: '[CONNECTED] Candidate: Naba Jyoti Medhi • IT Manager' },
    { prompt: false, text: 'Stack: <span class="t-cyan">Opera Cloud 25.1.7</span> | <span class="t-cyan">Simphony 19.8</span> | Windows AD | Office 365' },
    { prompt: false, green: true, text: 'System ready. Type <strong>help</strong> to view available commands.' },
  ]);
  const [input, setInput] = useState('');
  const screenRef = useRef(null);

  function runCommand(cmd) {
    const c = cmd.trim().toLowerCase();
    if (!c) return;
    if (c === 'clear') { setLines([]); return; }
    const response = COMMANDS[c] || 'Command not found. Type <strong>help</strong> for available commands.';
    setLines(prev => [
      ...prev,
      { prompt: true, text: c },
      { prompt: false, hi: true, text: response },
    ]);
    setTimeout(() => { if (screenRef.current) screenRef.current.scrollTop = screenRef.current.scrollHeight; }, 50);
  }

  return (
    <>
      {/* Languages */}
      <section className="s5-section" id="languages">
        <div className="s5-container">
          <div className="s5-eyebrow" data-aos="fade-right"><i className="fa-solid fa-comments" /> Communication Profile</div>
          <h2 className="s5-headline" data-aos="fade-up">Spoken <span className="s5-gold">Languages</span></h2>
          <p className="s5-subtitle" data-aos="fade-up" data-aos-delay="80">Multilingual communication capability supporting guest-facing, technical, corporate, and operational environments.</p>
          <div className="s5-lang-grid">
            {[
              { icon: 'fa-comments', name: 'Assamese', level: 'Native Language • Fluent' },
              { icon: 'fa-globe', name: 'Hindi', level: 'Professional Working • Fluent' },
              { icon: 'fa-language', name: 'English', level: 'Corporate & Technical • Fluent' },
            ].map((l, i) => (
              <div className="s5-lang-card" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="s5-lang-icon"><i className={`fa-solid ${l.icon}`} /></div>
                <div><h5>{l.name}</h5><span>{l.level}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="s5-section s5-alt" id="education">
        <div className="s5-container">
          <div className="s5-eyebrow" data-aos="fade-right"><i className="fa-solid fa-graduation-cap" /> Academic Credentials</div>
          <h2 className="s5-headline" data-aos="fade-up">Education &amp; <span className="s5-gold">Post-Graduate Diplomas</span></h2>
          <p className="s5-subtitle" data-aos="fade-up" data-aos-delay="80">University degree in combination with specialized post-graduate hardware, networking, and software application diplomas.</p>
          <div className="s5-edu-grid">
            {[
              { iconClass: '', icon: 'fa-building-columns', badge: 'University Degree', badgeClass: '', title: 'Bachelor of Arts (BA)', inst: 'Gauhati University', desc: 'Comprehensive academic foundation developing strategic communication, critical analysis, and operational leadership capabilities.' },
              { iconClass: 'cyan', icon: 'fa-ethernet', badge: 'Post Graduate', badgeClass: 'cyan', title: 'PGDCH&N', inst: 'Epitome', desc: 'Post Graduate Diploma in Computer Hardware & Networking. Intensive specialization in routing protocols, structured cabling, switch configurations, and server hardware.' },
              { iconClass: 'green', icon: 'fa-laptop-code', badge: 'Post Graduate', badgeClass: 'green', title: 'PGDCA', inst: 'Epitome', desc: 'Post Graduate Diploma in Computer Applications. Thorough curriculum spanning database management systems, system utilities, and corporate office automation suites.' },
            ].map((e, i) => (
              <article className="s5-edu-card" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                <div>
                  <div className="s5-edu-top">
                    <div className={`s5-edu-icon ${e.iconClass}`}><i className={`fa-solid ${e.icon}`} /></div>
                    <span className={`s5-badge ${e.badgeClass}`}>{e.badge}</span>
                  </div>
                  <div className="s5-edu-main">
                    <h3 dangerouslySetInnerHTML={{ __html: e.title }} />
                    <div className="s5-edu-inst">{e.inst}</div>
                    <p className="s5-edu-desc">{e.desc}</p>
                  </div>
                </div>
                <div className="s5-edu-footer"><i className="fa-solid fa-location-dot" /> Guwahati, Assam</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NOC Terminal */}
      <section className="s5-section" id="noc-terminal">
        <div className="s5-container">
          <div className="s5-eyebrow" data-aos="fade-right"><i className="fa-solid fa-satellite" /> Command &amp; Control</div>
          <h2 className="s5-headline" data-aos="fade-up">Interactive <span className="s5-gold">NOC Telemetry &amp; Terminal</span></h2>
          <p className="s5-subtitle" data-aos="fade-up" data-aos-delay="80">Monitor simulated live hospitality network metrics or query candidate telemetry through the terminal console.</p>
          <div className="s5-noc-grid">
            {/* Telemetry */}
            <div className="s5-telemetry" data-aos="fade-right" data-aos-delay="100">
              <div className="s5-tele-header">
                <div className="s5-tele-title"><i className="fa-solid fa-gauge-high" /> Hospitality Infrastructure Telemetry</div>
                <div className="s5-live-badge"><i className="fa-solid fa-circle" /> LIVE</div>
              </div>
              {[
                { label: 'Opera Cloud (Mumbai DC) Latency', value: '14 ms [OPTIMAL]', cls: 'cyan', w: '94%', barCls: 'meter-cyan' },
                { label: 'Simphony 19.8 POS Cluster Sync', value: '100% SYNCHRONIZED', cls: 'green', w: '100%', barCls: 'meter-green' },
                { label: 'Active Directory & Office 365 Status', value: '99.98% HEALTHY', cls: 'gold', w: '98%', barCls: 'meter-gold' },
                { label: 'Offsite Cloud DR Backups', value: 'DAILY 02:00 IST VERIFIED', cls: 'purple', w: '100%', barCls: 'meter-purple' },
              ].map((r, i) => (
                <div className="s5-tele-row" key={i}>
                  <div className="s5-tele-meta">
                    <span>{r.label}</span>
                    <span className={`s5-tele-val ${r.cls}`}>{r.value}</span>
                  </div>
                  <div className="s5-meter-track"><div className={`s5-meter-bar ${r.barCls}`} style={{ width: r.w }} /></div>
                </div>
              ))}
              <div className="s5-node-footer">Node: THE-QUORUM-MUMBAI-GW01 &bull; IP: 192.168.10.1 &bull; SSL/TLS 1.3</div>
            </div>

            {/* Terminal */}
            <div className="s5-terminal" data-aos="fade-left" data-aos-delay="100">
              <div className="s5-term-bar">
                <div className="s5-term-dots">
                  <span className="s5-dot red" /><span className="s5-dot yellow" /><span className="s5-dot green" />
                </div>
                <span className="s5-term-title">admin@thequorum-mumbai: ~</span>
                <span className="s5-term-ver">v6.8-light</span>
              </div>
              <div className="s5-term-screen" ref={screenRef}>
                {lines.map((l, i) => (
                  <div className="s5-term-line" key={i}>
                    {l.prompt && <span className="s5-prompt">query:~$ </span>}
                    <span
                      className={l.hi ? 't-hi' : l.green ? 't-green' : ''}
                      dangerouslySetInnerHTML={{ __html: l.text }}
                    />
                  </div>
                ))}
              </div>
              <div className="s5-presets">
                <span className="s5-preset-label">Presets:</span>
                {['status', 'opera-cloud', 'experience', 'projects', 'education', 'contact', 'clear'].map(cmd => (
                  <button key={cmd} className="s5-preset" onClick={() => runCommand(cmd)}>{cmd}</button>
                ))}
              </div>
              <div className="s5-term-input">
                <span className="s5-prompt">query:~$</span>
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') { runCommand(input); setInput(''); } }}
                  placeholder="Type help, status, projects..."
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Declaration */}
      <section className="s5-section s5-alt" id="declaration">
        <div className="s5-container">
          <div className="s5-eyebrow" data-aos="fade-right"><i className="fa-solid fa-stamp" /> Formal Compliance</div>
          <h2 className="s5-headline" data-aos="fade-up">Official Candidature <span className="s5-gold">Declaration</span></h2>
          <p className="s5-subtitle" data-aos="fade-up" data-aos-delay="80">Statutory declaration reproduced from the curriculum vitae.</p>
          <div className="s5-decl-card" data-aos="fade-up" data-aos-delay="120">
            <div className="s5-decl-badge"><i className="fa-solid fa-certificate" /> STATUTORY STATEMENT OF CANDIDATURE</div>
            <p className="s5-decl-quote">
              "I hereby declare that entries made in this form as above are true and correct to the best of my knowledge and belief.
              If any information is found false or incorrect or ineligibility is detected before or after an interview, my candidature
              may be cancelled and all my claims for recruitment will be forfeited."
            </p>
            <div className="s5-decl-bottom">
              <div>
                <div className="s5-signature">Nabajyoti Medhi</div>
                <div className="s5-sig-loc"><i className="fa-solid fa-location-dot" /> Guwahati, Assam</div>
              </div>
              <div className="s5-verification">
                <div className="s5-verif-icon"><i className="fa-solid fa-shield-check" /></div>
                <div>
                  <span className="s5-verif-label">Verification Status</span>
                  <strong className="s5-verif-val">AUTHENTICATED RESUME</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="s5-section" id="contact">
        <div className="s5-container">
          <div className="s5-eyebrow" data-aos="fade-right"><i className="fa-solid fa-paper-plane" /> Direct Communications</div>
          <h2 className="s5-headline" data-aos="fade-up">Connect Directly &amp; <span className="s5-gold">Collaborate</span></h2>
          <p className="s5-subtitle" data-aos="fade-up" data-aos-delay="80">Available for executive IT leadership, corporate hospitality modernization, infrastructure audits, and technical advisory.</p>
          <div className="s5-contact-grid">
            <div className="s5-contact-stack">
              {[
                { href: 'mailto:nabajyoti.mdhi@gmail.com', icon: 'fa-envelope', label: 'Primary Email Address', value: 'nabajyoti.mdhi@gmail.com' },
                { href: 'tel:+917676781716', icon: 'fa-phone', label: 'Direct Voice & WhatsApp', value: '+91 76767 81716' },
                { href: null, icon: 'fa-building', label: 'Current Organization', value: 'The Quorum Club Mumbai' },
                { href: null, icon: 'fa-map-location-dot', label: 'Permanent Base', value: 'Guwahati, Assam, India' },
              ].map((c, i) => {
                const Tag = c.href ? 'a' : 'div';
                return (
                  <Tag key={i} href={c.href} className="s5-contact-card" data-aos="fade-right" data-aos-delay={i * 60}>
                    <div className="s5-contact-icon"><i className={`fa-solid ${c.icon}`} /></div>
                    <div className="s5-contact-info">
                      <span>{c.label}</span>
                      <strong>{c.value}</strong>
                    </div>
                  </Tag>
                );
              })}
            </div>
            <div className="s5-contact-panel" data-aos="fade-left" data-aos-delay="100">
              <div className="s5-panel-code">COMMUNICATION CHANNEL / 05</div>
              <h3>Ready for the next <span className="s5-gold">enterprise challenge.</span></h3>
              <p>Available for IT management, hospitality technology, infrastructure operations, PMS/POS modernization, technical support leadership, and technology advisory.</p>
              <div className="s5-contact-status"><i className="fa-solid fa-circle" /> AVAILABLE FOR PROFESSIONAL ENGAGEMENT</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
