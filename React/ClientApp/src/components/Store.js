import React, { Component } from 'react';


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
                <button className="ui blue button">New Store</button>
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
                        {stores.map(stores =>
                            <tr key={stores.name}>
                                <td>{stores.name}</td>
                                <td>{stores.address}</td>
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
            : Store.renderStoreTable(this.state.Store);

        return (
            <div>

                {contents}
            </div>
        );
    }


}