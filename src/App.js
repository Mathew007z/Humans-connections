import React, { Fragment } from 'react';
import './app.css';
import Login from './components/Login/Login';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App