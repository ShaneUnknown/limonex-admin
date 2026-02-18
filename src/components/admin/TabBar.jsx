import  './TabBar.css'

const TabBar = () => {
  
  const tabs = [
    {
      name: 'Resumen'
    },
    {
      name: 'Pedidos'
    },
    {
      name: 'Personal'
    },
  ]
  return (
    <div className='TabBar'>
      {
        tabs.map(tab =>
          <div key={tab.name} className='tab'>
            { tab.name }
          </div>
        )
      }
    </div>
  )
}

export default TabBar