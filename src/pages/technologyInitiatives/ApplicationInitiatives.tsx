import { getTechnologyInitiativesAction } from "@/actions/technologyInitiatives/get-technologyInitiatives.action";
import { defaultColumnConfigIni } from "@/data/mock-data";
import { useTableActions } from "@/hooks/useTableActions";
import { useTMLQuery } from "@/hooks/useTMLQuery";
import { TableColums } from "@/shared/components/TableColums";
import { TableContainer } from "@/shared/components/TableContainer";



export const ApplicationInitiatives = () => {

  

  const {data:initiativesList} = useTMLQuery(getTechnologyInitiativesAction, 'TechinitiativesList');

  const { handleGroupBy,
    columns,
    data,
    handleSort,
    handleSearch,
    sortState,
    currentPage,
    handlePageChange,
    groupByKey,
    visibleColumns,
    handlerColumView} = useTableActions(defaultColumnConfigIni, initiativesList);

  return (
    <div>
      <h1>Technology Initiatives List</h1>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", padding: "5px 25px" }}>
        <span style={{ display: "flex"}}>
          <TableColums columns={columns} onChange={handlerColumView}></TableColums>
        </span>
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
        columns={visibleColumns}
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

}