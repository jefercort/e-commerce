import { createContext, useState } from "react";

// creamos el contexto global
export const ShoppingCartContext = createContext();

// el componente va a retornar ese proveedor pero dentro de el debe hacer un encapsulamiento (Wrapper) dentro de el deben vivir toda la aplicacion
// aca va a funcionar de manera parecida al Layout donde va a recibir unos hijos {children}
export const ShoppingCartProvider = ({children}) => {
    // aca creamos un estado que va a ser el contador y a partir de ahi el le va a pasar la informacion a los diferentes componentes que tengan que ver con el
    const [count, setCount] = useState(0);
    // vamos a usar este console.log para poder ver si en la consola esta leyendo lo que estamos necesitando
    console.log("COUNT: ", count);
    
    return (
        // aca se hace el encapsulamiento o wrapper que va a encapsular todos los componentes de app para proveeerlos de información
        // con el value le estoy diciendo yo voy a tener un hijo y este hijo necesita que pueda leer los datos que le pongamos ex: count setCount pero cualquier componente 
        // puede modificar sus valores
        <ShoppingCartContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}