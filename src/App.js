import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/pages/LandingPage';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

function App() {
  return (

    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<LandingPage />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
