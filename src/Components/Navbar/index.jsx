import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";

const Navbar = () => {
    const context = useContext(ShoppingCartContext);
    const activeStyle = 'underline underline-offset-4';

    return (
        // la etiqueta nav es nuestro padre y contenedor
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-medium">
            {/* creamos el primer ul que uno va al lado izquierdo y el otro al lado derecho */}
            <ul className="flex items-center gap-3">
                <li className="font-bold text-lg">
                    <NavLink
                        to='/'>
                            Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        // aca lo que hacemos es escuchar el evento y dentro de setSearchByCategory le enviamos por dentro esa categoria en este es vacio porque 
                        // queremos que se muestren todos
                        onClick={() => context.setSearchByCategory()}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined}
                        >
                            All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        onClick={() => context.setSearchByCategory("clothes")}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined}
                        >
                            Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        onClick={() => context.setSearchByCategory("electronics")}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined}
                        >
                            Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furnitures'
                        onClick={() => context.setSearchByCategory("furnitures")}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined}
                        >
                            Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        onClick={() => context.setSearchByCategory("toys")}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined}
                        >
                            Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        onClick={() => context.setSearchByCategory("others")}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined}
                        >
                            Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    kevin@proshop.com.co
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined}
                        >
                            My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined}
                        >
                            My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined}
                        >
                            Sign In
                    </NavLink>
                </li>
                <li className="flex items-center">
                    {/* en la pagina de HEROICONS aparece el nombre para vincular el icono en este caso aparece como shopping-cart
                    pero cuando nosotros lo vayamos a usar en react lo que hacemos es escribirlo así ShoppingCartIcon en donde lo 
                    debemos importar en la cabecera y luego agregarlo como un componente al codigo */}
                    <ShoppingCartIcon className="h-6 w-6 text-black" />
                    <div>{context.count}</div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;