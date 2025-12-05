import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: (
          <Authlayout authentication={false}>
            <Login />
          </Authlayout>
        )
      }, {
        path: '/signup',
        element: (
          <Authlayout authentication={false}>
            <Signup />
          </Authlayout>
        ),
      },
      {
        path: '/all-posts',
        element: (
          <Authlayout authentication={''}>
            <Allposts />
          </Authlayout>

        )
      },
      {
        path: '/add-post',
        element: (
          <Authlayout authentication={''}>
            <Addpost />
          </Authlayout>
        ),
      },
      {path: '/edit-post/:slug',
        element: (
          <Authlayout authentication={''}>
            <Editpost />
          </Authlayout>
        ),
      },
      {
        path: '/post/:slug',
        element: <Post />,
      }
    ]
  },

  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
