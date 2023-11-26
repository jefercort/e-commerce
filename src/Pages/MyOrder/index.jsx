import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';
import Layout from "../../Components/Layout";
import OrderCard from '../../Components/OrderCard';

function MyOrder() {

  const context = useContext(ShoppingCartContext);
  // PARA PODER VISUALIZAR QUE DATOS ESTAMOS RECIBIENDO DE context.order USAMOS ESTE console.log
  // console.log(context.order?.slice(-1)[0])

    return (
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-6">
          <Link to="/my-orders" className="absolute left-0">
            <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />        
          </Link>
          <h1>My Order</h1>
        </div>
      <div className="flex flex-col w-80">
        {/* NECESITAMOS LEERLO DE Order, ACA LE PODEMOS DECIR SI TIENE UNA ORDEN ENTONCES ME VAS A MOSTRAR LOS ULTIMOS PRODUCTOS QUE TENEMOS ahiESO LO HACEMOS
        CON slice(-1)[0] (para resolver el error que nos sale le decimos que lea los PRODUCTS que vienen con .map) */}
        { 
          context.order?.slice(-1)[0].products.map(product => (
              <OrderCard
                  // REACT  nos va a pedir que le pongamos a cada uno una Key
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  imageUrl={product.images}
                  price={product.price}
              />
          ))
        }
        </div>
      </Layout>
    );
  }
  
  export default MyOrder;