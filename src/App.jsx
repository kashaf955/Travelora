import React from 'react'
import Header from './Component/Header'
import Home from './pages/Home.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Tours from './pages/Tours.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <><Header /> <Home /></>
  },
  {
    path: '/tours',
    element: <><Header /> <Tours /></>
  },
  {
    path: '/gallery',
    element: <><Header /> <Gallery /></>
  },
  {
    path: '/contact',
    element: <><Header /> <Contact /></>
  },
  {
    path: '/about',
    element: <><Header /> <About /></>
  },
])

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;