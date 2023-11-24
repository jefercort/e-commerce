import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';
import "./styles.css"
import OrderCart from '../OrderCard';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    // con este comando podemos ver desde la consola que datos nos estan llegando 
    console.log("CART: ", context.cartProducts);

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
            <div className="px-6">
                {/* lo que le estamos pidiendo es que renderice esa parte en nuestra columna de my order, aca usamos el retur con parentesis para que nos renderice */}
                {
                    context.cartProducts.map(product => (
                        <OrderCart 
                            key={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;