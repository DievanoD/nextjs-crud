import React, { Component } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { getSession } from 'next-auth/client';
import Router from 'next/router';
import axios from 'axios';

// Components
import HeadComponent from '../../components/head';
import NavbarComponent from '../../components/navbar';
import SpinnerComponent from '../../components/spinner';
import BackBtn from '../../components/backBtn';
import FooterComponent from '../../components/footer';

import styles from '../../styles/Product.module.css';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            isLoading: true
        }
    }

    async componentDidMount() {
        const session = await getSession();

        if (!session) {
            // alert('Você precisa estar logado!');
            return Router.push('/');
        }

        this.setState({ ...this.state, isLoading: false });
    }

    setName = (event) => (this.setState({ name: event.target.value }));

    setPrice = (event) => (this.setState({ price: event.target.value }));

    handleSubmit = async (event) => {
        event.preventDefault();

        const { name, price } = this.state;

        const res = await axios.post(`/api/product`, { name, price });
        // console.log(res.data);

        if (res.data.success) Router.push('/product');
    }

    render() {
        const { isLoading } = this.state;
        return (
            <React.Fragment>
                <HeadComponent title={"Add Produto - Next Produtos"} />
                <NavbarComponent />
                <div className={styles.containerViewport}>
                    <div className={styles.container}>
                        {(!isLoading) ?
                            <div className={styles.contentBody}>
                                <BackBtn />
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
                                            <Button variant="success" type="submit">
                                                Salvar
                                        </Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </div>
                            :
                            <SpinnerComponent />
                        }
                    </div>
                </div>
                <FooterComponent />
            </React.Fragment>
        );
    }
}

export default AddProduct;