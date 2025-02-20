// Define the Project interface
interface Project {
  name: string;
  description: string;
  url?: string;
  code: string;
  tags: string[];
}

// List of Projects
const projects: Project[] = [
  {
    name: "Bill Total",
    description: "A simple bill total calculator built with vanilla JavaScript.",
    url: "bill-total",
    code: "https://github.com/tinkernerd/tinkernerd.dev/tree/main/src/pages/projects/bill-review.astro",
    tags: ["JavaScript", "Math"]
  },
  {
    name: "Book Review",
    description: "This script updates a character count in real time as a user types into a textarea element.",
    url: "book-review",
    code: "https://github.com/tinkernerd/tinkernerd.dev/tree/main/src/pages/projects/book-review.astro",
    tags: ["JavaScript", "Text Processing"]
  },
  {
    name: "Bouncing Balls",
    description: "A simple bouncing ball animation using HTML, CSS, and JavaScript.",
    url: "bouncing-balls",
    code: "https://github.com/tinkernerd/tinkernerd.dev/tree/main/src/pages/projects/bouncing-balls.astro",
    tags: ["JavaScript", "Animation"]
  },
  {
    name: "JS Calculator",
    description: "A calculator using JS, HTML, and CSS.",
    url: "js-calculator",
    code: "https://github.com/tinkernerd/js-calc",
    tags: ["JavaScript", "Math"]
  },
  {
    name: "Dynamic Table",
    description: "A simple dynamic table using JS, HTML, and CSS.",
    url: "dynamic-table",
    code: "https://github.com/tinkernerd/tinkernerd.dev/tree/main/src/pages/projects/dynamic-table.astro",
    tags: ["JavaScript", "Math"]
  },
  {
    name: "NASA Image of the Day",
    description: "A simple app to view the NASA image of the day.",
    url: "nasa-image-of-the-day",
    code: "https://github.com/tinkernerd/nasa-image-of-the-day",
    tags: ["API", "Space"]
  },
  {
    name: "Password Generator",
    description: "A simple password generator using JS, HTML, and CSS.",
    url: "password-generator",
    code: "https://github.com/tinkernerd/PassGen",
    tags: ["JavaScript", "Security"]
  },
  {
    name: "Shape Selector",
    description: "A simple shape selector using JS, HTML, and CSS.",
    url: "shape-selector",
    code: "https://github.com/tinkernerd/tinkernerd.dev/tree/main/src/pages/projects/shape-selector.astro",
    tags: ["JavaScript", "UI", "Shapes"]
  },
  {
    name: "Temp Converter",
    description: "A simple temperature converter using JS, HTML, and CSS.",
    url: "temp-conv",
    code: "https://github.com/tinkernerd/tinkernerd.dev/tree/main/src/pages/projects/temp-conv.astro",
    tags: ["JavaScript", "Math", "Utility"]
  },
  {
    name: "Timer",
    description: "A simple timer using JS, HTML, and CSS.",
    url: "timer",
    code: "https://github.com/tinkernerd/tinkernerd.dev/tree/main/src/pages/projects/time.astro",
    tags: ["JavaScript", "Time", "Utility"]
  },  
  {
    name: "Live METAR",
    description: "A simple app to view live METAR data.",
    url: "live-metar",
    code: "https://github.com/tinkernerd/live-metar",
    tags: ["JavaScript", "Aviation", "Weather"]

  },
  {
    name: "METAR Decoder",
    description: "A simple app to decode METAR data.",
    url: "metar-decoder",
    code: "https://github.com/tinkernerd/metar-decoder",
    tags: ["JavaScript", "Aviation", "Weather"]
  },
  {
    name: "Airport Info",
    description: "A simple app to view airport information.",
    url: "airport-info",
    code: "https://github.com/tinkernerd/airport-info",
    tags: ["JavaScript", "Aviation"]
  },
  {
    name: "Walls",
    description: "A Github Repo for all my wallpapers.",
    code: "https://github.com/tinkernerd/walls",
    tags: ["Wallpapers", "Photography"]
  },
  {
    name: "Python Coffee Picker",
    description: "A simple coffee picker using Python.",
    code: "https://github.com/tinkernerd/python-coffee-picker",
    tags: ["Python", "Coffee"]
  },
  {
    name: "Python Network Tools",
    description: "A simple network tools using Python.",
    code: "https://github.com/tinkernerd/Net_Tools",
    tags: ["Python", "Network"]
  },
  {
    name: "Astro Resume",
    description: "A simple resume using Astro.",
    url: "https://resume.tinkernerd.dev",
    code: "https://github.com/tinkernerd/resume",
    tags: ["Astro", "Resume"]
  },
  {
    name: "Python Password Generator",
    description: "PyPassGen is a lightweight password generator built with Python and Tkinter.",
    code: "https://github.com/tinkernerd/PyPassGen",
    tags: ["Python", "Security"]
  },
  {
    name: "RaspiDigiDisplay",
    description: "A simple digital display using a Raspberry Pi.",
    code: "https://github.com/tinkernerd/RaspiDigiDisplay",
    tags: ["Raspberry Pi", "Display"]
  },
  {
    name: "Loaner Manager",
    description: "A simple loaner manager using PowerShell.",
    code: "https://github.com/tinkernerd/Loaner-Updater",
    tags: ["PowerShell", "Loaner"]
  }
];

// Export for use in other files
export default projects;
