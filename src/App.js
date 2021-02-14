import './App.css';
import { Route } from 'react-router-dom'
import Home from './screen/Home/Home'

function App() {
  return (
    <div>
      <Route exact path='/'>
        <Home />
      </Route>
    </div>
  );
}

export default App;
