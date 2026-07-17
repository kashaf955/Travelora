import React from 'react'
import Header from './Component/Header'
import Home from './pages/Home.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Tours from './pages/Tours.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Footer from './Component/Footer.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <><Header /> <Home /><Footer /></>
  },
  {
    path: '/tours',
    element: <><Header /> <Tours /><Footer /></>
  },
  {
    path: '/gallery',
    element: <><Header /> <Gallery /><Footer /></>
  },
  {
    path: '/contact',
    element: <><Header /> <Contact /><Footer /></>
  },
  {
    path: '/about',
    element: <><Header /> <About /><Footer /></>
  },
])

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;