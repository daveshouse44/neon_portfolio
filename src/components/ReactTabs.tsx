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
    <div className="flex items-center justify-center bg-sky-100 py-12">
      <div className="flex w-full max-w-md flex-col gap-y-2">
        <div className="flex items-center justify-between gap-x-2 rounded-xl bg-blue-400 p-1 font-bold text-white">
          {items.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`text-cneter w-full rounded-xl p-2 outline-none hover:bg-blue-300 focus:bg-white focus:text-blue-600 focus:ring-2 ${
                selectedTab === index ? "bg-white text-blue-600 ring-2" : ""
              } `}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="rounded-xl bg-white p-2">
          {items.map((item, index) => (
            <div
              className={`${selectedTab === index ? "" : "hidden"}`}
              key={index}
            >
              <div className="rounded-lg border-2 border-blue-400 p-4">
                <h1 className="text-3xl text-blue-600">{item.title}</h1>
                <p>{item.content}</p>
                <IcOutlineLocalPizza className="h-10 w-10 text-neon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
