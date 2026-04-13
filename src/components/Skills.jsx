import React from 'react';
import './Skills.css';

const skillGroups = [
  {
    category: 'Design & Prototyping',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    skills: [
      { name: 'Figma', level: 98, note: 'Design Systems, Tokens, Variants, Prototyping' },
      { name: 'Adobe XD', level: 88, note: 'Enterprise Wireframing & Prototyping' },
      { name: 'Adobe Photoshop', level: 85, note: 'Visual Design, Asset Production' },
      { name: 'Adobe Illustrator', level: 82, note: 'Icons, Logos, Brand Assets' },
      { name: 'Zeplin', level: 90, note: 'Design Handoff & Annotations' },
    ],
  },
  {
    category: 'Accessibility & QA',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    skills: [
      { name: 'WCAG 2.1 / 2.2 A/AA/AAA', level: 98, note: 'Lead Accessibility Audits & Remediation' },
      { name: 'ARIA', level: 96, note: 'Semantic HTML, Role Architecture' },
      { name: 'Axe DevTools', level: 94, note: 'Automated Accessibility Testing' },
      { name: 'NVDA / JAWS / VoiceOver', level: 90, note: 'Screen Reader Testing' },
      { name: 'Lighthouse / WAVE', level: 95, note: 'Performance & Accessibility Scoring' },
    ],
  },
  {
    category: 'Frontend & Development',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    skills: [
      { name: 'React.js', level: 88, note: 'Component Libraries, Hooks, State Management' },
      { name: 'HTML5 / Semantic HTML', level: 97, note: 'Accessibility-First Markup' },
      { name: 'CSS3 / SCSS', level: 95, note: 'Design Tokens, Responsive Layouts' },
      { name: 'JavaScript (ES6+)', level: 82, note: 'DOM Interaction, A11y Events' },
      { name: 'Git / VS Code', level: 85, note: 'Version Control, Dev Collaboration' },
    ],
  },
  {
    category: 'UX Process & Research',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    skills: [
      { name: 'Design Systems / DesignOps', level: 97, note: 'Org-wide System Architecture' },
      { name: 'User Research / Usability Testing', level: 92, note: 'Moderated Sessions, JTBD, Personas' },
      { name: 'Information Architecture', level: 90, note: 'Card Sorting, Site Maps, Flow Diagrams' },
      { name: 'A/B Testing', level: 85, note: 'Maze, UserTesting, Analytics Review' },
      { name: 'Agile / Scrum', level: 90, note: 'UX Backlog, Critique, Sprint Planning' },
    ],
  },
];

const toolLogos = [
  { name: 'Figma', emoji: '🎨' },
  { name: 'React', emoji: '⚛️' },
  { name: 'WCAG', emoji: '♿' },
  { name: 'Axe', emoji: '🔍' },
  { name: 'Adobe XD', emoji: '📐' },
  { name: 'JAWS', emoji: '🖥️' },
  { name: 'Jira', emoji: '📋' },
  { name: 'Notion', emoji: '📓' },
  { name: 'Maze', emoji: '🧪' },
  { name: 'Git', emoji: '🔀' },
];

const Skills = () => (
  <section id="skills" className="skills" aria-labelledby="skills-heading">
    <div className="section-inner">
      <div className="section-label" aria-hidden="true">03 / Skills</div>

      <h2 id="skills-heading" className="skills__heading">
        Expertise &amp; Toolstack
      </h2>
      <p className="skills__subheading">
        A full-spectrum skill set spanning product design, accessibility engineering,
        front-end development, and UX research.
      </p>

      <div className="skills__grid">
        {skillGroups.map((group) => (
          <div key={group.category} className="skill-group" aria-labelledby={`sg-${group.category.replace(/\s/g,'-')}`}>
            <div className="skill-group__header">
              <span className="skill-group__icon" aria-hidden="true">{group.icon}</span>
              <h3 id={`sg-${group.category.replace(/\s/g,'-')}`} className="skill-group__title">
                {group.category}
              </h3>
            </div>
            <ul className="skill-list" aria-label={`${group.category} skills`}>
              {group.skills.map((s) => (
                <li key={s.name} className="skill-item">
                  <div className="skill-item__top">
                    <span className="skill-item__name">{s.name}</span>
                    <span className="skill-item__note">{s.note}</span>
                  </div>
                  <div
                    className="skill-item__bar"
                    role="progressbar"
                    aria-valuenow={s.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${s.name} proficiency: ${s.level}%`}
                  >
                    <div
                      className="skill-item__fill"
                      style={{ width: `${s.level}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Tool logos strip */}
      <div className="skills__tools" aria-label="Tools and platforms">
        <div className="skills__tools-label">Tools &amp; Platforms</div>
        <ul className="skills__tools-list">
          {toolLogos.map((t) => (
            <li key={t.name} className="skills__tool-chip">
              <span aria-hidden="true">{t.emoji}</span>
              {t.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
