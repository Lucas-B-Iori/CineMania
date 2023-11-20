import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Filmes from './pages/Filmes.tsx'
import Series from './pages/Series.tsx'
import Show from './pages/Show/Show.tsx'
import NotFound from './pages/NotFound.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Filmes />
      },
      {
        path: '/series',
        element: <Series />
      },
      {
        path: '/show/:id',
        element: <Show type='movie' />
      },
      {
        path: '/series/show/:id',
        element: <Show type='tv' />
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
