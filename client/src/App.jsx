// rrd imports
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import { StyledEngineProvider } from '@mui/material'

// layout imports
import { Main } from './layouts'

// pages imports
import { Dashboard, Login } from './pages'

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
          path: '/selectlogin',
          element: <SelectLogin/>
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
