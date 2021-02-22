import React from 'react';

// Components
import HeadComponent from '../components/head';
import NavbarComponent from '../components/navbar';
import FooterComponent from '../components/footer';

import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <React.Fragment>
            <HeadComponent title={"Home - Next Produtos"} />
            <NavbarComponent />
            <div className={`${styles.containerHome}`}>
                <div className={styles.subcontainerHome}>
                    <div className={styles.divTextHome}>
                        <h1 className="display-4">Next Produtos</h1>
                        <p className={`${styles.subtitleHome}`}>Projeto desenvolvido em Next Js para cadastro de produtos. Acesse o código fonte da aplicação clicando no botão abaixo.</p>
                        <a className="btn btn-outline-secondary" href="https://github.com/DievanoD/nextjs-crud" target="blank">Código-fonte</a>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </React.Fragment>
    );
}

export default Home;