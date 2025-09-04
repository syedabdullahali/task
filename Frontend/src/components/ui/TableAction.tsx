import React, { useState } from "react";
import { MenuAction } from "./ActionMenu";
import ActionMenu from "./ActionMenu";

type TableRowActionsProps = {
  actions: MenuAction[];
};

export const TableRowActions: React.FC<TableRowActionsProps> = ({ actions }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-gray-700 m-auto block"
      >
        •••
      </button>

      <ActionMenu
        isOpen={isOpen}
        actions={actions.map((a) => ({
          ...a,
          onClick: () => {
            setIsOpen(false);
            a.onClick();
          },
        }))}
      />
    </div>
  );
};
