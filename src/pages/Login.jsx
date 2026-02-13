import CustomInput from "../components/CustomInput"
import { AtSign, KeyRound, Eye, EyeClosed } from "lucide-react"
import '../components/Login.css'

const Login = () => {
  return ( 
    <form className="Login">
      <h2>Limonex</h2>
      <CustomInput 
        IcLeft={AtSign} 
        ph="email" />
      <CustomInput 
        IcLeft={KeyRound} 
        ph="contraseña" 
        IcRight={EyeClosed}/>
      <button>Ingresar</button>
    </form>
   )
}
 
export default Login