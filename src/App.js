import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //Wheather dark mode is enabled or not

  const[alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#15293f';
      showAlert('Dark mode has been enabled', 'success');
      // document.title="TextUtils - Dark Mode"; 

      // setInterval(() => {
      //   document.title = 'TextUtils is amazing';
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Install TextUtils now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      // document.title = "TextUtils  - Light Mode";
    }
  }

  
  return (
   <>
   
   {/* <Router> */}
     <Navbar title="TextUtils" aboutText="About" mode ={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
   
     <div className="container my-3">
        {/* <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> 
          </Route>
        </Switch> */}
        <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Case Converter" mode={mode}/> 
        {/* <About mode={mode}/> */}
     </div>
   {/* </Router> */}
   </>
  );
}

export default App;
