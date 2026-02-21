import { Route, Routes } from "react-router"

import Login from "./pages/Login"
import Admin from "./pages/Admin"
import Staff from "./pages/Staff"
import Footer from "./components/Footer"
import RouteGuard from "./components/routes/RouteGuard"
import PublicRoute from "./components/routes/PublicRoute"

const App = () => {
  return ( 
    <div className="App">
    
    <Routes>
    
      <Route path="/login" 
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }/>
        
      <Route path="/admin" 
        element={
          <RouteGuard requireAdmin={true}>
            <Admin />
          </RouteGuard>
        }/>
        
      <Route
        path="/staff"
        element={
          <RouteGuard>
            <Staff />
          </RouteGuard>
        }
      >
        <Route index element={<Orders />} />
        <Route path="completed" element={<Completed />} />
        <Route path="new" element={<NewOrder />} />
        
      </Route>
      
    </Routes>
    
    <Footer/>
    
    </div>
  )
}
 
export default App