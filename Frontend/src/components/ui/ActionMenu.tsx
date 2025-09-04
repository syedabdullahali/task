import React from "react";

export type MenuAction = {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
};

type ActionMenuProps = {
  isOpen: boolean;
  actions: MenuAction[];
};

const ActionMenu: React.FC<ActionMenuProps> = ({ isOpen, actions }) => {
  return (
    <div
      className={`
        absolute right-0 top-full z-10
        w-56 rounded border bg-white shadow-lg
        transition-all duration-300 ease-in-out
        ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
      `}
    >
      <ul className="flex flex-col p-2 space-y-2">
        {actions.map((action, idx) => (
          <li key={idx}>
            <button
              onClick={action.onClick}
              className="w-full text-left px-4 py-2.5 hover:bg-gray-100 rounded flex justify-between items-center"
            >
              {action.label}
              {action.icon && <span>{action.icon}</span>}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActionMenu;
