import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoutes from './Routes/PrivateRouter'
import Layout from "./Layout/layout";

// Modules
const Login = lazy(() => import("./components/signup"));

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />} >
            <Route path='/' element={<Layout />} />
          </Route>
          <Route path='/login' element={<Login />} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
