import React, { Component } from 'react';
import { CreateSalesModal } from './modules/Sales/CreateSalesModal';
import { EditSalesModal } from './modules/Sales/EditSalesModal';
import { DeleteSalesModal } from './modules/Sales/DeleteSalesModal';

export class Sales extends Component {
    displayName = Sales.name

    constructor(props) {
        super(props);
        this.state = { Sales: [], loading: true };
        const baseUrl = "api/Sales"

        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({ Sales: data, loading: false })
                console.log(Sales);
            });


    }
    static renderSalesTable(sales) {

        return (
            <div>
                <CreateSalesModal trigger={<button primary> New Sales</button>}
                    onClose={this.onClose} />
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Store</th>
                            <th>DateSold</th>
                            <th>Actions</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                   
                    <tbody>
                        {sales.map(sales =>
                           
                            <tr key={sales.customer}>
                                <td>{sales.customer}</td>  
                                <td>{sales.product}</td>
                                <td>{sales.store}</td>
                                <td>{sales.dateSold}</td>
                                <td>
                                    <EditSalesModal trigger={<button className="ui yellow button">Edit</button>}
                                        onClose={this.onClose} />
                                </td>
                                <td>
                                    <DeleteSalesModal trigger={<button className="ui red button">Delete</button>}
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
            : Sales.renderSalesTable(this.state.Sales);


        return (
            <div>

                {contents}
            </div>
        );
    }


}