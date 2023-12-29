import logo from './logo.svg';
import './App.css';
// import FunctionalGreeting from './components/FunctionalGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import Sidebar from './components/SidebarChallenge';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import NavBarSimpleChallenge from "./components/NavBarSimpleChallenge";
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting /> */}
      {/* <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Mike" age="32" /> */}
      {/* <Sidebar /> */}
      {/* <StatefulGreeting greeting="I'm a stateful class component!"/> */}
      {/* <StatefulGreetingWithCallback greeting="I'm a stateful class component!" /> */}
      {/* <NavBarSimpleChallenge /> */}
      <EventsFunctional />
      <EventsClass />
    </div>
  );
}

export default App;
