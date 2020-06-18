import React, { Component } from 'react';
import { Button, Modal, Icon, Header, Form } from 'semantic-ui-react';


export class CreateCustomerModal extends Component {
    displayName = CreateCustomerModal.name
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this)
        this.state = {
           data: '', name: "", address: "", modalOpen: true, onClose: false
        }
    }

    handleClose = () => {
        this.setState({
            modalOpen: false,          
        })
        console.log('Click happened');
    }

    

    render() {
        return (
            <div className="container" >             
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