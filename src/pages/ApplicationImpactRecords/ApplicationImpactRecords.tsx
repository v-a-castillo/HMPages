import { columnsM, mockData } from '@/data/mock-data'; 
import { TableContainer } from '@shared/components/TableContainer';
import { useTableActions } from '@/hooks/useTableActions';

type AppImpactRecord = {
  id: number;
  appImpactNumber: string;
  appImpactName: string;
  humanaAppId: string;
  itAppOwner: string;
};
 

export const AppImpactTablePage = () => {

  const {handleGroupBy,
        columns,
        data,
        handleSort,
        handleSearch,
        sortState,
        currentPage,
        handlePageChange,
        groupByKey} = useTableActions(columnsM, mockData);

  return (
    <div>
      <h1>Application Impact Records</h1>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", padding: "5px 25px" }}>
        <span>
          <label style={{ marginRight: "8px", fontWeight: "bold" }}>Group by:</label>
          <select
            value=""
            onChange={(e) => handleGroupBy(e.target.value)}
            style={{ padding: "6px", borderRadius: "4px" }}
          > 
            <option value="">Select</option>
            {columns.map((option, index) => (
              <option key={index} value={option.key}>
                {option.label}
              </option>
            ))}
            <option value="">No group</option>
          </select>
        </span>
        <span style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
          <button
            type="button"         
            aria-label="Página anterior"
            onClick={() => console.log('Favorite button clicked')}
          >
            Favorite ⭐
          </button>
          <button
            type="button"
            aria-label="Página anterior"
            onClick={() => {
              window.location.href = '/app-impact-record-createM';
            }}
          >
            New Record ➕
          </button>
        </span>        
      </div>
      
      <TableContainer
        columns={columns}
        data={data}
        onSort={handleSort}
        onSearch={handleSearch}
        sortState={sortState}
        currentPage={currentPage}
        totalPages={1}
        onPageChange={handlePageChange}
        onGroupBy={handleGroupBy}
        groupByKey={groupByKey}
      />
    </div>
  );
};