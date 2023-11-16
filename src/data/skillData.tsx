type iconSide = "left" | "right";

const skillLinks = [
  {
    name: "Astro.js",
    path: "https://astro.build/",
    icon: {
      name: "simple-icons:astro",
      side: "left" as iconSide,
    },
  },
  {
    name: "tailwindcss",
    path: "https://tailwindcss.com/",
    icon: {
      name: "teenyicons:tailwind-outline",
      side: "left" as iconSide,
    },
  },
  {
    name: "React.js",
    path: "https://react.dev/",
    icon: {
      name: "teenyicons:react-outline",
      side: "left" as iconSide,
    },
  },
  {
    name: "Next.js",
    path: "https://nextjs.org/",
    icon: {
      name: "teenyicons:nextjs-outline",
      side: "left" as iconSide,
    },
  },
  {
    name: "TypeScript",
    path: "https://www.typescriptlang.org/",
    icon: {
      name: "teenyicons:typescript-outline",
      side: "left" as iconSide,
    },
  },
  {
    name: "Python",
    path: "https://www.python.org/",
    icon: {
      name: "teenyicons:python-outline",
      side: "left" as iconSide,
    },
  },
  {
    name: "Vue.js",
    path: "https://vuejs.org/",
    icon: {
      name: "teenyicons:vue-outline",
      side: "left" as iconSide,
    },
  },
  {
    name: "WordPress",
    path: "https://wordpress.org/",
    icon: {
      name: "teenyicons:wordpress-outline",
      side: "left" as iconSide,
    },
  },
  {
    name: "Figma",
    path: "https://www.figma.com/",
    icon: {
      name: "teenyicons:figma-outline",
      side: "left" as iconSide,
    },
  },
  {
    name: "Knife sharpening",
    path: "https://www.webstaurantstore.com/article/39/how-to-use-a-sharpening-stone.html",
    icon: {
      name: "ph:knife",
      side: "left" as iconSide,
    },
  },
  {
    name: "Wood-fired pizza",
    path: "https://www.seriouseats.com/hacker-free-neapolitan-pizza-for-a-home-kitchen-recipe",
    icon: {
      name: "fluent:food-pizza-24-regular",
      side: "left" as iconSide,
    },
  },
  {
    name: "Leathercraft",
    path: "https://www.weaverleathersupply.com/pages/getting-started-in-leathercrafting",
    icon: {
      name: "iconoir:wallet",
      side: "left" as iconSide,
    },
  },
];

const skillData = [
  {
    icon: "mdi:web",
    title: "Full Stack Web Development",
    description: "I take a strategic approach to design and development",
    list: [
      "Building and maintaining websites",
      "End to end application development",
      "Focusing on user driven designs",
      "Creating dynamic UX / UI experiences",
      "Cybersecurity and data protection",
    ],
  },
  {
    icon: "mdi:web",
    title: "Full Stack Web Development",
    description: "I take a strategic approach to design and development",
    list: [
      "Building and maintaining websites",
      "End to end application development",
      "Focusing on user driven designs",
      "Creating dynamic UX / UI experiences",
      "Cybersecurity and data protection",
    ],
  },
  {
    icon: "carbon:restaurant-fine",
    title: "Chef and Restaurant Management",
    description: "I have a passion for food and the restaurant industry",
    list: [
      "Efficent execution and oversight",
      "Keen awareness of food safety",
      "Concise food preparation and portioning",
      "Cost control in all aspects of operations",
      "Strong leadership and developer of people",
    ],
  },
  {
    icon: "carbon:restaurant-fine",
    title: "Chef and Restaurant Management",
    description: "I have a passion for food and the restaurant industry",
    list: [
      "Efficent execution and oversight",
      "Keen awareness of food safety",
      "Concise food preparation and portioning",
      "Cost control in all aspects of operations",
      "Strong leadership and developer of people",
    ],
  },
];
const skillDataRestaurant = [
  {
    discipline: "Web Development",
    description: "Building and maintaining websites",
  },
  {
    discipline: "Full Stack",
    description: "End to end application development",
  },
  {
    discipline: "User Driven Designs",
    description: "Creating dynamic UX / UI experiences",
  },
  {
    discipline: "Back-End Security",
    description: "Managing data from the server to user",
  },
];
export { skillData, skillDataRestaurant, skillLinks };
