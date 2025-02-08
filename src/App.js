import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Contact from './Components/Contact/Contact';
import FindHelp from './Components/FindHelp/FindHelp';
import Login from './Components/Login/login';
import Dashboard from './Components/Dashboard/Dashboard';
import ChatBot from './Components/ChatBot/Chatbot';
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/find-help' element={<FindHelp />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/chat' element={<ChatBot />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
