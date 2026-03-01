import React from 'react'
import { NavbarSimple } from './components/Navbar'
import {  Card } from './pages/Card'


const App = () => {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Card/>}>
      <Route path='/' element={< NavbarSimple/>}/>
      <Route path='/' element={<Layout/>}/>
        
      </Route>
     </Routes>
    </div>
  )
}

export default App