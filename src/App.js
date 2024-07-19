import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#20212b';
      showAlert("Dark Mode has been Enabled","success");
      document.title = "TextUtlis - Dark mode";
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled","success");
      document.title = "TextUtlis - Light mode";


    }
  }
  return (
    <>
    <Router>
<Navbar title= "TextUtlis" about= "About TextUtlis" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
          <Route path='/about' element={<About mode={mode}/>} />
          <Route path="/" element= {<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}/>
        </Routes>
</div>
</Router>
        </>
  );
}

export default App;
