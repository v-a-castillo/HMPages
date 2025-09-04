import React, { useState } from 'react';
import styles from './TableStyles.module.css'; // if using CSS modules


// Types
interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  searchable?: boolean;
  link?: boolean;
}

type SortDirection = 'asc' | 'desc';

interface SortState {
  key: string;
  direction: string;
}

interface TableHeaderProps {
  columns: Column[];
  onSort: (key: string, direction: string) => void;
  onSearch: (key: string, value: string) => void;
  onGroupBy: (key: string) => void;
  sortState: SortState;
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  columns,
  onSort,
  onSearch,
  onGroupBy,
  sortState,
}) => {
  const [searchTerms, setSearchTerms] = useState<Record<string, string>>({});

  const toggleSort = (key: string) => {
    const isCurrent = sortState.key === key;
    const newDirection: SortDirection = isCurrent && sortState.direction === 'asc' ? 'desc' : 'asc';
    onSort(key, newDirection);
  };

  const handleSearchChange = (key: string, value: string) => {
    setSearchTerms({ ...searchTerms, [key]: value });
    onSearch(key, value);
  };

  const handleGroupBy = (key: string) => {
    onGroupBy(key);
  };

  return (
    <thead>
      <tr>
        {columns.map((col) => (
          <th key={col.key} 
          className={sortState.key === col.key ? styles.sorted : ''}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'space-around' }}>
              <span style={{width: 'max-content'}}>
                {col.label}
                {sortState.key === col.key && (
                  <strong>{sortState.direction === 'asc' ? ' 🔼' : ' 🔽'}</strong>
                )}
              </span>
              <span style={{ display: 'flex', gap: '6px', alignItems: 'center', justifyContent: 'end' }}>
                <button onClick={() => toggleSort(col.key)} aria-label="Sort">
                  ↕
                </button>
                <button onClick={() => handleGroupBy(col.key)} aria-label="Group by">
                  ⊞
                </button>
              </span>
       
            </div>
            <input
              type="text"
              placeholder={`Search ${col.label}`}
              value={searchTerms[col.key] || ''}
              onChange={(e) => handleSearchChange(col.key, e.target.value)}
              style={{ width: '90%' }}
            />
          </th>
        ))}
      </tr>
    </thead>
  );
};