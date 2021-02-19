import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Router from 'next/router';

import styles from '../../styles/Navbar.module.css';

const NavbarComponent = (props) => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/"><strong>Next Produtos</strong></Navbar.Brand>
                <Nav className="ml-auto">
                    <Button variant="primary" onClick={() => Router.push('/product/add')}><i className="fas fa-plus mr-1"></i>Adicionar</Button>
                </Nav>
            </Navbar>
        </header>
    );
};

export default NavbarComponent;