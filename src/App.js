import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Archived from './components/Archived';
import Work from './components/Work';
import Landingpage from './pages/landingpage/landingpage';
import NotFound from './pages/NotFound';
import ProjectRoute from './pages/ProjectRoute';



function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/project" element={<ProjectRoute />}  >
          <Route path="" element={<Work />} />
          <Route path="archived" element={<Archived />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
