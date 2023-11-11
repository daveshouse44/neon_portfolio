type iconSide = "left" | "right";

const navData = [
  {
    name: "Me",
    path: "/me/",
    icon: {
      name: "ic:outline-account-box",
      side: "right" as iconSide,
    },
  },
  {
    name: "Skills",
    path: "/skills/",
    icon: {
      name: "jam:tools",
      side: "right" as iconSide,
    },
  },
  {
    name: "Work",
    path: "/work/",
    icon: {
      name: "ph:briefcase-bold",
      side: "right" as iconSide,
    },
  },
  {
    name: "Ripples",
    path: "/ripples/",
    icon: {
      name: "ph:broadcast-bold",
      side: "right" as iconSide,
    },
  },
];

export default navData;
