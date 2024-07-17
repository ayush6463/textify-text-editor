
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';

import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'





function App() {


  const [Mode, setMode] = useState("light")



  const toggleMode = () => {
    if (Mode == "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#4c614c";
      document.title = "Textify-Dark Mode"

    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      document.title = "Textify-Light Mode"

    }

  }

  
  const router= createBrowserRouter([{
    path:"/Text",
    element:<><NavBar title="TextiFy" Texthere="Items" mode={Mode} toggleMode={toggleMode} /><About/></>
  },
  {
    path:"/",
    element: <><NavBar title="TextiFy" Texthere="Items" mode={Mode} toggleMode={toggleMode} />   <div className="container">
    <TextForm texthere="Enter the Text" heading="Text Editor" mode={Mode} />
      </div></> 
    
  }



])

  return (
    <>
      
      

      <RouterProvider router={router}/>
      {/* <Alert alert="Welcome to Textify" /> */}
      {/* <About />
      */}
     

    
    


         
       
       
      
     
    



















    </>
  );
}


export default App;
