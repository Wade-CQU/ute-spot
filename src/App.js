import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import HomePage from './Pages/HomePage';
import Details from './Pages/Details'

function App() {

  return (
    <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/details' element={<Details/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
