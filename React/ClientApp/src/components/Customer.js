import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

export class Customer extends Component {
    displayName = Customer.name

    constructor(props) {
        super(props);
        this.state = { Customer: [], loading: true };
        const baseURL='api/Customer'
        fetch(baseURL)
            .then(response => response.json())
            .then(data => {
                this.setState({ Customer: data, loading: false })
                console.log(data);
            });
    }
/*
        componentDidMount() {
        const getCustomerURL = "/api/Customer"
        axios.get(getCustomerURL).then(res => {
        console.log(res)
            this.setState({
                loading: false, customer: res.data
            })
        }
            )

render(){
return(
<ul>
{this.state.Customer.map(Customer=><li key={Customer.id}>Customer.name</li>)}

</ul>)
}
        onClose = () => {
        const getCustomerURL = "/api/Customer"
        axios.get(getCustomerURL).then(result => {
            this.setState({ loading: false, customers: result.data });

        }
            )
            }*/

    static renderCustomerTable(customers) {
 
        return (
            <div>

                <Button className="ui blue button">New Customer</Button>
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
            : Customer.renderCustomerTable(this.state.Customer);

        return (
            <div>
                {contents}
                
            </div>
        );
    }
}
    