import { useNavigate } from "react-router"
import { useAuth } from "../../context/AuthContext"

import { LogOut } from "lucide-react"
import  './TopBar.css'

const TopBar = () => {
  
  const navigate = useNavigate()
  const { logout } = useAuth()
  
  return (
    <div className='TopBar'>
      <h2>Staff</h2>
      <LogOut onClick={logout} className='icon'/>
    </div>
  )
}

export default TopBar