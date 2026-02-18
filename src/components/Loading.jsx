import modernSpinner from "../assets/modern_spinner.svg"
import  './Loading.css'

const Loading = () => {
  return (
    <div className='Loading'>
      <img src={modernSpinner} />
      <h4>Verificando</h4>
    </div>
  )
}

export default Loading