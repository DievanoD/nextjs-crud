import React from 'react';
// import FooterComponent from '../components/footer';
import HeadComponent from '../../components/head';
import NavbarComponent from '../../components/navbar';
import TableProducts from '../../components/productsTable';

const ProductList = () => {
    return (
        <React.Fragment>
            <HeadComponent title={"Lista de produtos - Next Produtos"} />
            <main>
                <NavbarComponent />
                <div className='container'>
                    <TableProducts />
                </div>
            </main>
            {/* <FooterComponent /> */}
        </React.Fragment>
    );
}

export default ProductList;