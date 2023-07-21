// rrd imports
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import { StyledEngineProvider } from '@mui/material'

// layout imports
import { AlumniLayout, InstitutionLayout, Main } from './layouts'

// pages imports
import { Login, InstitutionLogin, InstitutionSignup, InstitutionDashboard, ErrorPage, ForgotPassword, ChangePassword, AlumniDashboard, LandingPage } from './pages'

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
          path: '/alumni/login',
          element: <Login/>,
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
      </StyledEngineProvider>
    </div>
  )
}

export default App
