import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import "./style.scss"
import New from './pages/New';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {

  const Layout = () => {
    return  (
      <>
        <Navbar/>
        <Outlet/>
      </>
    )
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/new",
          element: <New/>
        },
      ]
    },
  ])
  return (
    <div className='app'>
    <div className='container'>
      <RouterProvider router={router} />
    </div>
    </div>
  )
}

export default App
