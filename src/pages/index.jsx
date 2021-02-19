import React, { Component } from 'react';
// import FooterComponent from '../components/footer';
import HeadComponent from '../components/head';
import NavbarComponent from '../components/navbar';
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
        // const res = await axios.get('http://localhost:3000/api/product');
        // this.setState({ products: res.data });
    }

    render() {
        return (
            <React.Fragment>
                <HeadComponent title={"Home - Next Produtos"} />
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
}

export default Home;