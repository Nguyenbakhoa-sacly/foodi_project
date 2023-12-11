
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import DashboardLayout from '../layout/DashboardLayout'
import HomePage from '../pages/HomePage'
import CartPage from '../pages/CartPage'
import Menu from '../pages/Menu'
import UpdateProfilePage from '../pages/UpdateProfilePage'
import Signup from '../components/signup/signup'
import PrivateRouter from '../components/privateRouter/PrivateRouter'
import Dashboard from '../components/dashboard/admin/Dashboard'
import Users from '../components/dashboard/admin/Users'
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
  },
  {
    path: '/dashboard',
    element: <PrivateRouter>
      <DashboardLayout />
    </PrivateRouter>,
    children: [
      {
        path: '',
        element: <Dashboard />
      },
      {
        path: 'users',
        element: <Users />
      }
    ]
  },
  {
    path: "/signup",
    element: <Signup />
  }
])

export default router