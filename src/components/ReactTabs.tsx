import { useState, useEffect, useRef } from "react";
import { IcOutlineLocalPizza } from "../icons/react-icons/pizzaIcon";

interface TabItem {
  title: string;
  content: string;
}

interface TabsProps {
  items: TabItem[];
}

const TabsComponent: React.FC<TabsProps> = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (firstBtnRef.current) {
      firstBtnRef.current.focus();
    }
  }, []);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="md:flex">
          <ul className="flex-column space-y mb-4 space-y-4 text-sm font-medium md:mb-0 md:me-4">
            {items.map((item, index) => (
              <li>
                <button
                  ref={index === 0 ? firstBtnRef : null}
                  key={index}
                  onClick={() => setSelectedTab(index)}
                  className={`inline-flex w-full items-center rounded-lg px-4 py-3 ${
                    selectedTab === index ? "bg-white" : ""
                  } `}
                >
                  {item.title} goes here
                </button>
              </li>
            ))}
          </ul>
          <div className="text-medium w-full rounded-lg bg-background p-6 text-gray-500">
            {items.map((item, index) => (
              <div
                className={`${selectedTab === index ? "" : "hidden"}`}
                key={index}
              >
                <div className="rounded-lg border-2 border-blue-400 p-4">
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mb-2">{item.content}</p>
                  <IcOutlineLocalPizza className="h-10 w-10 text-neon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TabsComponent;
