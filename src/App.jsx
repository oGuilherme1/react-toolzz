import './App.css'
import Login from './components/login.component';
import { Routes, Route } from 'react-router-dom';
import Perfil from './components/perfil.components';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  )
}

export default App
