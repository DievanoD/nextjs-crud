import React, { Component } from 'react';
import { Button, FormControl, InputGroup, Table } from "react-bootstrap";
import Router from 'next/router';
import axios from 'axios';

import styles from '../../styles/Product.module.css';

class TableProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            products: []
        }
    }

    async componentDidMount() {
        this.getApiData(this.state.input);
    }

    setInputValue = (e) => (this.setState({ ...this.state, input: e.target.value }));

    getApiData = async (str) => {
        const res = await axios.get(`http://localhost:3000/api/product/${str}`);
        this.setState({ ...this.state, products: res.data });
    }

    keyHandler = async (e) => {
        if (e.key === 'Escape') {
            this.clear();
        } else {
            this.getApiData(this.state.input);
        }
        // if (e.key === 'Enter') {
        //     console.log('clicou para pesquisar');
        // } else if (e.key === 'Escape') {
        //     this.clear();
        // }
    }

    clear = async () => {
        // console.log('Limpando campo de pesquisa');
        this.setState({ ...this.state, input: '' });
        this.getApiData('');
    }

    goToEdit = (id) => {
        // const router = useRouter();
        // router.push(`/product/edit/${id}`);
    }

    render() {
        const { products } = this.state;
        return (
            <React.Fragment>
                <div className='mb-3'>
                    <InputGroup>
                        <FormControl type='text' placeholder='Pesquisar produto' onKeyUp={this.keyHandler} onChange={this.setInputValue} value={this.state.input} />
                        {/* <Button variant="light" className='ml-2' onClick={this.clear}>Limpar</Button> */}
                    </InputGroup>
                    <span className={styles.formText}>*Aperte a tecla <strong>ESC</strong> para limpar o campo de pesquisa</span>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Data de criação</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product._id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.createdAt}</td>
                                <td><Button variant='warning' onClick={() => Router.push(`/product/edit/${product._id}`)}>Editar</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </React.Fragment>
        );
    }
}

export default TableProducts;

// const TableProducts = (props) => {
//     const products = props.products;

//     return (
//         <Table striped bordered hover>
//             <thead>
//                 <tr>
//                     <th>#</th>
//                     <th>Nome</th>
//                     <th>Preço</th>
//                     <th>Data de criação</th>
//                     <th>Ação</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {products.map((product, index) => (
//                     <tr key={product._id}>
//                         <td>{index + 1}</td>
//                         <td>{product.name}</td>
//                         <td>{product.price}</td>
//                         <td>{product.createdAt}</td>
//                         <td><Button variant='warning'>Editar</Button></td>
//                     </tr>
//                 ))}
//             </tbody>
//         </Table>
//     );
// }

// export default TableProducts;