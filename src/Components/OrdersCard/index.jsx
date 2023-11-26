import { XMarkIcon } from '@heroicons/react/24/solid'


const OrdersCart = props => {
    // necesitamos dos props que son el total de los productos y el total del precio 
    const {  } = props

    return (
        <div className="flex justify-between items-center mb-3 border border-black">
            <p>
                <span>{date}</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
            <p></p>
        </div>
    );

}

export default OrdersCart;