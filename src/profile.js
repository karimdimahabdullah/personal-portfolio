/* ------------------------------------------------------------------
   EDIT ONLY THIS FILE FOR CONTENT. Every component reads from it.
   Built for a recruiter audience: lead with proof of work.
------------------------------------------------------------------- */
import photo from './assets/Kareem.jpg' 
export const profile = {
  name: 'Karim Dimah Abdullah',
  role: 'Electrical & Electronics Engineering student — Power Systems',
  location: 'Ghana',

  // Headshot: put the file in src/assets/, import it here, and set it.
  // Blank = the hero renders without one (no broken image).
  photo: photo,

  // CV: put the PDF in /public and set its file name, e.g. 'Karim-Dimah-Abdullah-CV.pdf'.
  // Blank = the Download CV buttons stay hidden.
  resume: 'Karim D. Abdullah-CV.pdf',

  pitch:
    'I design the sensing and monitoring systems that keep power systems visible, and I build the embedded and web software that runs them.',
  availability: 'Open to internships and graduate roles · Graduating 2027',

  email: 'karimdimahabdullah0@gmail.com',
  phone: '+233 50 914 3569',
  links: [{ label: 'GitHub', href: 'https://github.com/karimdimahabdullah' }],

  about: [
    'I am a final-year Electrical and Electronics Engineering student at the University of Mines and Technology (UMAT) in Tarkwa, Ghana, graduating in 2027. My focus is power systems: how load, power quality, and faults show up in real measurements.',
    'I build the embedded firmware and the software that make those measurements visible. I am looking for an internship or graduate role in monitoring and grid reliability, where I can learn from engineers who run real networks.',
  ],

  education: {
    school: 'University of Mines and Technology (UMAT)',
    place: 'Tarkwa, Ghana',
    field: 'Electrical and Electronics Engineering',
    period: 'Graduating 2027',
  },

  // Each project needs a measurable result before you send this to a recruiter:
  //   Household Load Profiler  -> accuracy / sampling rate vs a reference meter
  //   Grid Power Quality Monitor -> what the simulation caught vs expected values
  // Keep the numbers out of the summary until they are real and verified.
  projects: [
    {
      title: 'Household Load Profiler',
      year: '2025',
      kind: 'Embedded / Power Systems',
      summary:
        'ESP32 and CT-sensor unit that measures household load current in real time and logs it for load profiling.',
      stack: ['ESP32', 'C++', 'MQTT'],
      href: '',
      repo: '',
    },
    {
      title: 'Grid Power Quality Monitor',
      year: '2025',
      kind: 'Embedded / Power Systems',
      summary:
        'ESP32-based simulation in Wokwi that detects voltage sags, harmonics, and frequency drift on a modelled grid feed.',
      stack: ['ESP32', 'Wokwi', 'C++'],
      href: '',
      repo: '',
    },
  ],

  skillGroups: [
    {
      title: 'Power systems',
      items: ['Power systems fundamentals', 'Load profiling', 'Power quality monitoring'],
    },
    {
      title: 'Embedded',
      items: ['C++', 'ESP32 / Arduino', 'MQTT', 'Wokwi'],
    },
    {
      title: 'Software',
      items: ['JavaScript', 'React', 'Python', 'HTML & CSS'],
    },
    {
      title: 'Tools',
      items: ['Git', 'Figma', 'Vite'],
    },
  ],

  // Leave empty until you have real ones. Never invent a quote.
  testimonials: [],
}
