// vamos a importar un custome hook que se llama useState para poder consumir la api
// siempre que vayamos a consumir una api en nuestro codigo no puede faltar useEffect porque nos ayuda a encapsular esa api (respuesta)
// pero tambien podemos enviarle los valores iniciales por si necesitamos atraparlo en alguna funcion
import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">PRO Products</h1>
      </div>
      <input 
        type="text" 
        placeholder="Search a Product" 
        // en esta parte usamos la subfuncion focus que viene de tailwind para que cada vez que se haga focus en algun elemento tome un estilo especifico
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        // con esta funcion le digo que me capture la informacion de lo que estoy escribiendo luego de hacer el contexto vamos a aca y ponmos lo siguiente
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      {/* para que dependiendo de la cantidad de items que querramos me muestre lo que necesito para ponerle logica a lo que quiero renderizar utilizo las llavez {} */}
      {/* para hacer esto hacemos una triada de condicional preguntando si está y si si esta entonces usamos .map porque es un array para que nos renderice eso */}
      <div className="grid grid-cols-4 w-full max-w-screen-lg">
        {
          // aca es donde lo empieza a llamar desde el context y no de forma local
          context.items?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;