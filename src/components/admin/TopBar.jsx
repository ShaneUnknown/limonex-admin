import { useNavigate } from "react-router"
import { useAuth } from "../../context/AuthContext";

import { LogOut } from "lucide-react"
import  './TopBar.css'

const TopBar = () => {
  
  const { logout } = useAuth()
  const navigate = useNavigate()
  
  return (
    <div className='TopBar'>
      <h2>Admin</h2>
      <LogOut onClick={logout} className='icon'/>
    </div>
  )
}

export default TopBar