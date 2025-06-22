import React from "react";

interface SidebarProps {
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  // Extract the first child as header
  const childrenArray = React.Children.toArray(children);
  const header = childrenArray[0];
  const body = childrenArray.slice(1);

  return (
    <aside 
      className="fixed top-0 left-0 h-full bg-neutral-900 border-r border-neutral-800 overflow-y-auto flex flex-col scrollbar-themed"
      style={{ width: "var(--sidebar-width)" }}
    >
      <div className="bg-neutral-800 py-3 px-4 border-b border-neutral-700 shadow-sm">
        {header}
      </div>
      <div className="flex flex-col space-y-4 py-4">
        {body}
      </div>
    </aside>
  );
};

export default Sidebar;