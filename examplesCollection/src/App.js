import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
/* import {WellCome} from './components/WellCome'; */
import WellCome from './components/WellCome';
function App() {
  return (
    <div className="App">
      <Hello/>
      <WellCome/>
    </div>
  );
}

export default App;
