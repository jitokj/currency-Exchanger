import './App.css';
import Converter from './components/Converter/Converter';
import Header from './components/Header/Header';
import LineChart from './components/LineChart/LineChart';

function App() {
  return (
    <div className="app">
     {/* header */}
     <Header />
     {/* converter */}
    <div className="app__converter">
    <Converter  />
    </div>
  
     {/* currency converter Api and coinlayer api */}
     {/* BarChart */}
     <div className="app__graph">
     <LineChart />
     </div>
    </div>
  );
}

export default App;
