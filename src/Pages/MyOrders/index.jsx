import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import Layout from "../../Components/Layout";
import OrdersCard  from "../../Components/OrdersCard"

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  // este console.log lo estamos utilizando para ver que nos renderiza en order
  // console.log(context.order)

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1>My Orders</h1>
      </div>
      {
        // todas las props que le enviamos a OrderCard llegan aca directamente
        context.order.map((order, index) => (
          // aca le estamos diciendo que nos lleve a MyOrders y agregado que tenemos que llegar al id de todos esos productos
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard 
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />          
          </Link>

        ))
      }
    </Layout>
  );
}
  
export default MyOrders;