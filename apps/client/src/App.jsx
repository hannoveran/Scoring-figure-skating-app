import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';
import Competitions from './pages/Competitions';
import ScoreEntry from './pages/ScoreEntry';
import StartOrderList from './pages/StartOrderList';
import Results from './pages/Results';
import ResultsDetail from './pages/ResultsDetail';
import './styles/Global.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />

          <Route path="competitions" element={<Competitions />} />
          <Route path="competition/:id" element={<StartOrderList />} />
          <Route path="score/:id" element={<ScoreEntry />} />
          <Route path="results" element={<Results />} />
          <Route path="results/:id" element={<ResultsDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
