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
  content: string;
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
      <ul className="flex-column space-y mb-4 space-y-4 text-sm font-medium md:mb-0 md:me-4">
        {items.map((item, index) => (
          <li key={index}>
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`inline-flex w-full items-center rounded-lg border-2 px-4 py-3 ${
                selectedTab === index ? "border-neon" : "border-transparent"
              } `}
            >
              {item.employer}
            </button>
          </li>
        ))}
      </ul>
      <div className="text-medium w-full rounded-lg p-6">
        {items.map((item, index) => (
          <div
            className={`${selectedTab === index ? "" : "hidden"}`}
            key={index}
          >
            <div className="rounded-lg border-2 border-neon p-4">
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="mb-2">{item.content}</p>
              <span className="h-4 w-4">
                {item.icon === 0 ? (
                  <CodeIcon />
                ) : item.icon === 1 ? (
                  <EarthIcon />
                ) : item.icon === 2 ? (
                  <PizzaIcon />
                ) : item.icon === 3 ? (
                  <CheeseIcon />
                ) : item.icon === 4 ? (
                  <HammerIcon />
                ) : null}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReactTabs;
