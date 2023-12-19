
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import DashboardLayout from '../layout/DashboardLayout'
import HomePage from '../pages/HomePage'
import CartPage from '../pages/CartPage'
import Menu from '../pages/Menu'
import UpdateProfilePage from '../pages/UpdateProfilePage'
import DetailProduct from '../pages/DetailProduct'
import Signup from '../components/signup/Signup'
import PrivateRouter from '../components/privateRouter/PrivateRouter'
import Dashboard from '../components/dashboard/admin/Dashboard'
import Users from '../components/dashboard/admin/Users'
import NewProduct from '../components/dashboard/admin/NewProduct'
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
      },
      {
        path: "/detail/:id",
        element: <DetailProduct />
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
      },
      {
        path: 'newproduct',
        element: <NewProduct />
      }
    ]
  },
  {
    path: "/signup",
    element: <Signup />
  }
])

export default router