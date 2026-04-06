import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='about' element={<AboutPage/>}/>
          <Route path='contact' element={<ContactPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
