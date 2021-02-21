import React, { Component } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import Router from 'next/router';
import HeadComponent from '../../../components/head';
import NavbarComponent from '../../../components/navbar';

import axios from 'axios';

import styles from '../../../styles/Product.module.css';

class ProductEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0,
            isLoading: true
        }
    }

    static async getInitialProps({ query }) {
        const id = query.id;
        return {
            id: id,
        }
    }

    async componentDidMount() {
        const response = await axios.get(`http://localhost:3000/api/product/details/${this.props.id}`);
        if (!response.data.success) return Router.push('/');
        this.setState({ name: response.data.data.name, price: response.data.data.price, isLoading: false });
    }

    setName = (event) => (this.setState({ name: event.target.value }));

    setPrice = (event) => (this.setState({ price: event.target.value }));

    handleSubmit = async (event) => {
        event.preventDefault();

        const { name, price } = this.state;

        const res = await axios.put(`http://localhost:3000/api/product/${this.props.id}`, { name, price });
        // console.log(res.data);

        if (res.data.success) Router.push('/product');
    }

    render() {
        const { isLoading } = this.state;
        return (
            <React.Fragment>
                <HeadComponent title={"Editar Produto - Next Produtos"} />
                <NavbarComponent />
                <div className={styles.container}>
                    {(!isLoading) ?
                        <Card className={styles.formCard}>
                            <Card.Body>
                                <h3>Editar Produto</h3>

                                <Form onSubmit={this.handleSubmit} className='pt-1'>
                                    <Form.Group controlId="formBasicName">
                                        <Form.Label>Nome</Form.Label>
                                        <Form.Control type="text" placeholder="Nome do produto" onChange={this.setName} value={this.state.name} required />
                                        <Form.Text className="text-muted">
                                            Insira o nome do produto.
                                    </Form.Text>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPrice">
                                        <Form.Label>Preço</Form.Label>
                                        <Form.Control type="text" placeholder="Preço do produto" onChange={this.setPrice} value={this.state.price} required />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Salvar
                                </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                        :
                        <div>
                            <div className="spinner-border orange-color" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default ProductEdit;