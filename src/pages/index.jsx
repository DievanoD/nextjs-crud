import React from 'react';
import HeadComponent from '../components/head';
import NavbarComponent from '../components/navbar';
// import FooterComponent from '../components/footer';

// import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <React.Fragment>
            <HeadComponent title={"Home - Next Produtos"} />
            <main>
                <NavbarComponent />
                <div className='container'>
                    <h1>Homepage</h1>
                </div>
            </main>
            {/* <FooterComponent /> */}
        </React.Fragment>
    );
}

export default Home;