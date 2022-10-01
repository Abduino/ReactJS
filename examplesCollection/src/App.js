import logo from './logo.svg';
import './App.css';
import {Hello} from './components/Hello';
/* import {WellCome} from './components/WellCome'; */
import {WellCome} from './components/WellCome';
import UserName from './components/PropExample';



function App() {
  return (
    <div className="App">
      <Hello/>
      <WellCome/>
      <UserName name="Abdurehman"/>
    </div>
  );
}

export default App;
