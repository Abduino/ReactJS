import logo from './logo.svg';
import './App.css';
import {Hello} from './components/Hello';
/* import {WellCome} from './components/WellCome'; */
import {WellCome} from './components/WellCome';
import UserName from './components/PropExample';
import StateExample from './components/StateExample';
import StateExample2 from './components/StateExample2';

function App() {
  return (
    <div className="App">
      {/* the next line used to call function component example */}
      <Hello/>
      <WellCome/>
      {/* the next line used to call props example page */}
      <UserName name="Abdurehman"/>
      {/* the next line used to call state example page */}
      <StateExample/>
      {/* the next line used to call state example page */}
      <StateExample2/>

    </div>
  );
}

export default App;
