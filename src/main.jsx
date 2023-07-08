import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './home.jsx'
import Projects from './projects.jsx';

import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/projects',
    element: <Projects />
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
