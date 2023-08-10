// rrd imports
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom'

// react-toastify imports
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// mui imports
import { StyledEngineProvider } from '@mui/material'

// layout imports
import { AlumniLayout, InstitutionLayout, Main } from './layouts'

// pages imports
import { Login, InstitutionLogin, InstitutionSignup, InstitutionDashboard, ErrorPage, ForgotPassword, ChangePassword, AlumniDashboard, LandingPage, AlumniSignup, AlumniVerification, AlumniResetPassword, NewTranscriptRequestPage, TranscriptTrackingPage, LogoutPage, TranscriptDetailPage } from './pages'

// components imports
import { SelectLogin } from './components'

// redux imports
import { useSelector } from 'react-redux';

function App() {

  const { user } = useSelector((state) => state.auth)

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
          path: '/logout',
          element: <LogoutPage/>,
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
          element: user ? <AlumniVerification/> : <Navigate to={`/alumni/login`} />,
          errorElement: <ErrorPage/>
        },

        {
          path: '/alumni/reset-password',
          element: <ForgotPassword />,
          errorElement: <ErrorPage/>
        },

        {
          path: '/alumni/reset-password/:token',
          element: <AlumniResetPassword/>,
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
      ]
    },

    {
      path: '/alumni',
      element: user ? <AlumniLayout/> : <Navigate to={`/alumni/login`} /> ,
      errorElement: <ErrorPage/>,
      children: [

        {
          path: '/alumni/:id/dashboard',
          element: user ? <AlumniDashboard/> : <Navigate to={`/alumni/login`} />,
          errorElement: <ErrorPage/>
        },

        {
          path: '/alumni/:id/change-password',
          element: user ? <ChangePassword /> : <Navigate to={`/alumni/login`} />,
          errorElement: <ErrorPage/>
        },
        {
          path: '/alumni/:id/transcripts/',
          element: user ? <TranscriptTrackingPage/> : <Navigate to={`/alumni/login`} />,
          errorElement: <ErrorPage/>
        },

        {
          path: '/alumni/:id/transcripts/:id',
          element: user ? <TranscriptDetailPage/> : <Navigate to={`/alumni/login`} />,
          errorElement: <ErrorPage/>
        },

        {
          path: '/alumni/:id/transcripts/new',
          element: user ? <NewTranscriptRequestPage/> : <Navigate to={`/alumni/login`} />,
          errorElement: <ErrorPage/>
        },
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
