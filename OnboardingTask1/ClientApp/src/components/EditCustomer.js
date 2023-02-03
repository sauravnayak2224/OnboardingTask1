import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';


export class EditCustomer extends Component {

    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('https://localhost:5001/api/customer', {
            method: 'PUT',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                CustomerID: event.target.CustomerIDvalue,
                CustomerName: event.target.CustomerNamevalue
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
            },
                (error) => {
                    alert('Failed')
                }
            )
    }
    render() {
        return (

            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Customer
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="container">
                        <Row>
                            <Col sm={6}>
                                {/*<Form onSubmit={this.handleSubmit}>*/}
                                {/*    <Form.Group controlId="CustomerID">*/}
                                {/*        <Form.Label>CustomerID</Form.Label>*/}
                                {/*        <Form.Control*/}
                                {/*            type="text"*/}
                                {/*            name="CustomerID"*/}
                                {/*            required*/}
                                {/*disabled*/}
                                {/*defaultVaule = {this.props.custId}*/}
                                {/*            placeholder="CustomerName"*/}
                                {/*        />*/}
                                {/*    </Form.Group>*/}
                                {/*    <Form.Group controlId="CustomerName">*/}
                                {/*        <Form.Label>CustomerName</Form.Label>*/}
                                {/*        <Form.Control*/}
                                {/*            type="text"*/}
                                {/*            name="CustomerName"*/}
                                {/*            required*/}
                                {/*                disabled*/}
                                {/*                defaultVaule = {this.props.custName}*/}
                                {/*            placeholder="CustomerName"*/}
                                {/*        />*/}
                                {/*    </Form.Group>*/}

                                {/*    <Form.Group>*/}
                                {/*        <Button variant="primary" type="submit">*/}
                                {/*            Update Customer*/}
                                {/*        </Button>*/}
                                {/*    </Form.Group>*/}
                                {/*</Form>*/}
                            </Col>
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>


        );
    }

}
