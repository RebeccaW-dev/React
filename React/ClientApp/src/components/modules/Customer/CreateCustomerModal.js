import React, { Component } from 'react';
import { Button, Modal, Icon, Header, Form } from 'semantic-ui-react';


export class CreateCustomerModal extends Component {
    displayName = CreateCustomerModal.name
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this)
        // this.handleClick = this.handleClick.bind(this)
        // this.handleCreate = this.handleCreate.bind(this)
        this.state = {
           data: '', name: "", address: "", modalOpen: true, onClose: false
        }
    }

    //  handleClick = () => this.setState({ modalOpen: true })
    /*handleCreate = () => {
        if (this.state.name !== '' || this.state.name !== null) {
            fetch('https://localhost:44332/Customer')
                .then(response => response.json())
                .then(
                    this.setState({
                        name: this.state.name, address: this.state.address
                    })
                )
        }
    }*/

    handleClose = () => {
        this.setState({
            modalOpen: false,          
        })
        console.log('Click happened');
    }

    

    render() {
        //const {modalOpen, size}=this.state
        return (
            <div className="ui container" >             
                <Modal trigger={<Button primary>New Customer</Button>} onClick={this.handleClose} closeIcon >

                    <Modal.Header content='Create Customer' />
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
                        <Button color='black' onClick={this.handleClose}>
                            <Icon name='cancel' onClick={this.handleClose}/> cancel
                </Button>
                    </Modal.Actions>
                </Modal>
            </div>
            
        )
    }

}