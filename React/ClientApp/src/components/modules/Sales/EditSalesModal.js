﻿import React, { Component } from 'react';
import { Button, Modal, Header, Form } from 'semantic-ui-react';


export class EditSalesModal extends Component {
    displayName = EditSalesModal.name
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
            fetch('https://localhost:44332/Customer')
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
                <Modal trigger={<Button className="ui yellow button" ><i className="edit icon"></i>Edit</Button>} closeIcon >

                    <Modal.Header content='Edit Customer' />
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
                        <Button color='black' onClick={this.state.handleClose}>cancal
                        
                    </Button>
                        <Button color='green' onClick={this.state.handleCreate}>edit
                    </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}
