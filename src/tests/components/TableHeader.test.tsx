// TableHeader.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { TableHeader } from '../../ApplicationImpactRecords/components/TableHeader.tsx';

type SortDir = 'asc' | 'desc';

type Column = {
  key: string;
  label: string;
  sortable?: boolean;
  searchable?: boolean;
};

// If your component exports its props or Column type, prefer importing those:
// import type { TableHeaderProps, Column } from './TableHeader';

describe('TableHeader Component', () => {
  const mockColumns: Column[] = [
    { key: 'name', label: 'Name' },
    { key: 'appImpactNumber', label: 'App Impact Number', sortable: true, searchable: true },
    { key: 'humanaAppId', label: 'Humana App ID', sortable: true, searchable: true },
  ];

  const mockOnSort = jest.fn<void, [key: string, direction: string]>();
  const mockOnSearch = jest.fn<void, [key: string, value: string]>();
  const mockOnGroupBy = jest.fn<void, [key: string]>();

  const mockSortState = { key: 'name', direction: 'desc' }; // adjust as needed

  beforeEach(() => {
    jest.clearAllMocks();
    render(
      <table>
        <TableHeader
          columns={mockColumns}
          onSort={mockOnSort}
          onSearch={mockOnSearch}
          onGroupBy={mockOnGroupBy}
          sortState={mockSortState}
        />
      </table>
    );
  });

  test('renders the column headers correctly', () => {
    mockColumns.forEach((column) => {
      expect(screen.getByText(column.label)).toBeInTheDocument();
    });
  });

  test('allows sorting by clicking sort buttons', () => {
    // Assumes the first button corresponds to the "Name" column sort trigger
    const sortButtons = screen.getAllByRole('button');
    fireEvent.click(sortButtons[0]);
    expect(mockOnSort).toHaveBeenCalledWith('name', 'asc');

    fireEvent.click(sortButtons[0]);
    expect(mockOnSort).toHaveBeenCalledWith('name', 'desc');
  });

  test('allows searching by entering text in search boxes', () => {
    const inputs = screen.getAllByRole('textbox');
    fireEvent.change(inputs[0], { target: { value: 'Alice' } });
    expect(mockOnSearch).toHaveBeenCalledWith('name', 'Alice');
  });

  test('triggers group-by functionality when group-by button is clicked', () => {
    // Assumes the group-by button has aria-label="Group by"
    const groupButtons = screen.getAllByLabelText('Group by');
    fireEvent.click(groupButtons[0]);
    expect(mockOnGroupBy).toHaveBeenCalledWith('name');
  });
});