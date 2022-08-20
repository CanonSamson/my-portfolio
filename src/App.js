import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landingpage from './pages/landingpage/landingpage';
import ProjectPage from './pages/ProjectPage';



function App() {
  return (
  <BrowserRouter >
    <Routes>
        <Route path="/" element={<Landingpage />}  />
        <Route path="/project/:id" element={<ProjectPage />}  />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
