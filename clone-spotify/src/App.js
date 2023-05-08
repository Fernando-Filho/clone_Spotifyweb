import './App.css'
import NavBar from "./componentes/Navbar/Index";
import Home from "./componentes/Home/Index";
import PlayMusic from './componentes/PlayMusic/Index';

function App() {
  return (
    <div className="App">
      <div className='SectionA'>

        <NavBar/>
        <Home/>
        
      </div>
      <PlayMusic/>
    </div>
  );
}

export default App;
