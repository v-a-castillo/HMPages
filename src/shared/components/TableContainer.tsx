import React from 'react';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { PaginationControls } from './PaginationControls';
import styles from '@styles/TableStyles.module.css'; // if using CSS modules

// Types
type SortDirection = 'asc' | 'desc';

interface SortState {
  key: string;
  direction: string;
}

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  searchable?: boolean;
  link?: boolean;
}

interface AppImpactRecord {
  id: number;
  [key: string]: any; // for dynamic access
}

interface TableContainerProps {
  columns: Column[];
  data: AppImpactRecord[];
  onSort: (key: string) => void;
  onSearch: (key: string, value: string) => void;
  sortState: SortState;
  onGroupBy: (key: string) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  groupByKey?: string | null;
  
}

export const TableContainer: React.FC<TableContainerProps> = ({
  columns,
  data,
  onSort,
  onSearch,
  sortState,
  onGroupBy,
  groupByKey,
  currentPage,
  totalPages,
  onPageChange
}) => {
  const originalData: AppImpactRecord[] = data.filter(() => true); // Create a shallow copy for rendering

  const groupedData = groupByKey
    ? data.reduce((acc, item) => {
        const groupValue = item[groupByKey] ?? 'Unknown';
        if (!acc[groupValue]) acc[groupValue] = [];
        acc[groupValue].push(item);
        return acc;
      }, {} as Record<string, AppImpactRecord[]>)
    : null;

  return (
    <div className={styles.wrapper}>
      <table className={styles.table} data-testid="app-impact-table">
        <TableHeader
          columns={columns}
          onSort={onSort}
          onSearch={onSearch}
          onGroupBy={onGroupBy}
          sortState={sortState}
        />
        <tbody>
          {groupedData ? (
            Object.entries(groupedData).map(([group, records]) => (
              <React.Fragment key={group}>
                {records.length > 1 ? (
                  <tr>
                    <td colSpan={columns.length} style={{ fontWeight: 'bold', backgroundColor: '#e0d7ff' }}>
                      Group: {group}
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td colSpan={columns.length} style={{ backgroundColor: '#ccc', height: '2px', margin: 0, padding: 0 }}>
                    </td>
                  </tr>
                )}
                {records.map((row) => (
                  <TableRow key={row.id} rowData={row} columns={columns} />
                ))}
              </React.Fragment>
            ))
          ) : originalData.length > 0 ? (
            originalData.map((row) => (
              <TableRow key={row.id} rowData={row} columns={columns} />
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>No records found</td>
            </tr>
          )}
        </tbody>
      </table>
      
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />

    </div>
  );
};

