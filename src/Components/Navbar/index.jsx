import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'

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
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined}
                        >
                            All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined}
                        >
                            Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined}
                        >
                            Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furnitures'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined}
                        >
                            Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined}
                        >
                            Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
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
                <li>
                    📨0
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;