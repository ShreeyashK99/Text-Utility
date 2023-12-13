import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Alerts from './components/Alerts';
import TextForm from './components/textForm';

// import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

// Layouts




function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode is enabled", 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path='/'>
  //       <Route path='/' element={<TextForm showAlert={showAlert} heading='Enter the Text below' mode={mode} toggleMode={toggleMode} />} />
  //       <Route path='/about' element={<About />} />
  //     </Route>
  //   )
  // );


  return (
    <>

      <Navbar title="TextUtils" about="About Textutils" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <TextForm showAlert={showAlert} heading='Enter the Text below' mode={mode} toggleMode={toggleMode} />
      <About />
      {/* <RouterProvider router={router} /> */}
      
    </>
  )
}

export default App;















