import '@styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TechnologyInCreatMPage } from '@pages/technologyIniCrateM/TechnologyInCreatMPage'
import { AppImpactTablePage } from '@pages/ApplicationImpactRecords/ApplicationImpactRecords';
import { AppImpactRecordCreateMPage } from '@pages/ApplicationImpactRecords/AppImpactRecordCreateMPage';
import { ApplicationInitiatives } from '@/pages/technologyInitiatives/ApplicationInitiatives';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to the Tool</h1>} />
        <Route path="/Technology-InCreatM-Page" element={<TechnologyInCreatMPage />} />
        <Route path="/app-impact-records" element={<AppImpactTablePage />} />
        <Route path="/app-impact-record-createM" element={<AppImpactRecordCreateMPage />} />
        <Route path='/app-initiatives' element={<ApplicationInitiatives></ApplicationInitiatives>}></Route>
      </Routes>
    </Router>
  );
};
export default App