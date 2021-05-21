import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Mensajes from './pages/Mensajes/Mensajes.page';
import Login from './pages/Login/Login.page';
import {ProtectedRoute} from './components/ProtectedRoute/ProtectedRoute.component';

function App(props) {

  let controlLoggin = () => {
    return{
      pathname: '/mensajes',
      state:{
        mensajes: [],
        isLogged: true
      }
    }
  }
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>ReactJS | Imagina Formación</h1>
        </header>
        <div className="App-body">
          <Route exact path="/"><Login controlLoggin={controlLoggin}/></Route>
          <ProtectedRoute exact path="/mensajes" component={Mensajes}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
