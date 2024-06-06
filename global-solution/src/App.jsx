import './style.scss';
import Home from '/src/pages/Home/Home';
import Contato from '/src/pages/Contato/Contato';
import Login from '/src/pages/LoginPage/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
