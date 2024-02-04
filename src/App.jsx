

import './App.css'
import Count from './component/counts'
import Drawer from './component/drawer'

import Feeders from './component/feeders'
import Footer from './component/footer'
import Navbar from './component/navbar'
import PersonalInfo from './component/personalinfo'
import Search from './component/search'
import Services from './component/services'
import Foot from './component/upperfoot'
import Volunteers from './component/volunteer'

function App() {

  return (
    <>
    <Navbar />
   
    <Search/>
    
    <Feeders/>
    <Volunteers/>
    <Services/>
    <Foot/>
    <Navbar />
    <Drawer/>
    
    <Footer/>
    
    </>
  )
}

export default App
