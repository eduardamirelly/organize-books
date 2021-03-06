import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/pages/LandingPage';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import HomeBooks from './components/pages/HomeBooks';

function App() {
  return (

    <>
      <Router>
        <Routes>
          {/* ROUTE HOME */}
          <Route path='/' exact element={<LandingPage />} />
          {/* ROUTE LOGIN */}
          <Route path='/login' element={<Login />} />
          {/* ROUTE REGISTER */}
          <Route path='/register' element={<Register />} />
          {/* ROUTE HOME BOOKS */}
          <Route path='/home' element={<HomeBooks />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
