import React from 'react';
import './App.css';
import './Psd/Nav.css';



//import Home from './Pages/home';
//import Nav from './Pages/nav';
import Navigation from'./Psd/Navigation';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
     { /*<Home />
      <button className="btn btn-success">save</button>
      <Nav />
     */}
        <Navigation />
        
    
      </div>
  )
}
export default App;
