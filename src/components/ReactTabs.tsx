import React, { useState, useEffect, useRef } from "react";

import { CodeIcon } from "../data/react-icons/CodeIcon";
import { EarthIcon } from "../data/react-icons/EarthIcon";
import { PizzaIcon } from "../data/react-icons/PizzaIcon";
import { CheeseIcon } from "../data/react-icons/CheeseIcon";
import { HammerIcon } from "../data/react-icons/HammerIcon";
import { RiverIcon } from "../data/react-icons/RiverIcon";

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
  const tabContentRef = useRef<HTMLDivElement>(null);

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
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`grid w-full items-center rounded-xs border-2 px-4 py-3 whitespace-nowrap transition ${
                selectedTab === index
                  ? "border-neon bg-background/95"
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
          <div className="group border-neon/40 bg-background/80 hover:border-neon hover:bg-background hover:shadow-glow hover:shadow-neon flex flex-col justify-center gap-2 rounded-xs border-2 p-6 shadow-sm backdrop-blur-sm transition duration-300 sm:m-6">
            <span className="group-hover:text-neon">
              {items[selectedTab].icon === 0 ? (
                <RiverIcon className="h-10 w-10" />
              ) : items[selectedTab].icon === 1 ? (
                <EarthIcon className="h-10 w-10" />
              ) : items[selectedTab].icon === 2 ? (
                <CodeIcon className="h-10 w-10" />
              ) : items[selectedTab].icon === 3 ? (
                <PizzaIcon className="h-10 w-10" />
              ) : items[selectedTab].icon === 4 ? (
                <CheeseIcon className="h-10 w-10" />
              ) : items[selectedTab].icon === 5 ? (
                <HammerIcon className="h-10 w-10" />
              ) : null}
            </span>
            <h2 className="font-tilt text-neon group-hover:text-primary group-hover:text-shadow-glow text-2xl font-bold uppercase transition duration-500">
              {items[selectedTab].employer}
            </h2>
            <h3 className="group-hover:text-neon text-lg font-bold">
              {items[selectedTab].title}
            </h3>
            <p className="text-secondary text-sm font-semibold">
              {items[selectedTab].dates}
            </p>
            <ul>
              {items[selectedTab].content.map((content, index) => (
                <li
                  key={index}
                  className="mx-3 list-outside list-disc last:list-none last:pt-2 last:font-bold last:italic"
                >
                  {content}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactTabs;
