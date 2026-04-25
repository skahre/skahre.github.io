import type { TabFilter } from "../../data/projects";
import { useRef, useLayoutEffect, useState } from "react";

interface FilterTabsProps {
  selectedTab: TabFilter;
  onTabSelect: (tab: TabFilter) => void;
}

const tabs = ["all", "coding", "design", "other"];

export default function FilterTabs({
  selectedTab,
  onTabSelect,
}: FilterTabsProps) {
  const [pillPosition, setPillPosition] = useState({ left: 0, width: 0 });

  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const index = tabs.findIndex((tab) => tab === selectedTab);
    const el = tabRefs.current[index];
    if (el) {
      setPillPosition({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [selectedTab]);

  return (
    <div className="relative flex flex-row justify-center gap-2 rounded-full w-fit p-2 bg-sage-600/65 backdrop-blur-md shadow-sm shadow-sage-300/65 text-white">
      {tabs.map((tab, index) => (
        <div
          key={index}
          ref={(el) => {
            tabRefs.current[index] = el;
          }}
          className={`z-10 px-4 py-1 rounded-full cursor-pointer`}
          onClick={() => onTabSelect(tab as TabFilter)}
        >
          <h3 className="capitalize">{tab}</h3>
        </div>
      ))}
      <div
        style={{ left: pillPosition.left, width: pillPosition.width }}
        className="absolute top-2 bottom-2 rounded-full bg-sage-500 transition-all duration-300 ease-in-out pointer-events-none"
      />
    </div>
  );
}
