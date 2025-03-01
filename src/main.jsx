import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layouts/Root';
import ErrorPages from './Components/ErrorPages';
import Home from './Pages/Home/Home';
import AddBlogs from './Pages/Add Blog/AddBlogs';
import AllBlogs from './Pages/All Blogs/AllBlogs';
import FeaturedBlogs from './Pages/FeaturedBlogs/FeaturedBlogs';
import Wishlists from './Pages/WishLists/Wishlists';
import LogIn from './Authentication/LogIn/LogIn';
import SignUp from './Authentication/SignUp/SignUp';
import FirebaseProvider from './Firbease/FirebaseProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
import MyBlogs from './Pages/MyBlogs/MyBlogs';
import BlogDetails from './Pages/BlogDetails/BlogDetails';
import UpdateBlogs from './Components/UpddateBlogs/UpdateBlogs';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPages></ErrorPages>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        errorElement:<ErrorPages></ErrorPages>,
     

      },
      {
        path:'/addblogs',
        element:<PrivateRoute><AddBlogs></AddBlogs></PrivateRoute>
      },
      {
        path:'/allblogs',
        element:<AllBlogs></AllBlogs>,
        // loader: () => fetch('https://nextgen-blogs.vercel.app/addblogs')
      },
      {
        path:'/featuredblogs',
        element:<FeaturedBlogs></FeaturedBlogs>
      },
      {
        path:'/wishlists',
        element:<PrivateRoute><Wishlists></Wishlists></PrivateRoute>
      },
      {
        path:'/login',
        element:<LogIn></LogIn>
      },
      {
        path:'/blogdetails/id/:id',
        element:<PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'myblogs',
        element:<PrivateRoute><MyBlogs></MyBlogs></PrivateRoute>
      },
      {
        path:'/updateBlogs/:id',
        element:<PrivateRoute><UpdateBlogs></UpdateBlogs></PrivateRoute>
      }
    
    ]
  },
]);

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <FirebaseProvider>
     <RouterProvider router={router} />
  </FirebaseProvider>
    </QueryClientProvider>
  
  </React.StrictMode>,
)
