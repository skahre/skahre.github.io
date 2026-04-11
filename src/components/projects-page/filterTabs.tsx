import type { TabFilter } from "../../data/projects";

interface FilterTabsProps {
  selectedTab: TabFilter;
  onTabSelect: (tab: TabFilter) => void;
}

export default function FilterTabs({
  selectedTab,
  onTabSelect,
}: FilterTabsProps) {
  return (
    <div className="flex flex-row justify-center gap-[36px] bg-white rounded-full w-fit px-[36px] py-[8px] shadow-md">
      <h3
        className={`cursor-pointer ${selectedTab === "all" ? "text-orange underline" : ""}`}
        onClick={() => onTabSelect("all")}
      >
        All
      </h3>
      <h3
        className={`cursor-pointer ${selectedTab === "coding" ? "text-orange underline" : ""}`}
        onClick={() => onTabSelect("coding")}
      >
        Coding
      </h3>
      <h3
        className={`cursor-pointer ${selectedTab === "design" ? "text-orange underline" : ""}`}
        onClick={() => onTabSelect("design")}
      >
        Design
      </h3>
      <h3
        className={`cursor-pointer ${selectedTab === "other" ? "text-orange underline" : ""}`}
        onClick={() => onTabSelect("other")}
      >
        Other
      </h3>
    </div>
  );
}
