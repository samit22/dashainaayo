import './App.css';
import Router from './Components/Router/route';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Router/>
    </div>
    </BrowserRouter>
  );
}

export default App;
