import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(12 47 92)';
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has been enabled", "success");
    }
  }
  return (
    <>

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About" />
      <Alert alert={alert} />
      <div className="container my-3">




        <TextForm exact showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />

      </div>

    </>
  );
}
export default App;