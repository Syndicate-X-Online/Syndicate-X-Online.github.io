
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar'
import Main from './Components/Main'

function App() {
  return (
    
    <div className="App">
      <NavBar />
      <Route exact path='/'><Main /></Route> 
      <Route path='/pso2'><Main /></Route> 
      <Route path='/dcuo'><Main /></Route> 
      <Route path='/about'><Main /></Route> 
    </div>
  );
}

export default App;
