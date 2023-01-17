
import './index.css'
import Dashboard from './Pages/Dashboard';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter as Router,Route,  Routes  } from "react-router-dom";

function App() {
  return (
    <>
   <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
//      <Route path='/dashboard' element={<Dashboard /> } />
      </Routes>


    </Router>
   
   {/* <Dashboard /> */}
    </>
  );
}

export default App;
