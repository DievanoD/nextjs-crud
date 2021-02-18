import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Router from 'next/router';
// import FooterComponent from '../components/footer';
import HeadComponent from '../components/head';
import NavbarComponent from '../components/navbar';
import ProductSearchInput from '../components/productSearchInput';
import TableProducts from '../components/productsTable';
import axios from 'axios';

import styles from '../styles/Home.module.css';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:3000/api/product');
        this.setState({ products: res.data });
    }

    render() {
        return (
            <React.Fragment>
                <HeadComponent title={"Home - Next CRUD"} />

                <main>
                    <NavbarComponent />

                    <div className='container'>
                        <Button variant="primary" onClick={() => Router.push('/product/add')} className='my-3'>Novo Produto</Button>

                        {/* <ProductSearchInput /> */}

                        <TableProducts />
                    </div>
                </main>

                {/* <FooterComponent /> */}
            </React.Fragment>
        );
    }
}

export default Home;

// const Home = ({ products }) => {
//   return (
//     <div className={styles.container}>
//       <HeadComponent title={"Home - Next CRUD"} />

//       <main>
//         <NavbarComponent />

//         <Link href="/product/add">Adicionar</Link>

//         <ListProducts products={products} />
//       </main>

//       {/* <FooterComponent /> */}
//     </div>
//   );
// };

// export async function getStaticProps(context) {
//   const res = await axios.get('http://localhost:3000/api/product');
//   return { props: { products: res.data } };
// }

// export default Home;