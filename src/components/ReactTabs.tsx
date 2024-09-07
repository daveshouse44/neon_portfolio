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
  const tabContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (firstBtnRef.current) {
      firstBtnRef.current.style.border = "border-neon";
    }
  }, []);

  useEffect(() => {
    const adjustHeight = () => {
      if (tabContentRef.current) {
        tabContentRef.current.style.height = "auto";
        const height = tabContentRef.current.scrollHeight;
        tabContentRef.current.style.height = `${height}px`;
      }
    };
    const timeoutId = setTimeout(adjustHeight, 100);
    return () => clearTimeout(timeoutId);
  }, [selectedTab]);

  return (
    <div className="max-w-5xl md:flex">
      <ul className="flex flex-col text-sm font-medium md:mt-6 md:space-y-4">
        {items.map((item, index) => (
          <li key={index}>
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`grid w-full items-center rounded-sm border-2 px-4 py-3 transition ${
                selectedTab === index
                  ? "border-neon bg-secondary bg-opacity-50"
                  : "border-transparent"
              } hover:border-neon md:inline-flex`}
            >
              {item.employer}
            </button>
          </li>
        ))}
      </ul>
      <div className="relative mt-6 w-full max-w-4xl rounded-lg md:mt-0">
        <div className="overflow-hidden" ref={tabContentRef}>
          <div className="group flex flex-col items-center justify-center rounded-sm border-2 border-neon border-opacity-30 bg-secondary bg-opacity-50 p-4 text-center shadow backdrop-blur transition duration-300 hover:border-opacity-100 hover:shadow-glow hover:shadow-neon hover:backdrop-blur sm:m-6 sm:backdrop-blur-none">
            <span className="flex items-center justify-center group-hover:text-neon">
              {items[selectedTab].icon === 0 ? (
                <CodeIcon className=" mb-2 h-10 w-10" />
              ) : items[selectedTab].icon === 1 ? (
                <EarthIcon className=" mb-2 h-10 w-10" />
              ) : items[selectedTab].icon === 2 ? (
                <PizzaIcon className=" mb-2 h-10 w-10" />
              ) : items[selectedTab].icon === 3 ? (
                <CheeseIcon className=" mb-2 h-10 w-10" />
              ) : items[selectedTab].icon === 4 ? (
                <HammerIcon className=" mb-2 h-10 w-10" />
              ) : null}
            </span>
            <h3 className="font-tilt text-2xl font-bold uppercase text-neon transition duration-500 group-hover:text-primary group-hover:text-shadow-glow ">
              {items[selectedTab].employer}
            </h3>
            <h5 className="mb-2 text-lg font-bold group-hover:text-neon">
              {items[selectedTab].title}
            </h5>
            <p className="mb-2 text-sm font-semibold text-secondary">
              {items[selectedTab].dates}
            </p>
            {items[selectedTab].content.map((content, index) => (
              <p
                key={index}
                className="mb-2 self-start px-4 text-start md:mx-16"
              >
                {content}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactTabs;
