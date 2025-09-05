import { useEffect, useState } from "react";


type AppImpactRecord = {
  id: number;
  appImpactNumber: string;
  appImpactName: string;
  humanaAppId: string;
  itAppOwner: string;
};

type Column = {
  key: string;
  label: string;
  sortable: boolean;
  searchable: boolean;
  link?: boolean;
};
export const useTableActions = (columnsProps: Column[] = [], dataInfo:any=[]) => {


    const [data, setData] = useState<AppImpactRecord[]>([]);
    const [originalData, setOriginalData] = useState<AppImpactRecord[]>([]);
    const [sortState, setSortState] = useState<{ key: keyof AppImpactRecord | ''; direction: 'asc' | 'desc' }>({ key: '', direction: 'asc' });
    const [currentPage, setCurrentPage] = useState(1);
    const [groupByKey, setGroupByKey] = useState<string | null>(null);
    


    useEffect(() => {
        // Simulate API call
        const fetchData = async () => {
          
          
          setData(dataInfo);
          setOriginalData(dataInfo);
        };
    
        fetchData();
      }, []);
    
      const handleSort = (key: string) => {
        const typedKey = key as keyof AppImpactRecord;
        const direction = sortState.key === typedKey && sortState.direction === 'asc' ? 'desc' : 'asc';
        setSortState({ key: typedKey, direction });
    
        const sortedData = [...data].sort((a, b) => {
          if (a[typedKey] < b[typedKey]) return direction === 'asc' ? -1 : 1;
          if (a[typedKey] > b[typedKey]) return direction === 'asc' ? 1 : -1;
          return 0;
        });
    
        setData(sortedData);
      };
    
      const handleSearch = (key: string, value: string) => {
        // Implement search logic here
        setData(originalData);
        
        if (!value) {
          return;
        }
    
        console.log(`Searching ${key} for ${value}`);
    
        // Save original data for reset
        const filtered = originalData.filter((item) =>
          item[key as keyof AppImpactRecord]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        );
    
        setData(filtered);
      };
    
      const handlePageChange = (page: number) => {
        setCurrentPage(page);
      };
      
      const handleGroupBy = (key: string) => {
        setGroupByKey(key);
      };


    return {
        handleGroupBy,
        columns: columnsProps,
        data,
        handleSort,
        handleSearch,
        sortState,
        currentPage,
        handlePageChange,
        groupByKey

    }

}