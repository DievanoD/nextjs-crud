import React from 'react';

import styles from './Footer.module.css';

const FooterComponent = (props) => (
    <footer className={styles.footer}>
        <span className={styles.footerText}>Copyright © 2021 Next Produtos. Todos os direitos reservados.</span>
    </footer>
);

export default FooterComponent;