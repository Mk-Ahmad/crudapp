import React from 'react'
import Home from './Home'
import '../bootstrap.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Create from './Create';
import Update from './Update';
import { useSelector } from 'react-redux';

const App = () => {
  const users = useSelector(state => state.users)
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/create' element={<Create />} />
    <Route path={`/edit/:id`} element={<Update />} />


    </Routes>
    </BrowserRouter>
  )
}

export default App
