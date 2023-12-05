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
      <ul className="flex-column space-y mb-4 space-y-4 p-6 text-sm font-medium md:mb-0 md:me-4">
        {items.map((item, index) => (
          <li key={index}>
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`grid w-full items-center rounded-lg border-2 px-4 py-3 md:inline-flex ${
                selectedTab === index ? "border-neon" : "border-transparent"
              } `}
            >
              {item.employer}
            </button>
          </li>
        ))}
      </ul>
      <div className="w-full max-w-4xl rounded-lg p-6">
        {items.map((item, index) => (
          <div
            className={`${selectedTab === index ? "" : "hidden"}`}
            key={index}
          >
            <div className="flex flex-col items-center justify-center rounded-lg border-2 border-neon p-4 text-center">
              <span className="flex items-center justify-center text-neon">
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
              <h3 className="text-xl font-bold text-neon">{item.employer}</h3>
              <h5 className="mb-2 text-lg font-bold text-neon">{item.title}</h5>
              <p className="mb-2 text-sm font-semibold text-secondary">
                {item.dates}
              </p>
              {item.content.map((el, index) => (
                <p
                  key={index}
                  className="mb-2 self-start px-4 text-start sm:mx-16"
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
