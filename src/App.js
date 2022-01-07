import "aos/dist/aos.css";
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {React, useState, useEffect} from "react";
import Home from './pages/Home'
import Loader from "./Loader";
import { Route, Routes } from 'react-router-dom'


function App() {
  const [page, setPage] = useState(<Loader/>)

  useEffect(() => {
    let initiateLoader = setTimeout(()=>{
      setPage(<Home/>)
    }, 3000)

    return (()=>{

      clearTimeout(initiateLoader)
    })
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={page}/>
      </Routes>
    </>
  );
}

export default App;
