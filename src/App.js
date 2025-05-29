import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css'
import TradePage from './pages/TradePage';

function App() {
  return (
    <div className='dark:bg-[#1f1f1f] dark:text-white'>
          <Router>
            <Routes>
              <Route path='/' element={<TradePage/>}/>
            </Routes>
          </Router>
    </div>
    
  );
}

export default App;
