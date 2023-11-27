// Vamos a importar un hook que se llama useRoutes
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import './App.css'

// Para que pueda funcionar muy bien lo que se puede hacer es retornar las rutas
// lo que se hace es seprar un poco las estructuras de app y primero crear una funcion que
// tenga todas las rutas y luego tener otra funcion (componente) donde vamos a retornar estos elementos
// Aca le digo que me retorne las rutas con las cuales se va a redirigir al componente que le indiquemos
const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/furnitures', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes;
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
      {/* esto nos va a ayudar a decir tenemos estas rutas y quiero que me las muestres por medio de la funcion AppRoutes */}
      {/* este componente no lo pusimos en home porque necesitamos que este en varias partes de la aplicacion la idea es que viva en toda la app */}
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
