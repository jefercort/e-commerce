import { createContext } from "react";
import Layout from "../Components/Layout";

// creamos el contexto global
const ShoppingCartContext = createContext();

// el componente va a retornar ese proveedor pero dentro de el debe hacer un encapsulamiento (Wrapper) dentro de el deben vivir toda la aplicacion
// aca va a funcionar de manera parecida al Layout donde va a recibir unos hijos {children}
export const ShoppingCartProvider = ({children}) => { 
    return (
        // aca se hace el encapsulamiento o wrapper que va a encapsular todos los componentes de app para proveeerlos de información
        <ShoppingCartContext.Provider>
            {children}
        </ShoppingCartContext.Provider>
    );
}