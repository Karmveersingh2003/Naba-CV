import React, { useState } from 'react';

const experiences = [
  {
    num: '01', role: 'IT Manager', company: 'The Quorum Club',
    date: '06/2026 – Present', location: 'Mumbai',
    categories: ['executive', 'hospitality'],
    responsibilities: [
      'Managed the organization\'s IT infrastructure, including servers, networks, storage, and end-user devices, ensuring high availability and performance.',
      'Led the planning, implementation, and maintenance of IT systems, hardware, and software across multiple locations.',
      'Supervised the IT support team, assigning tasks, monitoring performance, and ensuring timely resolution of technical issues.',
      'Developed and implemented IT policies, procedures, and security standards to protect organizational data and systems.',
      'Administered Microsoft Windows Server, Active Directory, Office 365, and cloud-based services.',
      'Managed IT assets, software licensing, inventory, warranty tracking, and vendor relationships.',
      'Coordinated with vendors and service providers for procurement, maintenance contracts, and technical support.',
      'Ensured regular system backups, disaster recovery planning, and business continuity measures.',
      'Monitored network performance, identified risks, and implemented improvements to enhance reliability and security.',
      'Prepared IT budgets, controlled operational costs, and optimized resource utilization.',
      'Provided technical guidance and training to employees, improving system usage and productivity.',
    ],
    skills: ['IT Strategy', 'Windows Server', 'Active Directory', 'Office 365', 'Multi-Location Infrastructure', 'Disaster Recovery', 'Budgeting & Procurement', 'Team Supervision'],
  },
  {
    num: '02', role: 'IT Executive', company: 'IBIS Bengaluru Hebbal (An Accor Hotel)',
    date: '03/2025 – 06/2026', location: 'Bengaluru',
    categories: ['hospitality'],
    responsibilities: [
      'Maintain and support all IT systems, including servers, networks, Wi-Fi, POS systems, and telecommunication systems.',
      'Ensure the proper functioning of property management systems Opera, Simphony, Materials Control.',
      'Provide prompt technical support to hotel staff across all departments.',
      'Resolve hardware, software, and network issues efficiently.',
      'Maintain a helpdesk or ticketing system to track and prioritize IT support requests.',
      'Implement and enforce cybersecurity best practices, including antivirus, firewall, and secure access policies.',
      'Perform regular data backups and ensure disaster recovery plans are in place and tested.',
      'Maintain an updated inventory of IT assets.',
      'Document standard operating procedures, network configurations, and system manuals.',
      'Provide periodic IT reports to hotel management.',
      'Migrate Opera cloud version from 21.5 to 25.1.7.',
      'Migrate Oracle Micros Simphony version from 19.5 to 19.8.',
    ],
    skills: ['Opera Cloud 25.1.7', 'Simphony 19.8', 'Materials Control', 'Accor Standards', 'Ticketing Helpdesk', 'Firewall & InfoSec', 'SOP Documentation'],
  },
  {
    num: '03', role: 'IT Manager', company: 'Antalya by Divine Ganga Cottage',
    date: '12/2024 – 02/2025', location: 'Rishikesh',
    categories: ['executive', 'hospitality'],
    responsibilities: [
      'Maintaining Property Management System IDS 7.0.',
      'Identified opportunities for cost savings through improved efficiency in IT processes.',
      'Coordinated disaster recovery plans to minimize downtime during system outages or malfunctions.',
      'Worked closely with vendors to negotiate contracts and select appropriate products or services.',
      'Monitored system performance and identified areas of improvement.',
      'Supplied technical support to end-users on a variety of issues.',
      'Managed the installation, configuration, maintenance, and troubleshooting of network systems.',
      'Maintained close connection with project personnel to identify and resolve problems quickly.',
      'Supplied support and guidance to colleagues to maintain a collaborative work environment.',
      'Completed day-to-day duties accurately and efficiently.',
    ],
    skills: ['IDS 7.0 PMS', 'Cost Optimization', 'DR Strategy', 'Network Setup', 'Vendor Negotiation'],
  },
  {
    num: '04', role: 'Assistant Manager – IT', company: 'Cygnett Inn Imperial – Tezpur, India',
    date: '04/2024 – 11/2024', location: 'Tezpur, Assam',
    categories: ['hospitality'],
    responsibilities: [
      'Maintaining Property Management System Wincloud.',
      'Met with users, vendors and technicians to determine computing requirements.',
      'Performed regular maintenance checks on hardware components such as laptops, desktops, and printers.',
      'Analyzed workflows and established priorities for daily operations.',
      'Maintained inventory records of IT equipment and supplies.',
      'Monitored system performance and troubleshoot any technical issues that arose.',
      'Supplied training sessions for staff members about new or updated technologies being used.',
      'Installed and configured software applications to meet user requirements.',
    ],
    skills: ['Wincloud PMS', 'Hardware Maintenance', 'Asset Inventory', 'Workflow Priorities', 'Staff Training'],
  },
  {
    num: '05', role: 'Jr. IT Engineer', company: 'IBUS Technologies Pvt. Ltd. (Client: Vivanta Guwahati)',
    date: '01/2022 – 03/2024', location: 'Guwahati, Assam',
    categories: ['engineering', 'hospitality'],
    responsibilities: [
      'Working on Opera PMS, an Oracle-based software and POS Ultra.',
      'Verified stability, security and scalability of system architecture.',
      'Enforced best practices related to information security policies within the organization.',
      'Developing disaster recovery plans in case of major service outages, or natural disasters.',
      'Identified and defined hardware and software faults, recommending appropriate remediation, or replacement work orders.',
      'Preserved data backup processes using online storage facilities.',
      'Coordinated with vendors and suppliers to secure high-quality technical resources.',
      'Maintained data asset register of hardware and software for expenditure accuracy.',
    ],
    skills: ['Opera PMS (Oracle)', 'POS Ultra', 'Vivanta Guwahati Taj Client', 'Online Storage DR', 'Asset Register'],
  },
  {
    num: '06', role: 'Field Engineer', company: 'CBSL Group (Contractual basis)',
    date: '07/2019 – 12/2021', location: 'Guwahati, Assam',
    categories: ['engineering'],
    responsibilities: [
      'End-to-End Support assists customers regarding technical issues.',
      'Repairing and maintaining PCs and printers.',
      'Maintained an inventory of parts and supplies used for repairs and service calls.',
      'Resolved customer inquiries promptly while always providing excellent customer service.',
      'Inspected materials and equipment regularly to check for potential hazards and machine defects.',
      'Maintained records by documenting installation, services and repairs.',
      'Troubleshot malfunctions and diagnosed issues to service equipment quickly.',
    ],
    skills: ['Hardware Diagnostics', 'PC & Printer Repair', 'Field Support', 'Customer SLA', 'Parts Inventory'],
  },
];

const filters = [
  { key: 'all', label: 'All 6 Engagements' },
  { key: 'engineering', label: 'Engineering & Field Support' },
  { key: 'executive', label: 'Executive Management' },
  { key: 'hospitality', label: 'Luxury Hospitality' },
];

export default function Section3() {
  const [active, setActive] = useState('all');

  const visible = experiences.filter(e =>
    active === 'all' || e.categories.includes(active)
  );

  return (
    <section className="s3-section" id="career">
      <header className="s3-header">
        <div className="s3-header-left">
          <div className="s3-eyebrow" data-aos="fade-right">Verified Career History</div>
          <h1 className="s3-title" data-aos="fade-up">Career<br />Experience</h1>
          <p className="s3-subtitle" data-aos="fade-up" data-aos-delay="100">
            Chronological Experience &amp; Operational Roles — Every engagement, responsibility,
            and operational milestone preserved verbatim from the curriculum vitae.
          </p>
        </div>
        <div className="s3-header-right" data-aos="fade-left">
          <div className="s3-count">06</div>
          <div className="s3-count-label">All<br />Engagements</div>
        </div>
      </header>

      <div className="s3-filter-bar" data-aos="fade-up" data-aos-delay="100">
        {filters.map(f => (
          <button
            key={f.key}
            className={`s3-filter-btn${active === f.key ? ' active' : ''}`}
            onClick={() => setActive(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="s3-timeline">
        {visible.map((exp, i) => (
          <article className="s3-experience" key={exp.num} data-aos="fade-up" data-aos-delay={i * 60}>
            <div className="s3-marker"><span /></div>
            <div className="s3-card">
              <div className="s3-role-number">{exp.num}</div>
              <div className="s3-card-top">
                <div className="s3-role-area">
                  <h2 className="s3-role">{exp.role}</h2>
                  <div className="s3-company">{exp.company}</div>
                </div>
                <div className="s3-date-loc">
                  <div className="s3-date">{exp.date}</div>
                  <div className="s3-location">{exp.location}</div>
                </div>
              </div>
              <div className="s3-divider" />
              <div className="s3-responsibilities">
                {exp.responsibilities.map((r, j) => (
                  <div className="s3-responsibility" key={j}>{r}</div>
                ))}
              </div>
              <div className="s3-skills">
                {exp.skills.map((s, j) => (
                  <span className="s3-skill" key={j}>{s}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="s3-footer" data-aos="fade-up">
        Chronological Experience &amp; Operational Roles — Every engagement, responsibility,
        and operational milestone preserved from the curriculum vitae.
      </div>
      <div className="s3-grain" />
    </section>
  );
}
