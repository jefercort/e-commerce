import { createContext, useState, useEffect } from "react";

// creamos el contexto global
export const ShoppingCartContext = createContext();

// el componente va a retornar ese proveedor pero dentro de el debe hacer un encapsulamiento (Wrapper) dentro de el deben vivir toda la aplicacion
// aca va a funcionar de manera parecida al Layout donde va a recibir unos hijos {children}
export const ShoppingCartProvider = ({children}) => {
    // aca creamos un estado que va a ser el contador y a partir de ahi el le va a pasar la informacion a los diferentes componentes que tengan que ver con el
    // ESTE ESTADO LO UTULIZAMOS PARA EL CONTADOR CUANDO AGREGAMOS PRODUCTOS AL CARRO
    const [count, setCount] = useState(0);
    // vamos a usar este console.log para poder ver si en la consola esta leyendo lo que estamos necesitando
    // console.log("COUNT: ", count);

    // PARA VISUALIZAR O NO VISUALIZAR EL SIDE MENU DEBEMOS CREAR LOS SIGUENTES ESTADOS
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    // esta funcion se va a encargar de cambiar los estados segun lo que escuche
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);


    // este estado lo vamos a usar para mostrar el producto dentro del side bar, le pusimos como valor default llaves que representan un objeto vacio {} porque 
    // sabemos que el componente card es un objeto con arrays
    const [productToShow, setProductToShow] = useState({});

    // este estado lo vamos a usar para poder agregar cosas al carrito cuando se haga click en el + de cada card, el valor default es un array de objetos vacio []
    const [cartProducts, setCartProducts] = useState([]);

    // PARA VISUALIZAR O NO VISUALIZAR EL SIDE MENU DEBEMOS CREAR LOS SIGUENTES ESTADOS (ESTE ES PARA EL SIDEMENU DE LOS PRODUCTOS AGREGADOS)
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    // esta funcion se va a encargar de cambiar los estados segun lo que escuche
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // esta funcion se va a encargar de tomar los estados de cada orden de pedido
    const [order, setOrder] = useState([]);

    // aca vamos a almacenar lo que viene desde la API .. items es nuestra cajita y setItems es el que va a inyectar el valor de los items
    // cuando usamos useState() dentro de el podemos poner un valor por defecto que podrian ser unas llaves indicando que en futuro puede ser un objeto
    // o puede ser un array vacio o un boolean o lo que sea (ESTO ES UN ESTADO LOCAL en principio luego de pasarlo acá a context porque antes estaba en home.jsx se volvio un estado global)    
    // este estado va a tomar los productos
    const [items, setItems] = useState(null);
    
    // esto va a corresponder a los items que filtremos dependiendo de lo que escribamos en ese input
    const [filteredItems, setFilteredItems] = useState(null);

    // aca lo que vamos a hacer es que por cada tipeada que se haga el guarde eso en el estado, que se usara para la busqueda por titulo
    const [searchByTitle, setSearchByTitle] = useState(null);
    // para ver si esta recibiendo correctamente cada type que hagamos entonces usamos el siguiente console.log
    // console.log("Escrito: ", searchByTitle)


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

      // en esta parte escribimos una funcion donde le mandamos los items y hacemos un filtgrado dependiendo del searchByTitle
    const filteredItemsByTitle = (items, searchByTitle) => {
      // necesito que tomes los items que ya tenemos pasandole el parametro items y saber que escribimos para poder hacer ese filtro para eso le pasamos el
      // segundo parametro que es searchByTitle (en el retorno le decimos si existe items (?) vamos a hacer un filtro) aca le decimos tenemos varios items 
      // pero quiero que evalues cada item y me preguntes si el titulo de ese item es igual a lo que yo ya puse en el input y si si retornamelo
      // usamos el toLowerCase porque aveces tenemos letras mayusculas o minusculas y aca le decimos que no nos interesa el si tiene mayus o minusc porque
      // queremos saber si esos mismos strings son iguales para que los retorne, luego de esa verificacion le decimos que esto tiene que incluirlo 
      return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))         
    }

    // ahora para que lo guarde en la actualizacion del estado hacemos lo siguiente
    useEffect(() => {
      if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle])

    // este console.log lo utilizamos para ver que esta filtrando la funcion pero desde la consola
    // console.log("FilteredItems: ", filteredItems)

    return (
        // aca se hace el encapsulamiento o wrapper que va a encapsular todos los componentes de app para proveeerlos de información
        // con el value le estoy diciendo yo voy a tener un hijo y este hijo necesita que pueda leer los datos que le pongamos ex: count setCount pero cualquier componente 
        // puede modificar sus valores
        <ShoppingCartContext.Provider value={{
          count,
          setCount,
          openProductDetail,
          closeProductDetail,
          isProductDetailOpen,
          productToShow,
          setProductToShow,
          cartProducts,
          setCartProducts,
          isCheckoutSideMenuOpen,
          openCheckoutSideMenu,
          closeCheckoutSideMenu,
          order,
          setOrder,
          items,
          setItems,
          searchByTitle,
          setSearchByTitle,
          filteredItems,
        }}>
          {children}
        </ShoppingCartContext.Provider>
    );
}