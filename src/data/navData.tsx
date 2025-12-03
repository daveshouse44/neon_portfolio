type iconSide = "left" | "right";

const navData = [
  {
    name: "Me",
    path: "/me/",
    icon: {
      name: "account",
      side: "right" as iconSide,
    },
  },
  {
    name: "Skills",
    path: "/skills/",
    icon: {
      name: "tools",
      side: "right" as iconSide,
    },
  },
  {
    name: "Work",
    path: "/work/",
    icon: {
      name: "briefcase",
      side: "right" as iconSide,
    },
  },
  {
    name: "Ripples",
    path: "/ripples/",
    icon: {
      name: "broadcast",
      side: "right" as iconSide,
    },
  },
];

export default navData;
