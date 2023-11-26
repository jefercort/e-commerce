import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';
import OrderCart from '../../Components/OrderCard';
import { totalPrice } from '../../Utils';
import "./styles.css"

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    // creamo la funcion handleDelete y ahi lo que le decimos es que necesito identificar el elemento que presione y de ahi necesito que lo remueva
    // para ello creamos una constante que con la propiedad fiter le decimos que tome un producto y si el id del producto que estas iterando
    // entonces le decimos que retorne la misma lista de productos pero sin id que acabamos de presionar != id 

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        // para modificarlo vamos a nuestro contexto y le decirmos setCartProducts y le mandamos los elementos que estan filtrados
        context.setCartProducts(filteredProducts)
    }

    // // con este comando podemos ver desde la consola que datos nos estan llegando 
    // console.log("CART: ", context.cartProducts);

    return (        
        <aside className={`${context.isCheckoutSideMenuOpen ? "flex" : "hidden"} checkout-side-menu flex-col fixed right-0 bg-white border border-black rounded-lg`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div>
                    <XMarkIcon 
                        className="h-6 w-6 text-black cursor-pointer"                        
                        onClick={() => context.closeCheckoutSideMenu()} />
                </div>
            </div>
            {/* vamos a agegarle el scroll a este side menu y para ello usamos overflow-y-scroll */}
            <div className="px-6 overflow-y-scroll">
                {/* lo que le estamos pidiendo es que renderice esa parte en nuestra columna de my order, aca usamos el retur con parentesis para que nos renderice */}
                {/* aqui es donde vamos a poner nuestras cards para que se pinten dependiendo de lo que tenemos agregado en el carrito*/}
                {   
                    // aca hacemos un return "chevere" porque solo utilizamos los parentesis () morados en esta parte del code
                    context.cartProducts.map(product => (
                        <OrderCart 
                            // REACT  nos va a pedir que le pongamos a cada uno una Key
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            // se lo enviamos como una prop porque tiene que tenerla OrderCart y ahi le enviamos esa funcion
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className="px-6">
                <p className="flex justify-between items-center">
                    <span className="font-light">Total: </span>
                    <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
                </p>
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;