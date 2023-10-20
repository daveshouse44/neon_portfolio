type iconSide = "left" | "right";

const navData = [
  {
    name: "Skills",
    path: "/skills/",
    icon: {
      name: "jam:tools",
      side: "left" as iconSide,
    },
  },
  {
    name: "Me",
    path: "/me/",
    icon: {
      name: "ic:outline-account-box",
      side: "left" as iconSide,
    },
  },
  {
    name: "Ripples",
    path: "/ripples/",
    icon: {
      name: "ph:broadcast-bold",
      side: "left" as iconSide,
    },
  },
];

export default navData;
