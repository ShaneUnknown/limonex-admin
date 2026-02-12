import '../components/Login.css'

const Login = () => {
  return ( 
    <form className="Login">
      <h2>Login</h2>
      <div>
        <textarea rows={1} placeholder='email'></textarea>
      </div>
      <div>
        <textarea rows={1} placeholder='contraseña'></textarea>
      </div>
      <button>Ingresar</button>
    </form>
   )
}
 
export default Login