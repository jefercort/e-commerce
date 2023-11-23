// aca nos traemos el contexto y el useContext para poder tener cada estado
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context";

// entre parentesis ponemos (data) para indicarle a la card que va a llegar algo y en los datos que cambian indicarle a cada uno que debe cambiar con respecto al tipo de dato que recibe
const Card = (data) => {
    // ya con esto podemos usar este hook con este context, aca lo que le estamos diciendo es que lea el estado global 
    const context = useContext(ShoppingCartContext);

    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounde-lg">
            {/* necesitamos que figura tenga elementos absolutos y usamos la propiedad relative & absolute  */}
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category.name}</span>
                {/* Para encontrar imagenes gratis entramos a la pagina pexels.com 
                le pusimos las propiedades   para que la foto ocupe todo el ancho y todo el alto de figure pero que tambien no se deforme con esas directivas*/}
                <img className="w-full h-full object-cover rounded-lg" src={data.data.images[0]} alt={data.data.description} />
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white h-6 w-6 rounded-full m-2 p-1"
                    // cuando el escuche el evento del usuario en este caso onClick va a suceder algo, ese algo es que va a incrementar el contador debemos hacerlo en forma de funcion
                    onClick={() => context.setCount(context.count + 1)}>
                    +
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-semibold">${data.data.price}</span>
            </p>
        </div>
    );
}

export default Card;