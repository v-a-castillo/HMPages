import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TechnologyInCreatMPage } from '../technologyIniCrateM/pages/TechnologyInCreatMPage'
import { AppImpactTablePage } from '../ApplicationImpactRecords/pages/ApplicationImpactRecords';
import { AppImpactRecordCreateMPage } from '../ApplicationImpactRecords/pages/AppImpactRecordCreateMPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to the Tool</h1>} />
        <Route path="/Technology-InCreatM-Page" element={<TechnologyInCreatMPage />} />
        <Route path="/app-impact-records" element={<AppImpactTablePage />} />
        <Route path="/app-impact-record-createM" element={<AppImpactRecordCreateMPage />} />
      </Routes>
    </Router>
  );
};
export default App