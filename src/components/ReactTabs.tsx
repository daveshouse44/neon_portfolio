import React, { useState, useEffect, useRef } from "react";

import { CodeIcon } from "../data/react-icons/CodeIcon";
import { EarthIcon } from "../data/react-icons/EarthIcon";
import { PizzaIcon } from "../data/react-icons/PizzaIcon";
import { CheeseIcon } from "../data/react-icons/CheeseIcon";
import { HammerIcon } from "../data/react-icons/HammerIcon";

export interface TabItem {
  icon: number;
  title: string;
  employer: string;
  dates: string;
  content: string[];
}

interface TabsProps {
  items: TabItem[];
}

const ReactTabs: React.FC<TabsProps> = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (firstBtnRef.current) {
      firstBtnRef.current.focus();
    }
  }, []);

  return (
    <div className="max-w-5xl md:flex">
      <ul className="flex-column mb-2 p-6 text-sm font-medium md:mb-0 md:me-4 md:space-y-4">
        {items.map((item, index) => (
          <li key={index}>
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`grid w-full items-center rounded-sm border-2 border-opacity-30 px-4 py-3 transition hover:border-neon md:inline-flex ${
                selectedTab === index
                  ? "border-neon bg-secondary bg-opacity-50"
                  : "border-transparent"
              } `}
            >
              {item.employer}
            </button>
          </li>
        ))}
      </ul>
      <div className="w-full max-w-4xl rounded-lg py-6 md:px-6">
        {items.map((item, index) => (
          <div
            className={`${selectedTab === index ? "" : "hidden"}`}
            key={index}
          >
            <div className="group flex flex-col items-center justify-center rounded-sm border-2 border-neon border-opacity-30 bg-secondary bg-opacity-50 p-4 text-center shadow backdrop-blur transition duration-300 hover:shadow-glow hover:shadow-neon hover:backdrop-blur sm:backdrop-blur-none">
              <span className="flex items-center justify-center group-hover:text-neon">
                {item.icon === 0 ? (
                  <CodeIcon className=" mb-2 h-10 w-10" />
                ) : item.icon === 1 ? (
                  <EarthIcon className=" mb-2 h-10 w-10" />
                ) : item.icon === 2 ? (
                  <PizzaIcon className=" mb-2 h-10 w-10" />
                ) : item.icon === 3 ? (
                  <CheeseIcon className=" mb-2 h-10 w-10" />
                ) : item.icon === 4 ? (
                  <HammerIcon className=" mb-2 h-10 w-10" />
                ) : null}
              </span>
              <h3 className="font-tilt text-2xl font-bold uppercase text-neon transition duration-500 group-hover:text-primary group-hover:text-shadow-glow ">
                {item.employer}
              </h3>
              <h5 className="mb-2 text-lg font-bold group-hover:text-neon">
                {item.title}
              </h5>
              <p className="mb-2 text-sm font-semibold text-secondary">
                {item.dates}
              </p>
              {item.content.map((el, index) => (
                <p
                  key={index}
                  className="mb-2 self-start px-4 text-start md:mx-16"
                >
                  &bull;&nbsp;{el}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReactTabs;
