import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import Details from './Pages/Details'

function App() {

  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/details' element={<Details/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
