/* ------------------------------------------------------------------
   EDIT ONLY THIS OBJECT. Every component reads from it.
   Page is built for a recruiter audience: lead with proof of work,
   not freelance-client language.
------------------------------------------------------------------- */
export const profile = {
  name: 'Karim D. Abdullah',
  role: 'Electrical & Electronics Engineering student — Power Systems',
  location: 'Ghana',
  // Add a real headshot to src/assets/ and set the path below.
  // Leave blank and the hero renders without one — no broken image.
  photo: '',
  pitch:
    'I design the sensing and monitoring systems that keep power systems visible, and I build the embedded and web software that runs them.',
  availability:
    'Final-year EEE student, graduating 2027 — open to internships and graduate roles in power systems and embedded engineering.',
  email: 'karimdimahabdullah0@gmail.com',
  phone: '+233 50 914 3569',
  links: [
    { label: 'GitHub', href: 'https://github.com/karimdimahabdullah' },
  ],

  // Loudest section on the page. Every entry needs a measurable result —
  // accuracy against a reference instrument, response time, what it
  // replaced. A description with no number reads as unfinished.
  projects: [
    {
      title: 'Household Load Profiler',
      year: '2025',
      kind: 'Embedded / Power Systems',
      summary:
        'ESP32 and CT-sensor unit that measures household load current in real time and logs it for load profiling. TODO: add the accuracy or sampling result you measured against a reference meter.',
      stack: ['ESP32', 'C++', 'MQTT'],
      href: '',
      repo: '',
    },
    {
      title: 'Grid Power Quality Monitor',
      year: '2025',
      kind: 'Embedded / Power Systems',
      summary:
        'ESP32-based simulation in Wokwi that detects voltage sags, harmonics, and frequency drift on a modelled grid feed. TODO: add what the simulation caught or how it compared to expected values.',
      stack: ['ESP32', 'Wokwi', 'C++'],
      href: '',
      repo: '',
    },
  ],

  skills: [
    'Power Systems Fundamentals', 'C++', 'ESP32 / Arduino',
    'JavaScript', 'React', 'Python', 'Git', 'Figma',
  ],

  // Leave empty until you have real ones. Never invent a quote.
  testimonials: [],
}
