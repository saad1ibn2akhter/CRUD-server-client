import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './components/Users.jsx';
import Upate from './components/Upate.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: '/Users',
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/users')
  },
  {
    path:'/Update/:id',
    element:<Upate></Upate>,
    loader:({params}) => fetch(`http://localhost:5000/users/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
