import './App.css';
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'
import Feature from './views/Feature';
import Pokemon from './views/Pokemon';
import Moves from './views/Moves';


function App() {
  return (
    <div className="App">
      <div className='darkmode'>
        <Header />
        <Routes>
          <Route path="/" element={<Feature/>} />
          <Route path='/pokemon' element={<Pokemon/>} />
          <Route path='/moves' element={<Moves/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
