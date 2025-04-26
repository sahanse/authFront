import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {HomePage, AuthPage} from "./pages"
import {GoogleOAuthProvider} from "@react-oauth/google"
import { Provider } from 'react-redux'
import store from "./store/store.js"

const router = createBrowserRouter([
  {
    path:'',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:'auth',
        element:(
          <GoogleOAuthProvider>
            <AuthPage/>
          </GoogleOAuthProvider>
        )
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
