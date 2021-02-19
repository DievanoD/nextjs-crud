import React, { Component } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import Router from 'next/router';
import HeadComponent from '../../components/head';
import NavbarComponent from '../../components/navbar';
import axios from 'axios';

import styles from '../../styles/Product.module.css';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: ''
        }
    }

    setName = (event) => (this.setState({ name: event.target.value }));

    setPrice = (event) => (this.setState({ price: event.target.value }));

    handleSubmit = async (event) => {
        event.preventDefault();

        const { name, price } = this.state;

        const res = await axios.post('http://localhost:3000/api/product', { name, price });
        // console.log(res.data);

        if (res.data.success) Router.push('/');
    }

    render() {
        return (
            <React.Fragment>
                <HeadComponent title={"Add Produto - Next Produtos"} />
                <NavbarComponent />
                <div className={styles.container}>
                    <Card className={styles.formCard}>
                        <Card.Body>
                            <h3>Adicionar Produto</h3>

                            <Form onSubmit={this.handleSubmit} className='pt-1'>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control type="text" placeholder="Nome do produto" onChange={this.setName} required />
                                    <Form.Text className="text-muted">
                                        Insira o nome do produto.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPrice">
                                    <Form.Label>Preço</Form.Label>
                                    <Form.Control type="text" placeholder="Preço do produto" onChange={this.setPrice} required />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Salvar
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>

                </div>
            </React.Fragment>
        );
    }
}

export default AddProduct;