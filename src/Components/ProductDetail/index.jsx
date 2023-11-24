import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';
import "./styles.css"

const ProductDetail = () => {
    // debemos traer el contexto para que el lo pueda escuchar con respecto a si esta o no visualizandose
    const context = useContext(ShoppingCartContext);

    return (
        // aca utilizamos una clase especifica que importamos desde Styles.css pero tambien usamos la propiedad flex y flex-col
        // utilizamos las llaves y comillas invertidas {`${de esta forma ponemos logica}`} para poder meter logica dentro de una className en esta clase una triada de pregunta 
        // lo que estamos preguntando en la funcion de triada es-- si isProductDetailOpen está abierto entonces le damos una propiedad de flex pero si no le damos la propiedad de hidden
        <aside className={`${context.isProductDetailOpen ? "flex" : "hidden"} product-detail flex-col fixed right-0 bg-white border border-black rounded-lg`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div>
                    <XMarkIcon className="h-6 w-6 text-black" />
                </div>
            </div>
        </aside>
    );
}

export default ProductDetail;