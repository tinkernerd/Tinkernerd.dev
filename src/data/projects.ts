// Define the Project interface
interface Project {
  id: string;
  name: string;
  description: string;
  btnColor: string;
  iconColor: string;
  tags: string[];
  draft: boolean;
  url: string;
  code: string;
}

// Grouped Projects
const projects = {
  JsProjects: <Project[]>[
    {
      id: "bill-total",
      name: "Bill Total",
      description: "A simple bill total calculator built with vanilla JavaScript.",
      btnColor: "var(--theme-accent)",
      iconColor: "var(--theme-bkg)",
      tags: ["css", "javascript"],
      draft: false,
      url: "bill-total",
      code: "https://github.com/tinkernerd/bill-total",
    },
    {
      id: "book-review",
      name: "Book Review",
      description: "This script updates a character count in real time as a user types into a textarea element. It also displays a warning if the character count exceeds a certain limit.",
      btnColor: "var(--theme-accent)",
      iconColor: "var(--theme-bkg)",
      tags: ["css", "javascript"],
      draft: false,
      url: "book-review",
      code: "https://github.com/tinkernerd/book-review",
    },
    {
      id: "bouncing-balls",
      name: "Bouncing Balls",
      description: "A simple bouncing ball animation using HTML, CSS, and JavaScript.",
      btnColor: "var(--theme-accent)",
      iconColor: "var(--theme-bkg)",
      tags: ["css", "javascript"],
      draft: false,
      url: "bouncing-balls",
      code: "https://github.com/tinkernerd/jsbouncing-balls",
    },
    {
      id: "calculator",
      name: "Calculator",
      description: "A calculator using JS, HTML, and CSS",
      btnColor: "var(--theme-accent)",
      iconColor: "var(--theme-bkg)",
      tags: ["css", "javascript", "api"],
      draft: false,
      url: "calculator",
      code: "https://github.com/tinkernerd/js-calc",
    },
  ],

  AviationProjects: <Project[]>[
    {
      id: "live-metar",
      name: "Live METAR",
      description: "A simple app to view live METAR data.",
      btnColor: "var(--theme-accent)",
      iconColor: "var(--theme-bkg)",
      tags: ["css", "javascript", "api"],
      draft: false,
      url: "live-metar",
      code: "https://github.com/tinkernerd/live-metar",
    },
    {
      id: "metar-decoder",
      name: "METAR Decoder",
      description: "A simple app to decode METAR data.",
      btnColor: "var(--theme-accent)",
      iconColor: "var(--theme-bkg)",
      tags: ["css", "javascript", "api"],
      draft: false,
      url: "metar-decoder",
      code: "https://github.com/tinkernerd/metar-decoder",
    },
  ],
};

// Export for use in other files if needed
export default projects;
