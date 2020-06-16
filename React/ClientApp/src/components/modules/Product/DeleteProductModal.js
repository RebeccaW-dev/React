import React, { Component } from 'react';
import { Button, Modal} from 'semantic-ui-react';


export class DeleteProductModal extends Component {
    displayName = DeleteProductModal.name
    constructor(props) {
        super(props);
        this.state = {
            loading: true, data: '', name: "", address: "", modalOpen: false
        }
    }
    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.seState({ modalOpen: false })
    handleCreate = () => {
        if (this.state.name !== '' || this.state.name !== null) {
            fetch('https://localhost:44332/Product')
                .then(response => response.json())
                .then(
                    this.setState({
                        name: this.state.name, address: this.state.address
                    })
                )
        }

    }
    render() {
        return (
            <div className="ui mini-container" >
                <Modal trigger={<Button className="ui red button"><i class="trash icon"></i>Delete</Button>} closeIcon >

                    <Modal.Header content='Delete Product' />
                    <Modal.Content>
                        <p>Are you sure?</p>

                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={this.state.handleClose}>cancal
                        
                    </Button>
                        <Button color='green' onClick={this.state.handleCreate}>delete
                    </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}
