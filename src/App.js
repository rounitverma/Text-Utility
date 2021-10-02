// import logo from './logo.svg';
// import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from 'react';
import Alert from './components/Alert';



function App() {
  const [mode, setmode] = useState('light');
  const [modeText, setmodeText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type,
    })
  }

  const toggleMode = ()=> {
    if(mode==='light'){
      setmode('dark');
      setmodeText('Enable Light Mode');
      document.body.style.backgroundColor = '#111c4c';
      showAlert("Dark mode has now been enabled", 'success');
    }
    else {
      setmode('light');
      setmodeText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has now been enabled", 'success');
    }
  }
  
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} modeText={modeText} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Textform heading="Enter text to be analysed below" mode={mode} showAlert={showAlert}/>
        <About/>
      </div>
    </>
  );
}

export default App;
