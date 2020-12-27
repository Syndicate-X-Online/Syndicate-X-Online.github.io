
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar'
import Main from './Components/Main'
import PSO2 from './Components/PSO2'
import DCUO from './Components/DCUO'
import About from './Components/About'
import Streaming from './Components/Streaming'

function App() {
  return (
    
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/'><Main /></Route> 
        <Route path='/pso2'><PSO2 /></Route> 
        <Route path='/dcuo'><DCUO /></Route> 
        <Route path='/streaming'><Streaming /></Route>
        <Route path='/about'><About /></Route>
      </Switch>
    </div>
  );
}

export default App;
