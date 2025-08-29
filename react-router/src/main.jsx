import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home/Home'
import Resume from './components/Resume/Resume'
import Features from './components/Features/Features'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
     path:'feature',
     element:<Features/>
  },

  {
     path:'/resume',
     element: <Resume />
  },

    ]
  },
  

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router = {router}/>
  </StrictMode>,
)
