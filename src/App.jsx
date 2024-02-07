

import './App.css'
import Count from './component/counts'
import Donate from './component/donate'
import Drawer from './component/drawer'

import Feeders from './component/feeders'
import Footer from './component/footer'
import Navbar from './component/navbar'
import PersonalInfo from './component/personalinfo'
import Search from './component/search'
import Services from './component/services'
import Count1 from './component/count1'
import Foot from './component/upperfoot'
import Volunteers from './component/volunteer'
import SourceType from './component/sourceType'
import Date from './component/date'
import DateAndTime from './component/date'
import TimeInput from './component/time'

import Clock from './component/clock'
import MapComponent from './component/map'
import GoogleMap from './component/map'
import Volunteering from './component/volunteering'


function App() {

  return (
    <>
    <Navbar />
   
    <Search/>
    
    <Feeders/>
    <Volunteers/>
    <Services/>
    <Foot/>
    <Drawer/>
    <Count1/>
    <Donate/>
    <SourceType/>
    <DateAndTime/>
    <GoogleMap/>
    <Volunteering/>
    
    <Footer/>
    
    </>
  )
}

export default App
