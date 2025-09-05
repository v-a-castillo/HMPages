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
            rowData[col.key]
          )}
        </td>
      ))}
    </tr>
  );
};