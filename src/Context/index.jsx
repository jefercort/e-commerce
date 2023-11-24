import { createContext, useState } from "react";

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
            closeCheckoutSideMenu
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}