
import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import HomePage from '../pages/HomePage'
import Menu from '../pages/Menu'
import Signup from '../components/signup/signup'

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
  }, {
    path: "/signup",
    element: <Signup />
  }
])

export default router