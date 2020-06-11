import React, { Component } from 'react';
import { Button, Modal, Icon, Header, Form } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

export class AddCustomerModal extends Component {
    displayName = AddCustomerModal.name
    constructor(props) {
        super(props);
        this.state = {loading:true,name:"",address:""        
        }
    }

    render() {
        return (
            AddCustomerModal = () => (
                <div>{this.props.children}
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
                            <Button color='green' onClick={this.props.show}>
                                <Icon name='create' /> create
                </Button>
                            <Button color='black' onClick={this.props.onClose()}>
                                <Icon name='cancel' /> cancel
                </Button>
                        </Modal.Actions>
                    </Modal>
                </div>
            )
            )
    }

}
AddCustomerModal.propTypes = {
    modalOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
}


   /* state = {
        name: '',
        address: '',
    };
    handleChange = event => {
        this.setState({ name: event.target.value });
    };
*/
  /*  handleCreate = event => {
        event.preventDefault();
        const customer = {
            name: this.state.name,
            address:this.state.address,
        }
        axios.post(''), { customer }
        .then(response => {

        })
    }*/
  /*  AddCustomerModal = () => (
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
                <Button color='green' onClick={this.props.onClose}>
                    <Icon name='create' /> create
      </Button>
            </Modal.Actions>
        </Modal>
)*/