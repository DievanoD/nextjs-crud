import React, { Component } from 'react';
import { Button, FormControl, InputGroup, Table } from "react-bootstrap";
import Router from 'next/router';
import axios from 'axios';
import moment from 'moment';

import styles from '../../styles/Product.module.css';

class TableProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            products: []
        }
    }

    async componentDidMount() {
        this.getApiData(this.state.input);
    }

    setInputValue = (e) => (this.setState({ ...this.state, input: e.target.value }));

    getApiData = async (str) => {
        let p;
        (str === '') ? p = 'all' : p = str;

        const res = await axios.get(`http://localhost:3000/api/product/${p}`);
        this.setState({ ...this.state, products: res.data });
    }

    keyHandler = async (e) => {
        if (e.key === 'Escape') {
            this.clear();
        } else {
            this.getApiData(this.state.input);
        }
    }

    clear = async () => {
        this.setState({ ...this.state, input: '' });
        this.getApiData('');
    }

    formatDate = (date) => {
        const result = moment(date).format('DD/MM/YYYY');
        return result;
    }

    formatCoin = (coin) => {
        let result = `R$ ${coin.toFixed(2)}`;
        result = result.replace('.', ',');
        return result;
    }

    render() {
        const { products } = this.state;
        return (
            <React.Fragment>
                <div className='mt-4 mb-4 text-center'>
                    <InputGroup className='w-75 mx-auto'>
                        <FormControl type='text' placeholder='Pesquisar produto...' onKeyUp={this.keyHandler} onChange={this.setInputValue} value={this.state.input} />
                        {/* <Button variant="light" className='ml-2' onClick={this.clear}>Limpar</Button> */}
                    </InputGroup>
                    <span className={styles.formText}><span className='text-danger'>*</span>Aperte a tecla <strong>ESC</strong> para limpar o campo de pesquisa</span>
                </div>
                <Table bordered hover responsive className='text-center'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Data</th>
                            <th><i className="fas fa-cog"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product._id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{this.formatCoin(product.price)}</td>
                                <td>{this.formatDate(product.createdAt)}</td>
                                <td><Button variant='warning' onClick={() => Router.push(`/product/edit/${product._id}`)}><i className="fas fa-edit"></i></Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </React.Fragment>
        );
    }
}

export default TableProducts;