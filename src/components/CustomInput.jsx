
import  './CustomInput.css'

const CustomInput = ({IcLeft, ph, IcRight}) => {
  return (
    <div className='CustomInput'>
      {IcLeft && <IcLeft className='icon-l'/>}
      <textarea rows={1} placeholder={ph}></textarea>
      {IcRight && <IcRight className='icon-r'/>}
    </div>
  )
}

export default CustomInput