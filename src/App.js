import React,{ useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Data from "./components/Data";

function App() {

  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  
  const showAlert=(message,type)=>{
    setAlert(
      {
        msg:message,
        type:type
      }
    )

    setTimeout(() => {
      setAlert(null)
    }, 1000);
    
  }

  const toggleMode=()=>{
    if(mode==='dark')
    {
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert("light mode enabled","success");
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor="#03041a"
      showAlert("dark mode enabled","success");
    }
  }
  return (
    <>
          <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      
  
          <div className="container">
            <Switch>
              
            <Route path="/about" >
                 <About mode={mode}/> 
                 
               </Route>
               <Route path="/" > 
                 <Textform heading="Try TextUtils-word counter,character counter" mode={mode} showAlert={showAlert}/> 
               </Route>
               
            </Switch>
          
          </div>
         </Router>
    </>
  );
}

export default App;
