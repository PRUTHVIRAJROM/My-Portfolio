// All of your personal content lives here.
// Components read from this file, so you can change the site without touching JSX.

export const profile = {
  name: 'Aarav Sharma',
  role: 'First-year Computer Engineering student',
  tagline: 'I build small, useful things for the web and learn something new every week.',
  location: 'Pune, India',
  email: 'aarav@example.com',
  avatar: '/avatar.svg',
  socials: [
    { label: 'GitHub', url: 'https://github.com/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
  ],
}

export const about = [
  "I'm a first-year Computer Engineering student who got hooked on programming after making a calculator in C that only worked half the time.",
  'These days I spend my evenings building web apps, solving problems on competitive programming sites, and breaking things on purpose to see how they work.',
  "Right now I'm learning React and Tailwind CSS, and this portfolio is the first thing I've shipped to the internet.",
]

export const skills = [
  { category: 'Languages', items: ['C', 'Python', 'JavaScript', 'HTML', 'CSS'] },
  { category: 'Frameworks & Tools', items: ['React', 'Tailwind CSS', 'Vite', 'Git', 'GitHub'] },
  { category: 'Currently learning', items: ['Data Structures', 'Node.js', 'SQL'] },
]

// `accent` must be one of the keys in `accentClasses` in ProjectCard.jsx.
export const projects = [
  {
    id: 1,
    title: 'Weather Now',
    description: 'A weather app that shows the forecast for any city using a free public API.',
    image: '/projects/weather.svg',
    tags: ['React', 'API'],
    accent: 'sky',
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/',
  },
  {
    id: 2,
    title: 'Pomodoro Timer',
    description: 'A focus timer with work and break sessions, sounds, and a daily streak counter.',
    image: '/projects/pomodoro.svg',
    tags: ['JavaScript', 'CSS'],
    accent: 'rose',
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/',
  },
  {
    id: 3,
    title: 'Campus Notes',
    description: 'A notes board where classmates can share lecture notes, sorted by subject.',
    image: '/projects/notes.svg',
    tags: ['React', 'Tailwind'],
    accent: 'emerald',
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/',
  },
  {
    id: 4,
    title: 'Matrix Calculator',
    description: 'A command-line program in C that adds, multiplies and inverts matrices.',
    image: '/projects/matrix.svg',
    tags: ['C'],
    accent: 'amber',
    liveUrl: '',
    codeUrl: 'https://github.com/',
  },
]
