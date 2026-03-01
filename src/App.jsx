import { Card, Navbar} from '@material-tailwind/react'
import React from 'react'


const App = () => {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Card/>}>
      <Route path='/' element={<Navbar/>}/>
        
      </Route>
     </Routes>
    </div>
  )
}

export default App