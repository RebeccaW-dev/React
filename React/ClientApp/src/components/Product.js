import React, { Component } from 'react';
import { CreateProductModal } from './modules/Product/CreateProductModal';
import { EditProductModal } from './modules/Product/EditProductModal';
import { DeleteProductModal } from './modules/Product/DeleteProductModal';
import { Table } from 'semantic-ui-react';

export class Product extends Component {
    displayName = Product.name

    constructor(props) {
        super(props);
        this.state = { Products: [], loading: true };
        const baseUrl = "api/Product"

        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({ Products: data, loading: false })
                console.log(data);
            });

    }
    static renderProductTable(products) {

        return (
            <div>
                <CreateProductModal trigger={<button primary> New Product</button>}
                    onClose={this.onClose} />
                <Table className='Table'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>
                    <tbody>
                        {products.map(products =>
                            <tr key={products.name}>
                                <td>{products.name}</td>
                                <td>{products.price}</td>
                                <td>
                                    <EditProductModal trigger={<button className="ui yellow button"><i class="edit icon"></i>Edit</button>}
                                        onClose={this.onClose} />
                                </td>
                                <td>
                                    <DeleteProductModal trigger={<button className="ui red button"><i class="trash icon"></i>Delete</button>}
                                        onClose={this.onClose} />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Product.renderProductTable(this.state.Products);

        return (
            <div>

                {contents}
            </div>
        );
    }


}