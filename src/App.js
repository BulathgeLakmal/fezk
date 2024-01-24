import MainContent from './components/Main-Content';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login_Register/Login';
import Register from './components/Login_Register/Register';

function App() {
  return (
    <div className="App">
      {/* main router view */}
      <Routes>
        <Route path='/*' element={<MainContent />} />
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>

    </div >
  );
}

export default App;
