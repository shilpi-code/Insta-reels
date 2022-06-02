import React from 'react'
import Signup from './Components/Signup';
import {BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <Signup />
    </BrowserRouter>
  )
}

export default App