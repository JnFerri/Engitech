
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login.js';
import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';
import Home from './Pages/Home.js';
import { useEffect} from 'react';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.js'
import { useUsuario } from './Context/Usuario.js';

function App() {
  const {setIsAuth , IsAuth} = useUsuario()


  function shouldForwardProp(propName, target) {
    if (typeof target === "string") {
        // For HTML elements, forward the prop if it is a valid HTML attribute
        return isPropValid(propName);
    }
    // For other elements, forward all props
    return true;
  }

  useEffect(() => {
    const authToken = localStorage.getItem('tokenAuth')
      if(authToken === process.env.REACT_APP_TOKEN_API ){
        setIsAuth(true)
      }else{
        setIsAuth(false)
      }
    }
  ,[setIsAuth])

  return (
    <div className="App">
      <StyleSheetManager shouldForwardProp={shouldForwardProp} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<ProtectedRoute component={Home} isAuthenticated={IsAuth} />} />
        </Routes>
      </BrowserRouter>
      </StyleSheetManager>
    </div>
  )
}

export default App;
