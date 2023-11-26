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

  // esta parte la usamos para que lea la url de nuestra pagina para poder determinar que tipo o a que orden nos queremos referir
  const currentPath = window.location.pathname
  // nos creamos esta variable que se va a llamar index ya que es el valor del index de nuestro grupo de ordenes para quitar eso ultimo utilizamos currentPath.substring
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1)
  // este console nos muestra la direccion despues del ultimo slash /
  // console.log(index)

  // con el lastIndexOf podemos saber cual fue el la ultima url que tratamos y que cantidad de carateres tenemos
  // console.log(currentPath.lastIndexOf("/")+1)

  // creamos este condicional para que si este index es igual a last Vamos a decirle que index va a ser igual a el ultimo index
  if (index === 'last') index = context.order?.length - 1
  
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
      // aca reemplazamos el slice por index porque como ya tenemos un index entonces basado en eso muestrame eso que yo necesito ver y dentro de la posicion del array muestrame
      // ese exclusivamente [index]
        context.order?.[index]?.products.map(product => (
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