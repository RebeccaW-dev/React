import React, { Component } from 'react';
import {Button, Modal, Icon,Header,Form} from 'semantic-ui-react'

export class AddCustomer extends Component {
    displayName = AddCustomer.name

    AddCustomerModal = () => (
        <Modal trigger={<Button>New Customer</Button>} closeIcon >
        <Header content='Create Customer' />
        <Modal.Content>
            <Form.Field>
                <label>NAME</label>
                <input placeholder='NAME' />
            </Form.Field>
            <Form.Field>
                <label>ADDRESS</label>
                <input placeholder='ADDRESS' />
            </Form.Field>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black'>
                    <Icon name='cancel' /> cancel
      </Button>
                <Button color='green'>
                    <Icon name='create' /> create
      </Button>
            </Modal.Actions>
        </Modal>
)
}