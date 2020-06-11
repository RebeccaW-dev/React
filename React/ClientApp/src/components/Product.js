import React, { Component } from 'react';
import { CreateProductModal } from './modules/Product/CreateProductModal';
import { EditProductModal } from './modules/Product/EditProductModal';
import { DeleteProductModal } from './modules/Product/DeleteProductModal';

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
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {products.map(products =>
                            <tr key={products.name}>
                                <td>{products.name}</td>
                                <td>{products.price}</td>
                                <td>
                                    <EditProductModal trigger={<button className="ui yellow button">Edit</button>}
                                        onClose={this.onClose} />
                                </td>
                                <td>
                                    <DeleteProductModal trigger={<button className="ui red button">Delete</button>}
                                        onClose={this.onClose} />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
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