import { FolderPlus } from "lucide-react"
import "./OrderContainer.css";

const OrderContainer = () => {
  const orders = [
    {
      table: '2',
      customer: 'Señora chompa roja',
      glasses: '3',
      timeago: 'hace 3 min.',
    },
    {
      table: '1',
      customer: 'Chamba',
      glasses: '2',
      timeago: 'hace 5 min.',
    },
    {
      table: '3',
      customer: 'Señor con dos niños',
      glasses: '3',
      timeago: 'hace 3 min.',
    },
  ];
  
  return (
    <div className="OrderContainer">
    {
    orders.map(order =>
      <div className='order-item'>
      <div className='cont'>
        <h3 className='table'>
          Mesa {order.table}
        </h3>
        <p className='customer'>
          Cliente: {order.customer}
        </p>
        <div className='group'>
          <span className='glasses'>
            N° de Vasos: {order.glasses}
          </span>
          <span className='timeago'>
            {order.timeago}
          </span>
        </div>
      </div>
      </div>)
    }
    <div className='order-item new'>
      <div className='cont'>
        <FolderPlus className='icon' />
        <h4>Nuevo Pedido</h4>
      </div>
    </div>
    </div>
  )
};

export default OrderContainer;
