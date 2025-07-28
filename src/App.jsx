import React from 'react'
import Homepage from './components/pages/Homepage'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import PageNotFound from './components/pages/PageNotFound'
import AboutPage from './components/pages/AboutPage'
import ContactPage from './components/pages/ContactPage'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Homepage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>

          <Route path="*" element={<PageNotFound/>}/>

        </Routes>
      </Router>
      
    </div>
  )
}

export default App
