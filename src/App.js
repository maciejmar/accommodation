import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels.js';
import Hotel from './components/Hotels/Hotel/Hotel.js';




function App() {
  return (
    <div className="App">
      <Header />
      <Menu/>
      <Hotels/>
      <Hotel/>
    </div>
  );
}

export default App;
