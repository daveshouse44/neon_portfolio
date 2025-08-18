type iconSide = "left" | "right";
import ma_screenshot from "../assets/images/projects_ma_screenshot.png";
import pd_screenshot from "../assets/images/projects_pd_screenshot.png";
import srt_screenshot from "../assets/images/projects_srt_screenshot.png";
import eh_screenshot from "../assets/images/projects_eh_screenshot.png";
import sg_screenshot from "../assets/images/projects_sg_screenshot.png";
import pw_screenshot from "../assets/images/projects_pw_screenshot.png";
import pp_screenshot from "../assets/images/projects_pp_screenshot.png";
import academy_screenshot from "../assets/images/projects_academy_screenshot.png";

const workLinks = [
  {
    name: "Medical Alley Academy",
    image: academy_screenshot,
    link: "https://medicalalley.org/academy/",
    icon: {
      name: "simple-icons:woo",
      side: "right" as iconSide,
    },
    description: "Digital Education platform",
  },
  {
    name: "Medical Alley",
    image: ma_screenshot,
    link: "https://medicalalley.org/",
    icon: {
      name: "teenyicons:wordpress-outline",
      side: "right" as iconSide,
    },
    description: "Rebranded website using WordPress",
  },
  {
    name: "Partner Directory",
    image: pd_screenshot,
    link: "https://partners.medicalalley.org/",
    icon: {
      name: "teenyicons:nextjs-outline",
      side: "right" as iconSide,
    },
    description: "Next.js application to showcase Medical Alley partners",
  },
  {
    name: "Starts Resource Tool",
    image: srt_screenshot,
    link: "https://www.alleyinsights.org/startup-resources",
    icon: {
      name: "teenyicons:vue-outline",
      side: "right" as iconSide,
    },
    description: "Vue.js application that filters resources for startups",
  },
  {
    name: "Earth Hero",
    image: eh_screenshot,
    link: "https://www.earthhero.org/",
    icon: {
      name: "teenyicons:gatsbyjs-outline",
      side: "right" as iconSide,
    },
    description: "Gatsby website and web app volunteer project",
  },
  {
    name: "Snake game",
    image: sg_screenshot,
    link: "https://daveshouse44.github.io/snake_game/",
    icon: {
      name: "teenyicons:javascript-outline",
      side: "right" as iconSide,
    },
    description: "Simple but fun native JavaScript game",
  },
  {
    name: "Password Generator",
    image: pw_screenshot,
    link: "https://pw-gen2.netlify.app/",
    icon: {
      name: "teenyicons:typescript-outline",
      side: "right" as iconSide,
    },
    description: "Highly customizable password generator",
  },
  {
    name: "Previous Portfolio",
    image: pp_screenshot,
    link: "https://daveshouse44.github.io/portfolio_update/",
    icon: {
      name: "teenyicons:react-outline",
      side: "right" as iconSide,
    },
    description: "Fun look at my early work",
  },
];

const workTabItems = [
  {
    icon: 0,
    title: "Webmaster",
    employer: "St. Croix Hospice",
    dates: "2025 ~ Present",
    content: [
      "Build and optimize web experiences through developing, maintaining and enhancing our web presence to ensure an engaging and seamless user experience.",
      "In collaboration with Marketing & Communications colleagues, identify content strategy needs, updates and opportunities for website enhancements using data and analytics to draw traffic and build new digital experiences.",
      "Implement non-engineering website updates, including content, design and functionality, ensuring accuracy and quality.",
      "Develop and manage landing pages, ensuring they align with visitor experience best practices.",
      "Manage performance reporting and analysis to connect web metrics to the marketing funnel, providing actionable insights and reports to elevate brand performance.",
      "Leverage web platforms and tools such as WordPress, Google Analytics, Jot forms and more to manage and optimize web content and performance.",
      "Ensure adherence to compliance and web best practices, including information architecture and analytics-driven optimization.",
      "Manage content creation and ensure that all website content is up-to-date, relevant and optimized for search engines.",
      "Administer and maintain web-based local business listings, including Google Business Profile.",
      "Stay up to date on the latest SEO trends and advise team members of changes that may impact the quality of website traffic, using best White Hat SEO practices.",
      "Conduct research on industry trends and competitor strategies to identify opportunities for improvement.",
      "WordPress ~ PHP ~ Gutenberg ~ CSS ~ Google Analytics ~ SEO/SEM ~ DNS ~ Content Writing",
    ],
  },
  {
    icon: 1,
    title: "Web Developer ~ Technology Liaison",
    employer: "Medical Alley",
    dates: "2022 ~ 2025",
    content: [
      "Develop modern front-end UIs using JavaScript/TypeScript frameworks (Vue, React) and integrate with back-end APIs",
      "Customize HTML, CSS, and create XML sitemaps and RSS feeds while adhering to brand guidelines",
      "Design and review software development using Kanban SDLC, including Python server development",
      "Communicate effectively with stakeholders, manage deadlines, and develop products to enhance resource sharing",
      "Provide IT support, ensure data security, and create tools to increase productivity",
      "Innovate digital and in-person experiences, focusing on customer engagement and efficient project management",
      "Architected platform for Digital Education products",
      "Vue.js ~ Next.js ~ WordPress ~ PHP ~ Python ~ TailwindCSS ~ AWS ~ MySQL",
    ],
  },
  {
    icon: 2,
    title: "Volunteer Web Developer",
    employer: "Earth Hero",
    dates: "2022 ~ Present",
    content: [
      "Central role in the web development team specializing in front-end design.",
      "Refactoring and redesigning Earth Hero website, while working with other developers and UI/UX Designers",
      "Implementing the creation of the web app version of Earth Hero, to compliment the mobile app version",
      "Driving changes from UI/UX Designers to the website with new design systems and components",
      "Migrated the website from Gatsby to Next.js, improving performance and future",
      "React.js ~ Next.js ~ Gatsby.js ~ Airtable ~ MaterialUI ~ SCSS ~ Netlify ~ Firebase",
    ],
  },
  {
    icon: 3,
    title: "General Manager",
    employer: "Punch Pizza",
    dates: "2016 ~ 2022",
    content: [
      "Certified Pizziaolo and General Manager of multiple locations",
      "Hired and trained dozens of restaurant staff for new expansion openings",
      "Drove sales growth and managed costs for multiple locations",
      "Supervise and assist in maintaining a high level of cleanliness and food safety ",
      "Helped launch and refine many new initiatives for the company",
      "Trainer ~ Mentor ~ Leader ~ HACCP ~ Customer Satisfaction ~ ServSafe",
    ],
  },
  {
    icon: 4,
    title: "Chef ~ Kitchen Manager",
    employer: "Surdyk's Flights",
    dates: "2008 ~ 2016",
    content: [
      "Designed and execute a unique menu of light fare and beverage for two airport",
      "Led sales for restaurants that gross over 5 million per year",
      "Won Best New Food and Beverage Concept from the Airports Council International",
      "Hired, trained, managed and scheduled a staff of up to 50",
      "Primary Signer to provide staffing to Metro Airport Commission protocol",
      "High Volume ~ Wine and Beverage ~ Cheese Monger ~ Micros POS ~ Restaurant Management",
    ],
  },
  {
    icon: 5,
    title: "Project Manager",
    employer: "Modern Concepts & Design",
    dates: "2004 ~ 2008",
    content: [
      "Learned to build and solve problems with my hands",
      "Supervised subcontractors for commercial remodeling projects across the Twin Cities area.",
      "Ensured projects were completed on time and within budget",
      "Carpentry ~ Paint and Mud ~ Demolition ~ Electric ~ Concrete ~ Sheetrock ~ Drop Ceilings",
    ],
  },
];

export { workLinks, workTabItems };
