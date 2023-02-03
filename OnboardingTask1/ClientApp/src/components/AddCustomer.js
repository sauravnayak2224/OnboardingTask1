import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

export class AddCustomer extends Component {

    constructor(props) {
        super(props);

    }

    handleSubmit(event) {
        event.preventDefault();
        var customer = {
            Id: 111,
            Name: event.target.CustomerName.value,
            Address: event.target.address.value
        }
        var _customer = JSON.stringify(customer);
        const options = {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: {
                "Id": 111,
                "Name": "sdadas",
                "Address": "addwda"
            }
        }
        console.log(_customer);
        fetch('https://localhost:5001/api/customer/addCustomer', options);

    }

    render() {
        return (

            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"

            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Customer
                    </Modal.Title>
                </Modal.Header>


                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="CustomerName"
                        placeholder="CustomerName"
                    />

                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                    />

                    <button type="submit">Add</button>

                </form>


                <Modal.Footer>
                    <Button variant="primary" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>


        );
    }
}
