import React, { Component } from 'react';
import { Button, FormControl, InputGroup, Table } from "react-bootstrap";
import Router from 'next/router';
import axios from 'axios';
import moment from 'moment';

import PaginateComponent from '../paginate';
import SpinnerComponent from '../spinner';

import styles from '../../styles/Product.module.css';

class TableProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            products: [],
            page: 1,
            pages: 0,
            isLoading: true,
            disablePrev: false,
            disableNext: false,
        }
    }

    async componentDidMount() {
        await this.getApiData(this.state.input, 0);
        // console.log(this.state);
    }

    setInputValue = (e) => (this.setState({ ...this.state, input: e.target.value }));

    getApiData = async (str, p) => {
        let word = '', pag = 0;

        (str === '') ? word = 'all' : word = str;
        (p === 0) ? pag = 1 : pag = p;

        const res = await axios.get(`http://localhost:3000/api/product/${word}?page=${pag}`);

        if (!res.data.success) {
            return Router.push('/');
        }

        this.setState({ ...this.state, products: res.data.data.docs, page: res.data.data.page, pages: res.data.data.pages, isLoading: false });

        (this.state.page <= 1) ? this.setState({ ...this.state, disablePrev: true }) : this.setState({ ...this.state, disablePrev: false });
        (this.state.page >= this.state.pages) ? this.setState({ ...this.state, disableNext: true }) : this.setState({ ...this.state, disableNext: false });
    }

    keyHandler = async (e) => {
        if (e.key === 'Escape') {
            this.clear();
        } else {
            await this.getApiData(this.state.input, 0);
        }
    }

    clear = async () => {
        this.setState({ ...this.state, input: '' });
        await this.getApiData('', 0);
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

    prevPage = async () => {
        await this.getApiData(this.state.input, this.state.page - 1);
    }

    nextPage = async () => {
        await this.getApiData(this.state.input, this.state.page + 1);
    }

    render() {
        const { input, products, page, pages, isLoading, disablePrev, disableNext } = this.state;
        return (
            <React.Fragment>
                {(!isLoading) ?
                    <div className='w-100'>
                        <div className='mt-4 mb-4 text-center'>
                            <InputGroup className='w-75 mx-auto'>
                                <FormControl type='text' placeholder='Pesquisar produto...' onKeyUp={this.keyHandler} onChange={this.setInputValue} value={input} />
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
                            {(products.length !== 0) ?
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
                                :
                                <tbody>
                                    <tr>
                                        <td colSpan='5'>Desculpe! Nenhum produto encontrado.</td>
                                    </tr>
                                </tbody>
                            }
                        </Table>

                        <PaginateComponent page={page} pages={pages} >
                            <Button variant='primary' onClick={this.prevPage} disabled={disablePrev}><i className="fas fa-arrow-left mr-1"></i>Anterior</Button>
                            <Button variant='primary' onClick={this.nextPage} disabled={disableNext}>Próxima<i className="fas fa-arrow-right ml-1"></i></Button>
                        </PaginateComponent>
                    </div>
                    :
                    <SpinnerComponent />
                }
            </React.Fragment>
        );
    }
}

export default TableProducts;