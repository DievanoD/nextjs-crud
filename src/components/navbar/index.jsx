import React from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import Router from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/client';

import styles from './Navbar.module.css';

const NavbarComponent = (props) => {
    const [session, loading] = useSession();
    return (
        <header>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Navbar.Brand href="/"><span className={styles.brand}>Next Produtos</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav>
                        {!session && <>
                            <Button variant="primary" onClick={() => signIn('auth0')}><i className="fas fa-sign-in-alt mr-1"></i>Login</Button>
                        </>}
                        {session && <>
                            <Button variant="success" className={`${styles.addBtn} mr-3`} onClick={() => Router.push('/product/add')}><i className="fas fa-plus"></i></Button>
                            <Navbar.Text>{session.user.email}</Navbar.Text>
                            <Nav.Link href="#" onClick={() => signOut()}>
                                Sair<i className="fas fa-sign-out-alt ml-1"></i>
                            </Nav.Link>
                        </>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default NavbarComponent;