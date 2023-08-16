import React from 'react'
import './index.css'
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';


import Home from './pages/home';
import About from './pages/about';
import ErrorPage from './pages/errorpage';
const router = createBrowserRouter([
    {
      path : '/',
      element: <Home />
    },
    {
      path : '/about',
      element: <About />
    },
    {
      path : '/error',
      element: <ErrorPage />
    },
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
