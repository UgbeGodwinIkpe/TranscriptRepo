// rrd imports
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// react-toastify imports
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// mui imports
import { StyledEngineProvider } from '@mui/material'

// layout imports
import { AlumniLayout, InstitutionLayout, Main } from './layouts'

// pages imports
import { Login, InstitutionLogin, InstitutionSignup, InstitutionDashboard, ErrorPage, ForgotPassword, ChangePassword, AlumniDashboard, LandingPage, AlumniSignup, AlumniVerification } from './pages'

// components imports
import { SelectLogin } from './components'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <LandingPage/>,
        },
        {
          path: '/selectlogin',
          element: <SelectLogin/>,
          errorElement: <ErrorPage/>
        },

        {
          path: '/alumni/signup',
          element: <AlumniSignup/>,
          errorElement: <ErrorPage/>
        },

        {
          path: '/alumni/login',
          element: <Login/>,
          errorElement: <ErrorPage/>
        },
        
        {
          path: '/alumni/:id/verify',
          element: <AlumniVerification/>,
          errorElement: <ErrorPage/>
        },

        {
          path: '/institution/password-recovery',
          element: <ForgotPassword />,
          errorElement: <ErrorPage/>
        },

        {
          path: '/institution/signup',
          element: <InstitutionSignup/>,
          errorElement: <ErrorPage/>
        },

        {
          path: '/institution/login',
          element: <InstitutionLogin/>,
          errorElement: <ErrorPage/>
        },

        {
          path: '/institution',
          element: <InstitutionLayout/>,
          errorElement: <ErrorPage/>,
          children:[
            {
              path: '/institution/:id/dashboard',
              element: <InstitutionDashboard/>,
              errorElement: <ErrorPage/>
            },
    
          ]
        },

        {
          path: '/alumni',
          element: <AlumniLayout/>,
          errorElement: <ErrorPage/>,
          children: [

            {
              path: '/alumni/:id/dashboard',
              element: <AlumniDashboard/>,
              errorElement: <ErrorPage/>
            },

            {
              path: '/alumni/:id/change-password',
              element: <ChangePassword />,
              errorElement: <ErrorPage/>
            },
          ]  

        }

      ]
    }
  ])

  return (
    <div>
      <StyledEngineProvider injectFirst>
        <RouterProvider router={router} />
        <ToastContainer/>
      </StyledEngineProvider>
    </div>
  )
}

export default App
