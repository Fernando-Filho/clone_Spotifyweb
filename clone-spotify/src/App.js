import './App.css'
import NavBar from "./componentes/Navbar/Index";
import PlayMusic from './componentes/PlayMusic/Index';

function App() {
  return (
    <div className="App">
      <div className='SectionA'>
      <NavBar/>
      <div className='teste'></div>
      </div>
      <PlayMusic/>
    </div>
  );
}

export default App;
