
import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import HomePage from '../pages/HomePage'
import Menu from '../pages/Menu'

const router = createBrowserRouter([

  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/menu",
        element: <Menu />
      }
    ]
  }
])

export default router