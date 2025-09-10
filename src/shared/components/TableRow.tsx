import React, { use } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
  path:string
}

export const TableRow: React.FC<TableRowProps> = ({ rowData, columns, path='' }) => {

  return (
    <tr data-testid="app-impact-row">
      {columns.map((col) => (
        <td key={col.key}>
          {/* todo change for the column  */}
          {col.link ? (
            <Link
              to={`/${path}/${rowData['id']}`}
            >
              {rowData[col.key]}
            </Link>
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