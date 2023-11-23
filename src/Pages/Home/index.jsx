// vamos a importar un custome hook que se llama useState para poder consumir la api
// siempre que vayamos a consumir una api en nuestro codigo no puede faltar useEffect porque nos ayuda a encapsular esa api (respuesta)
// pero tambien podemos enviarle los valores iniciales por si necesitamos atraparlo en alguna funcion
import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
    // aca vamos a almacenar lo que viene desde la API .. items es nuestra cajita y setItems es el que va a inyectar el valor de los items
    // cuando usamos useState() dentro de el podemos poner un valor por defecto que podrian ser unas llaves indicando que en futuro puede ser un objeto
    // o puede ser un array vacio o un boolean o lo que sea (ESTO ES UN ESTADO LOCAL)
    const [items, setItems] = useState(null);

    useEffect(() => {
      // para ir a la API y consurmirla usamos el comando fetch y esa informacion viene en tipo promesa, entonces lo que hacemos para resolver la promesa es usar .then y
      // lo que hacemos es tomar la respuesta "response" y a esa respuesta le decimos que lo haga en JSON
      fetch("https://api.escuelajs.co/api/v1/products")

      // para ver como aparece la informacion que esta llegandonos usamos el console.log
        // .then(response => console.log(response.json()))

      // con esta forma podemos ver como se tranforma los datos en arrays como la necesitamos
        // .then(data => console.log(data))
        .then(response => response.json())
        // aca le decimos en donde vamos a almacenar esa DATA y se guarda en el estado y la almacenamos en setItems y le enviamos (data) para visualizarla posteriormente
        .then(data => setItems(data))
      // dejamos un array vacio en el segundo item para que sea un valor por defecto pero como no le queremos enviar nada entonces lo dejamos vacio
      // esto es por si necesitamos enviarle informacion al useEffect por dentro
    }, [])

    return (
      <Layout>
        Home
        {/* para que dependiendo de la cantidad de items que querramos me muestre lo que necesito para ponerle logica a lo que quiero renderizar utilizo las llavez {} */}
        {/* para hacer esto hacemos una triada de condicional preguntando si está y si si esta entonces usamos .map porque es un array para que nos renderice eso */}
        <div className="grid grid-cols-4 w-full max-w-screen-lg">
          {
            items?.map(item => (
              <Card key={item.id} data={item} />
            ))
          }
        </div>
        <ProductDetail />
      </Layout>
    );
  }

  export default Home;