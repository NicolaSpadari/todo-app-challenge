import Navbar from './Navbar';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <Router>
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <div className='grid flex-1 place-content-center'>
                <Switch>
                    <Route path="/" element={<HomePage />} />
                </Switch>
            </div>
        </div>
    </Router>
    
  );
}

export default App;
