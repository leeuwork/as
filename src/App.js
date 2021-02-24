import './App.css';
import { Route } from 'react-router-dom'
import Home from './screen/Home/Home'
import Resume from './screen/Resume/Resume'

function App() {
  return (
    <div className="app">
      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/resume'>
        <Resume />
      </Route> 
    </div>
  );
}

export default App;
