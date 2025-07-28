
import './App.css'
import Home from './home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './create'
import Update from './update'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/create' element={<Create/>} ></Route>
          <Route path='/update/:id' element={<Update/>} ></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
