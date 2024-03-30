import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import "./index.css";
import store from './store/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/cart', 
      element: <Cart />
    } 
  ]
  }, 
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
 <React.StrictMode>
 <RouterProvider router={router} /> 
  </React.StrictMode>,
  </Provider>
 
)
