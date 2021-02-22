import React from 'react';
import Router from 'next/router';
import { Button } from 'react-bootstrap';

import styles from './BackBtn.module.css';

const backBtn = (props) => (
    <div className='pt-3'>
        <Button className={`${styles.button}`} onClick={() => Router.back()}><i className="fas fa-arrow-left mr-1"></i>Voltar</Button>
    </div>
);

export default backBtn;