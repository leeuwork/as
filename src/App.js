import './App.css';
import { Route } from 'react-router-dom'
import Home from './screen/Home/Home'

function App() {
  return (
    <div className="app">
      <Route exact path='/'>
        <Home />
      </Route>
    </div>
  );
}

export default App;
