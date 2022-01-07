import "aos/dist/aos.css";
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
