import logo from './logo.svg';
import './App.css';
import {Hello} from './components/Hello';
/* import {WellCome} from './components/WellCome'; */
import {WellCome} from './components/WellCome';
import UserName from './components/PropExample';
import StateExample from './components/StateExample';
import StateExample2 from './components/StateExample2';
import EventHandling from './components/EventHandling';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
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
      {/* the next line used to call state example 2 page */}
      <StateExample2/>
       {/* the next line used to call event handling example page */}
      <EventHandling/>
      {/* the next line used to call state example page 
      <ParentComponent/>*/}
      {/* the next line used to call conditional rendering example page */}
      <ConditionalRendering/>

    </div>
  );
}

export default App;
