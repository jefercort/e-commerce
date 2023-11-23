const Card = () => {
    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounde-lg">
            {/* necesitamos que figura tenga elementos absolutos y usamos la propiedad relative & absolute  */}
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">Electronics</span>
                {/* Para encontrar imagenes gratis entramos a la pagina pexels.com 
                le pusimos las propiedades   para que la foto ocupe todo el ancho y todo el alto de figure pero que tambien no se deforme con esas directivas*/}
                <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="headphones" />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white h-6 w-6 rounded-full m-2 p-1">
                    +
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">Headphones</span>
                <span className="text-lg font-semibold">$300</span>
            </p>
        </div>
    );
}

export default Card;