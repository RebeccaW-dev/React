import React, { Component } from 'react';
import { Button, Modal, Icon, Header, Form } from 'semantic-ui-react';


export class CreateProductModal extends Component {
    displayName = CreateProductModal.name
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleCreate = this.handleCreate.bind(this)
        this.state = {
            loading: true, data: '', name: "", address: "", modalOpen: true, onClose: false
        }
    }

    handleClick = () => this.setState({ modalOpen: true })
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
    handleClose = () => {
        this.setState({
            loading: true, modalOpen: false, onClose: true
        })
    }
    render() {
        return (
            <div className="ui mini-container" >
                <Modal trigger={<Button primary>New Product</Button>} closeIcon >

                    <Modal.Header content='Create Product' />
                    <Modal.Content>
                        <Form.Field>
                            <label>NAME</label>
                        </Form.Field>
                        <input placeholder='NAME' />
                        <Form.Field>
                            <label>ADDRESS</label>
                        </Form.Field>
                        <Form.Field>
                            <input placeholder='ADDRESS' />
                        </Form.Field>

                    </Modal.Content>
                        <Modal.Actions>
                            <Button color='green'>
                            <Icon name='checkmark' onClick={this.state.handleCreate} /> create
                </Button>
                        <Button color='black' onClick={this.state.handleClose}>
                                <Icon name='cancel'/> cancel
                </Button>
                        </Modal.Actions>
                    </Modal>
                </div>
        )
    }
}