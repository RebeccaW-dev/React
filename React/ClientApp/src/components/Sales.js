import React, { Component } from 'react';
import { CreateSalesModal } from './modules/Sales/CreateSalesModal';
import { EditSalesModal } from './modules/Sales/EditSalesModal';
import { DeleteSalesModal } from './modules/Sales/DeleteSalesModal';
import { Menu, Table, Dropdown } from 'semantic-ui-react';

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
                <CreateSalesModal trigger={<button primary > New Sales</button>}
                    onClose={this.onClose} />
                <Table className='Table'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>customer</Table.HeaderCell>
                            <Table.HeaderCell>product</Table.HeaderCell>
                            <Table.HeaderCell>store</Table.HeaderCell>
                            <Table.HeaderCell>dateSold</Table.HeaderCell>
                            <Table.HeaderCell>action</Table.HeaderCell>
                            <Table.HeaderCell>action</Table.HeaderCell>



                        </Table.Row>
                    </Table.Header>
                   
                    <tbody>
                        {sales.map(sales =>
                           
                            <tr key={sales.customer}>
                                <td>{sales.customer}</td>  
                                <td>{sales.product}</td>
                                <td>{sales.store}</td>
                                <td>{sales.dateSold}</td>
                                <td>
                                    <EditSalesModal trigger={<button className="ui yellow button" ><i class="edit icon"></i>Edit</button>}
                                        onClose={this.onClose} />
                                </td>
                                <td>
                                    <DeleteSalesModal trigger={<button className="ui red button"><i class="trash icon"></i>Delete</button>}
                                        onClose={this.onClose} />
                                </td>

                            </tr>
                        )}
                    </tbody>
                </Table>
                <div className="ui grid">
                    <Menu compact>
                        <Dropdown text='10' simple item />
                    </Menu>

                    <div className="four wide column"></div>
                    <div className="four wide column"></div>
                    <div className="four wide column"></div>
                    <div className="twelve wide column"></div>
                    <a className='ui blue bottom label'>1</a>
                </div>
                <div class="ui divider" />
                <div className="ui grid">
                    <div className=" twelve wide column"></div>
                </div>
                <div className="ui grid">
                    <div className=" twelve wide column"></div>

                </div>
                <i className="copyright outline icon"></i>2020-rebecca W
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