// aca con "Layout = ({ children })" le indicamos que va a llegar un hijo para que lo ejecute
const Layout = ({ children }) => {
    return (
        <div className='flex flex-col items-center mt-20'>
{/* aca le vamos a pasar un hijo que va a llegar ahí para ejecutarse */}
            {children}
        </div>
    );
}

export default Layout;