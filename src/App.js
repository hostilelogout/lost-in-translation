
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Login from './Views/Login';
import Translation from './Views/Translation';
import Profile from './Views/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={ <Login />}> </Route>
          <Route path='/Translation' element={ <Translation />}> </Route>
          <Route path='/Profile' element={ <Profile />}> </Route> 
        </Routes>
      </div>
    </BrowserRouter> 
  );
}

export default App;
