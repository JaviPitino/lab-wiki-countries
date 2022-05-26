
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountriesDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={ <CountriesList /> } />
          <Route path='/:countryurl' element={ <CountriesDetails />} />
        </Routes>
    </div>
  );
}

export default App;
