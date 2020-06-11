﻿import React, { Component } from 'react';
import { CreateCustomerModal } from './modules/Customer/CreateCustomerModal';
import { EditCustomerModal } from './modules/Customer/EditCustomerModal';
import { DeleteCustomerModal } from './modules/Customer/DeleteCustomerModal';

export class Customer extends Component {
    displayName = Customer.name

    constructor(props) {
        super(props);
        this.state = { Customer: [], loading: true };
        const baseUrl = "api/Customer"

        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({ Customer: data, loading: false })
                console.log(data);
            });

    }
    static renderCustomerTable(customers) {

        return (
            <div>
                <CreateCustomerModal trigger={<button primary> New Customer</button>}
                    onClose={this.onClose} />
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Action</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {customers.map(customers =>
                            <tr key={customers.name}>
                                <td>{customers.name}</td>
                                <td>{customers.address}</td>
                                <td>
                                    <EditCustomerModal trigger={<button className="ui yellow button">Edit</button>}
                                        onClose={this.onClose} />
                                </td>
                                <td>
                                    <DeleteCustomerModal trigger={<button className="ui red button">Delete</button>}
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
            : Customer.renderCustomerTable(this.state.Customer);
        return (
            <div>

                {contents}
            </div>
        );
    }


}