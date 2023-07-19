// rrd imports
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import { StyledEngineProvider } from '@mui/material'

// layout imports
import { Main } from './layouts'

// pages imports
import { Dashboard, Login, InstitutionLogin, InstitutionSignup, InstitutionDashboard } from './pages'

// components imports
import { SelectLogin } from './components'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main/>,
      children: [
        {
          index: true,
          element: <Dashboard/>
        },
        
        {
          path: '/institution/:id/dashboard',
          element: <InstitutionDashboard/>
        },

        {
          path: '/selectlogin',
          element: <SelectLogin/>
        },

        {
          path: '/institution/signup',
          element: <InstitutionSignup/>
        },

        {
          path: '/institution/login',
          element: <InstitutionLogin/>
        },

        {
          path: '/alumni/login',
          element: <Login/>
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
