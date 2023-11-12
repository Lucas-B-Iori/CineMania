import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Filmes from './pages/Filmes.tsx'
import Series from './pages/Series.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/filmes",
    element: <Filmes />
  },
  {
    path: "/series",
    element: <Series />
  }
])

export default router