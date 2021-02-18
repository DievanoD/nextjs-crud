import { Table } from "react-bootstrap";

const TableProducts = (props) => {
    const products = props.products;

    return (
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
                        <td>EDITAR</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default TableProducts;