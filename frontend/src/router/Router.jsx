
import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import HomePage from '../pages/HomePage'
import Menu from '../pages/Menu'
import Signup from '../components/signup/signup'
import PrivateRouter from '../components/privateRouter/PrivateRouter'
import UpdateProfilePage from '../pages/UpdateProfilePage'
import CartPage from '../pages/CartPage'
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
      },
      {
        path: "/update-profile",
        element: <UpdateProfilePage />
      },
      {
        path: "/cart-page",
        element: <CartPage />
      }
    ]
  }, {
    path: "/signup",
    element: <Signup />
  }
])

export default router