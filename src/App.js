import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import Alert from './components/Alert';



function App() {
  const [mode, setMode]=useState("light")

  const [alert, setalert]=useState(null)

  const showAlert =(message,type) =>{ 
    setalert({  //ham na is k andar 1 object banaya ha
      msg:message,
      typ:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1800);

  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#052c3b';
      showAlert("Dark mode has been enabled","warning");
      document.title='TextUtils -Dark mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils -Home';
    }
  }

  const customMode = () => {
    if (mode === 'light' || mode === 'dark') {
      setMode('red');
      document.body.style.backgroundColor = 'red';
      showAlert("Red mode has been enabled", "danger");
      document.title='TextUtils -Red mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title='TextUtils -Home';
    }
  }

  return (
    <>
        <Navbar title="TextUtils"  mode={mode} togglemode={toggleMode} customMode={customMode} home/>
        <Alert alert={alert}/>
        <div className="container my-3">
          
            {/*<About aboutText="About"/>*/}
  
            <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert}/>
            
        </div>
        
    </>   
  );
}

export default App;

