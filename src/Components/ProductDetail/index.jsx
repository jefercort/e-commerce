import "./styles.css"

const ProductDetail = () => {
    return (
        // aca utilizamos una clase especifica que importamos desde Styles.css pero tambien usamos la propiedad flex y flex-col
        <aside className="product-detail flex flex-col fixed right-0 bg-white border border-black rounded-lg">
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div>X</div>
            </div>
        </aside>
    );
}

export default ProductDetail;