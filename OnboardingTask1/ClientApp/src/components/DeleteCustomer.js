import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export class DeleteCustomer extends Component {

    constructor(props) {
        super(props);

    }

    deleteDep() {
        var customerId = this.props.custId;
        fetch('https://localhost:5001/api/customer/deleteCustomer/' + customerId, { method: "delete" })
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
                        Delete Customer
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Are you Sure?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" className="btn-danger" onClick={() => { this.deleteDep(); this.props.onHide() }}>
                        DELETE
                    </Button>
                    <Button variant="Secondary" className="btn-Secondary" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>


        );
    }
} 