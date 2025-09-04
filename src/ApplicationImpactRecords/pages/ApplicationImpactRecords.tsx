import { useState, useEffect } from 'react';
import { TableContainer } from '../components/TableContainer';
import { Button } from '../../components/ui/button';

type AppImpactRecord = {
  id: number;
  appImpactNumber: string;
  appImpactName: string;
  humanaAppId: string;
  itAppOwner: string;
};

export const AppImpactTablePage = () => {
  const [data, setData] = useState<AppImpactRecord[]>([]);
  const [originalData, setOriginalData] = useState<AppImpactRecord[]>([]);
  const [sortState, setSortState] = useState<{ key: keyof AppImpactRecord | ''; direction: 'asc' | 'desc' }>({ key: '', direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [groupByKey, setGroupByKey] = useState<string | null>(null);
  const columns = [
    { key: 'appImpactNumber', label: 'App Impact Number', sortable: true, searchable: true, link: true },
    { key: 'appImpactName', label: 'App Impact Name', sortable: true, searchable: true, link: true },
    { key: 'humanaAppId', label: 'Humana App ID', sortable: true, searchable: true },
    { key: 'itAppOwner', label: 'IT Application Owner', sortable: true, searchable: true },
    { key: 'liaison', label: 'Liaison', sortable: true, searchable: true },
    { key: 'delegate', label: 'Delegate', sortable: true, searchable: true },
    { key: 'l3', label: 'L3', sortable: true, searchable: true },
    { key: 'l2', label: 'L2', sortable: true, searchable: true },
    { key: 'tlmRep', label: 'TLM Rep', sortable: true, searchable: true },
    { key: 'targetedCommitmentDate', label: 'Targeted Commitment Date', sortable: true, searchable: true },
    { key: 'timesTcdUpdated', label: 'Times TCD Updated', sortable: true, searchable: true },
    { key: 'percentComplete', label: '% Complete', sortable: true, searchable: true },
    { key: 'riskAcceptanceReason', label: 'Risk Acceptance Reason', sortable: true, searchable: true },
    { key: 'numRiskAcceptances', label: '# of Risk Acceptances', sortable: true, searchable: true },
    { key: 'tlmStage', label: 'TLM Stage', sortable: true, searchable: true },
    { key: 'status', label: 'Status', sortable: true, searchable: true },
    { key: 'technologyInitiative', label: 'Technology Initiative', sortable: true, searchable: true, link: true },
    { key: 'humanaEol', label: 'Humana EoL', sortable: true, searchable: true },
    { key: 'technologyKickoff', label: 'Technology Kickoff', sortable: true, searchable: true },
    { key: 'requestHelp', label: 'Request Help', sortable: true, searchable: true }
    
    //{ key: 'tlmraNumber', label: 'TLMRA Number', sortable: true, searchable: true, link: true },
    //{ key: 'missingEolReason', label: 'Why are you missing EoL?', sortable: true, searchable: true },
    //{ key: 'approval', label: 'Approval', sortable: true, searchable: true },
    //{ key: 'approvalNotes', label: 'Approval Notes', sortable: true, searchable: true },
    //{ key: 'requestedTcd', label: 'Requested Targeted Commitment Date', sortable: true, searchable: true },
    //{ key: 'state', label: 'State', sortable: true, searchable: true },
    //{ key: 'opened', label: 'Opened', sortable: true, searchable: true },
    //{ key: 'closed', label: 'Closed', sortable: true, searchable: true }
  ];
  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      const mockData = [
        {
          id: 1,
          appImpactNumber: 'AIR-001',
          appImpactName: 'Impact Analysis A',
          humanaAppId: 'HUM123',
          itAppOwner: 'John Doe',
          liaison: 'Alice Johnson',
          delegate: 'Bob Lee',
          l3: 'L3 Owner A',
          l2: 'L2 Owner A',
          tlmRep: 'TLM Rep A',
          targetedCommitmentDate: '2025-10-01',
          timesTcdUpdated: 2,
          percentComplete: 75,
          riskAcceptanceReason: 'Pending migration',
          numRiskAcceptances: 1,
          tlmStage: 'Planning',
          status: 'In Progress',
          technologyInitiative: 'TI-001',
          humanaEol: '2026-03-15',
          technologyKickoff: '2025-08-01',
          requestHelp: 'Need infra support',
          tlmraNumber: 'RA-001',
          missingEolReason: 'Legacy system',
          approval: 'Approved',
          approvalNotes: 'Reviewed by governance',
          requestedTcd: '2025-09-15',
          state: 'Open',
          opened: '2025-07-01',
          closed: null
        },
        {
          id: 2,
          appImpactNumber: 'AIR-002',
          appImpactName: 'Impact Analysis B',
          humanaAppId: 'HUM456',
          itAppOwner: 'Jane Smith',
          liaison: 'Carlos Mendez',
          delegate: 'Dana White',
          l3: 'L3 Owner B',
          l2: 'L2 Owner B',
          tlmRep: 'TLM Rep B',
          targetedCommitmentDate: '2025-11-10',
          timesTcdUpdated: 1,
          percentComplete: 50,
          riskAcceptanceReason: 'Awaiting vendor input',
          numRiskAcceptances: 2,
          tlmStage: 'Execution',
          status: 'Delayed',
          technologyInitiative: 'TI-002',
          humanaEol: '2026-06-30',
          technologyKickoff: '2025-09-01',
          requestHelp: 'Need SME review',
          tlmraNumber: 'RA-002',
          missingEolReason: 'No roadmap',
          approval: 'Pending',
          approvalNotes: 'Awaiting final review',
          requestedTcd: '2025-10-01',
          state: 'Pending',
          opened: '2025-08-01',
          closed: null
        },
        {
          id: 3,
          appImpactNumber: 'AIR-003',
          appImpactName: 'Impact Analysis C',
          humanaAppId: 'HUM789',
          itAppOwner: 'Emily Davis',
          liaison: 'Frank Wilson',
          delegate: 'Grace Lee',
          l3: 'L3 Owner C',
          l2: 'L2 Owner C',
          tlmRep: 'TLM Rep C',
          targetedCommitmentDate: '2025-12-01',
          timesTcdUpdated: 0,
          percentComplete: 25,
          riskAcceptanceReason: 'Initial assessment',
          numRiskAcceptances: 0,
          tlmStage: 'Initiation',
          status: 'Not Started',
          technologyInitiative: 'TI-003',
          humanaEol: '2026-09-30',
          technologyKickoff: '2025-11-01',
          requestHelp: 'Need budget approval',
          tlmraNumber: 'RA-003',
          missingEolReason: 'Pending assessment',
          approval: 'Not Submitted',
          approvalNotes: '',
          requestedTcd: '2025-11-15',
          state: 'Open',
          opened: '2025-09-01',
          closed: null
        },
        {
          id: 4,
          appImpactNumber: 'AIR-001',
          appImpactName: 'Impact Analysis D',
          humanaAppId: 'HUM012',
          itAppOwner: 'Michael Brown',
          liaison: 'Lisa White',
          delegate: 'Bob Lee',
          l3: 'L3 Owner A',
          l2: 'L2 Owner A',
          tlmRep: 'TLM Rep A',
          targetedCommitmentDate: '2025-10-01',
          timesTcdUpdated: 2,
          percentComplete: 75,
          riskAcceptanceReason: 'Pending migration',
          numRiskAcceptances: 1,
          tlmStage: 'Planning',
          status: 'In Progress',
          technologyInitiative: 'TI-001',
          humanaEol: '2026-03-15',
          technologyKickoff: '2025-08-01',
          requestHelp: 'Need infra support',
          tlmraNumber: 'RA-001',
          missingEolReason: 'Legacy system',
          approval: 'Approved',
          approvalNotes: 'Reviewed by governance',
          requestedTcd: '2025-09-15',
          state: 'Open',
          opened: '2025-07-01',
          closed: null
        },

      ];
      
      setData(mockData);
      setOriginalData(mockData);
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