import React, { Component } from 'react';
import { Button, Modal, Icon, Form } from 'semantic-ui-react';


export class CreateStoreModal extends Component {
    displayName = CreateStoreModal.name
    constructor(props) {
        super(props);
        this.state = {
            loading: true, data:'', name: "", address: "", modalOpen: false
        }
        }
    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.seState({ modalOpen:false })
    handleCreate = () => {
        if (this.state.name !== '' || this.state.name !== null) {
            fetch('https://localhost:44332/Store')
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
                <Modal trigger={<Button primary>New Store</Button>} closeIcon >
                   
                 <Modal.Header content='Create Store' />
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
                            <Icon name='cancel' /> cancel
                </Button>
                    </Modal.Actions>
                    </Modal>
            </div>
            )
    }
}