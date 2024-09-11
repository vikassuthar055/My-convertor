//nimport logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
import About from './components/About';
import { useState } from 'react';
import React from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  //Switch,
  Route,

} from "react-router-dom";
import { Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const removecolor=()=>{
     document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-secondary')
  }


  const toggleMode=(cls)=>{
    removecolor();
    document.body.classList.add("bg-" + cls);
    if (mode === 'light'){
       setMode ('dark');
       document.body.style.backgroundColor='green';
       showAlert("dark mode has been enabled ", "success")
     } 
    else{setMode ('light');
       document.body.style.backgroundColor='white';
       showAlert("Light mode has been enabled ", "success")
      }
    }
   const showAlert = (message, type)=>{
       setAlert({ 
        msg: message,
        type:type
      })
      setTimeout(() => {setAlert(null)}, 4000)
     }

  return (<>    
                 
         <Router>
           <Navbar title="My converter" mode={mode}  toggleMode={toggleMode}/>
          <Alert alert={alert}/>
         
          < div className='container my-3'>
         
          <Routes>
          <Route path="/About" element={<About mode={mode}/>}>
          </Route>
          <Route path="/" element={<TestForm heading="Enter The text to analyze" mode={mode} showAlert={showAlert}/>} >
          </Route>
          </Routes>

          </div>
          </Router>

         </>);
}

export default App;
