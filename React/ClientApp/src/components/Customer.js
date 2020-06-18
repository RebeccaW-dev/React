import React, { Component } from 'react';
import { CreateCustomerModal } from './modules/Customer/CreateCustomerModal';
import { EditCustomerModal } from './modules/Customer/EditCustomerModal';
import { DeleteCustomerModal } from './modules/Customer/DeleteCustomerModal';
import { Table } from 'semantic-ui-react';

export class Customer extends Component {
    displayName = Customer.name

    constructor(props) {
        super(props);
        this.state = { Customer: [], loading: true, modalopen: false };
        const baseUrl = "api/Customer"

        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({ Customer: data, loading: false })
                console.log(data);
            });

    }

    handleClose = () => {
        this.setState({
            modalopen: false,
        })
        console.log('Click happened');
    }

    static renderCustomerTable(customers) {

        return (
            <div>
                <CreateCustomerModal trigger={<button primary> New Customer</button>}
                    onClick={this.handleClose} />
                <Table className='Table'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Address</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>
                    <tbody>
                        {customers.map(customers =>
                            <tr key={customers.name}>
                                <td>{customers.name}</td>
                                <td>{customers.address}</td>
                                <td>
                                    <EditCustomerModal
                                        trigger={<button className="ui yellow button"
                                        ><i class="edit icon"></i>Edit</button>}
                                        onClose={this.onClose} />
                                </td>
                                <td>
                                    <DeleteCustomerModal trigger={<button className="ui red button"><i class="trash icon"></i>Delete</button>}
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
            : Customer.renderCustomerTable(this.state.Customer);
        return (
            <div>

                {contents}
            </div>
        );
    }


}