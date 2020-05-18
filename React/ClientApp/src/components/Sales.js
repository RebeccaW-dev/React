import React, { Component } from 'react';


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
                <button className="ui blue button">New Sales</button>
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
                                console.log("@@#")
                                <td>{sales.customer}</td> 
                                console.log("@@#")
                                <td>{sales.product}</td>
                                <td>{sales.store}</td>
                                <td>{sales.dateSold}</td>
                                <td><button className="ui yellow button">Edit</button></td>
                                console.log("@@#")
                                <td><button className="ui red button">Cancel</button></td>

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