import React, { Component } from 'react';


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
                <button className="ui blue button">New Product</button>
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
                                <td><button className="ui yellow button">Edit</button></td>
                                <td> <button className="ui red button">Cancel</button></td>

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