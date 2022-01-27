import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
// import { Routes, Route } from 'react-router-dom'
import { Switch, Route } from "react-router-dom";

import Login from './pages/Login'
import Header from './common/Header';
import Footer from './common/Footer';
import Upload from './pages/Upload';
import Success from './pages/Success';
import Landing from './pages/Landing';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/login' component={Login} />
        <Route path='/upload' component={Upload} />
        <Route path='/success' component={Success} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
