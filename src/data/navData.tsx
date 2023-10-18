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
    name: "About me",
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
      name: "ic:round-waves",
      side: "left" as iconSide,
    },
  },
];

export default navData;
