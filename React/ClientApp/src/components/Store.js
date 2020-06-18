import React, { Component } from 'react';
import { CreateStoreModal } from './modules/Store/CreateStoreModal';
import { EditStoreModal } from './modules/Store/EditStoreModal';
import { DeleteStoreModal } from './modules/Store/DeleteStoreModal';
import { Table } from 'semantic-ui-react';

export class Store extends Component {
    displayName = Store.name

    constructor(props) {
        super(props);
        this.state = { Store: [], loading: true };
        const baseUrl = "api/Store"

        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({ Store: data, loading: false })
                console.log(data);
            });


    }
    static renderStoreTable(stores) {

        return (
            <div>
                <CreateStoreModal trigger={<button primary> New Store</button>}
                    onClose={this.onClose} />
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
                        {stores.map(stores =>
                            <tr key={stores.name}>
                                <td>{stores.name}</td>
                                <td>{stores.address}</td>
                                <td>
                                    <EditStoreModal trigger={<button className="ui yellow button"><i class="edit icon"></i>Edit</button>}
                                        onClose={this.onClose} />
                                </td>
                                <td>
                                    <DeleteStoreModal trigger={<button className="ui red button"><i class="trash icon"></i>Delete</button>}
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
            : Store.renderStoreTable(this.state.Store);

        return (
            <div>

                {contents}
            </div>
        );
    }


}