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
    <div className="flex flex-row justify-center gap-9 rounded-full w-fit px-9 py-2 bg-white/70 backdrop-blur-md border-b border-white/30">
      <h3
        className={`cursor-pointer ${selectedTab === "all" ? "text-peach underline" : ""}`}
        onClick={() => onTabSelect("all")}
      >
        All
      </h3>
      <h3
        className={`cursor-pointer ${selectedTab === "coding" ? "text-peach underline" : ""}`}
        onClick={() => onTabSelect("coding")}
      >
        Coding
      </h3>
      <h3
        className={`cursor-pointer ${selectedTab === "design" ? "text-peach underline" : ""}`}
        onClick={() => onTabSelect("design")}
      >
        Design
      </h3>
      <h3
        className={`cursor-pointer ${selectedTab === "other" ? "text-peach underline" : ""}`}
        onClick={() => onTabSelect("other")}
      >
        Other
      </h3>
    </div>
  );
}
