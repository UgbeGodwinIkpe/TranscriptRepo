// rrd imports
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import { StyledEngineProvider } from '@mui/material'

// layout imports
import { Main } from './layouts'

// pages imports
import { Dashboard, Login, InstitutionLogin, InstitutionSignup, InstitutionDashboard, ErrorPage } from './pages'

// components imports
import { SelectLogin } from './components'
import Error from './pages/Error/Error'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <Dashboard/>
        },
        
        {
          path: '/institution/:id/dashboard',
          element: <InstitutionDashboard/>,
          errorElement: <ErrorPage/>
        },

        {
          path: '/selectlogin',
          element: <SelectLogin/>,
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
          path: '/alumni/login',
          element: <Login/>,
          errorElement: <ErrorPage/>
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
