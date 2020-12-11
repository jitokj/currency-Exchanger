import './App.css';
import Converter from './components/Converter/Converter';
import Header from './components/Header/Header';

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
    </div>
  );
}

export default App;
