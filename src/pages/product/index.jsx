import React from 'react';

// Components
import HeadComponent from '../../components/head';
import NavbarComponent from '../../components/navbar';
import ProductsTable from '../../components/productsTable';
import FooterComponent from '../../components/footer';

import styles from '../../styles/Product.module.css';

const ProductList = () => {
    return (
        <React.Fragment>
            <HeadComponent title={"Lista de produtos - Next Produtos"} />
            <NavbarComponent />
            <div className={styles.mainContent}>
                <div className={styles.container}>
                    <ProductsTable />
                </div>
            </div>
            <FooterComponent />
        </React.Fragment>
    );
}

export default ProductList;