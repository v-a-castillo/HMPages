import React from 'react';

// Types
interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  searchable?: boolean;
  link?: boolean;
}

interface AppImpactRecord {
  id: number;
  [key: string]: any; // allows dynamic access to fields
}

interface TableRowProps {
  rowData: AppImpactRecord;
  columns: Column[];
}

export const TableRow: React.FC<TableRowProps> = ({ rowData, columns }) => {

  console.log({ rowData }, { columns })
  return (
    <tr data-testid="app-impact-row">
      {columns.map((col) => (
        <td key={col.key}>
          {col.link ? (
            <a
              href={`/records/${rowData[col.key]}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {rowData[col.key]}
            </a>
            ) : (
              col.key == "percentComplete" ? (col.key == "percentComplete" && <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{rowData[col.key]}%</span>
                <div className="w-20 h-2 bg-gray-400 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${rowData[col.key]}%` }} />
                </div>
              </div>) : (rowData[col.key])

            )
          }
        </td>
      ))}
    </tr>
  );
};