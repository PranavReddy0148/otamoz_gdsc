import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Donate from './component/donate.jsx'
import SourceType from './component/sourceType.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Layout from './layout.jsx'
import Landing from './component/landing.jsx'
import Volunteering from './component/volunteering.jsx'
import DonateButton from './component/donateButton.jsx'
import GoogleMap from './component/map.jsx'
import StaticLocation from './component/staticlocation.jsx'
import Contact from './component/contact.jsx'
import Team from './component/team.jsx'
import Login from './component/register.jsx'
import Drawer from './component/drawer.jsx'
import Notifications from './component/notifications.jsx'
import Unread from './component/unread.jsx'






const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Landing/>
      },
      {
        path:"donate",
        element:<DonateButton/>,
      },
      {
        path:"volunteers",
        element:<Volunteering/>
      },
      {
        path:"location",
        element:<GoogleMap/>
      },
      {
        path:"priorityArea",
        element:<StaticLocation/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"team",
        element:<Team/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"profile",
        element:<Drawer/>
      },
      {
        path:"notifications",
        element:<Notifications/>
      },
      {
        path:"unread",
        element:<Unread/>
      }
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
