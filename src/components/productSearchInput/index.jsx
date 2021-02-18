import React, { Component } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import axios from 'axios';

import styles from '../../styles/Product.module.css';

class ProductSearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    setInputValue = (e) => (this.setState({ input: e.target.value }));

    keyHandler = async (e) => {
        if (e.key === 'Escape') {
            this.clear();
        } else {
            console.log(this.state.input);
        }
        // if (e.key === 'Enter') {
        //     console.log('clicou para pesquisar');
        // } else if (e.key === 'Escape') {
        //     this.clear();
        // }
    }

    clear = () => {
        // console.log('Limpando campo de pesquisa');
        this.setState({ input: '' });
    }


    render() {
        return (
            <div className='mb-3'>
                <InputGroup>
                    <FormControl type='text' placeholder='Pesquisar produto' onKeyUp={this.keyHandler} onChange={this.setInputValue} value={this.state.input} />
                    {/* <Button variant="success" className='ml-2'>Pesquisar</Button> */}
                </InputGroup>
                <span className={styles.formText}>*Aperte a tecla <strong>ESC</strong> para limpar o campo de pesquisa</span>
            </div>
        );
    }
}

export default ProductSearchInput;