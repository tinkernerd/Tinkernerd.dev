// Define the Project interface
interface Project {
  name: string;
  description: string;
  url: string;
  code: string;
}

// Grouped Projects
const projects = {
  JsProjects: <Project[]>[
    {
      name: "Bill Total",
      description: "A simple bill total calculator built with vanilla JavaScript.",
      url: "bill-total",
      code: "https://github.com/tinkernerd/bill-total",
    },
    {
      name: "Book Review",
      description: "This script updates a character count in real time as a user types into a textarea element. It also displays a warning if the character count exceeds a certain limit.",
      url: "book-review",
      code: "https://github.com/tinkernerd/book-review",
    },
    {
      name: "Bouncing Balls",
      description: "A simple bouncing ball animation using HTML, CSS, and JavaScript.",
      url: "bouncing-balls",
      code: "https://github.com/tinkernerd/jsbouncing-balls",
    },
    {
      name: "Calculator",
      description: "A calculator using JS, HTML, and CSS",
      url: "calculator",
      code: "https://github.com/tinkernerd/js-calc",
    },
    {
      name: "NASA Image of the Day",
      description: "A simple app to view the NASA image of the day.",
      url: "nasa-image-of-the-day",
      code: "https://github.com/tinkernerd/nasa-image-of-the-day",
      
    }
  ],

  AviationProjects: <Project[]>[
    {
      name: "Live METAR",
      description: "A simple app to view live METAR data.",
      url: "live-metar",
      code: "https://github.com/tinkernerd/live-metar",
    },
    {
      name: "METAR Decoder",
      description: "A simple app to decode METAR data.",
      url: "metar-decoder",
      code: "https://github.com/tinkernerd/metar-decoder",
    },
  ],
};

// Export for use in other files if needed
export default projects;
