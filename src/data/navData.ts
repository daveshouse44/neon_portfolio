type iconSide = "left" | "right";

const navData = [
  {
    name: "About me",
    path: "/me/",
    icon: {
      name: "ic:outline-account-box",
      side: "right" as iconSide,
    },
  },
  {
    name: "Ripples",
    path: "/ripples/",
    icon: {
      name: "ic:round-waves",
      side: "right" as iconSide,
    },
  },
];

export default navData;
