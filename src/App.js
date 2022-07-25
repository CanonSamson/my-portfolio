import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landingpage from './pages/landingpage/landingpage';




function App() {
  return (
  <BrowserRouter >
    <Routes>
        <Route path="/" element={<Landingpage />}  />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
