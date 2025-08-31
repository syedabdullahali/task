import React from "react";

type Column<T> = {
  key: keyof T;
  title: string;
  render?: (row: T) => React.ReactNode;
  className?: string;
};

type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
  actions?: (row: T) => React.ReactNode;
};



const Table = <T,>({ columns, data, actions }: TableProps<T>) => {
  return (
              <div className="overflow-x-auto rounded-xl">
    <table className="min-w-full h-fit">
      <thead>
        <tr className="bg-gray-100 border-b border-gray-300 ">
          {columns.map((col) => (
            <th
              key={col.key as string}
              className=" px-4 py-3 text-left"
            >
              {col.title}
            </th>
          ))}
          {actions && <th className=" px-4 py-2">Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="hover:bg-gray-50 border-t border-gray-300 ">
            {columns.map((col) => (
              <td key={col.key as string} className=" px-4 py-5">
                {col.render ? col.render(row) : (row[col.key] as any)}
              </td>
            ))}
            {actions && <td className=" px-4 py-2">{actions(row)}</td>}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Table



