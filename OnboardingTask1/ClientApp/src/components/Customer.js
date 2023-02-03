import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddCustomer } from './AddCustomer';
import { EditCustomer } from './EditCustomer';
import { DeleteCustomer } from './DeleteCustomer';

export class Customer extends Component {

    constructor(props) {
        super(props);
        this.state = { customers: [], addModalShow: false, editModalShow: false }
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList() {
        fetch('https://localhost:5001/api/customer/getCustomers')
            
    }

    componentDidUpdate() {
        this.refreshList();
    }



    render() {

        const { customers, custId, custName } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });

        let editModalClose = () => this.setState({ editModalShow: false });
        let deleteModalClose = () => this.setState({ deleteModalShow: false });
        return (


            <div className="float-sm-left">
                <ButtonToolbar>
                    <Button variant='primary' className="btn-primary fixed-top " onClick={() => this.setState({ addModalShow: true })}>
                        New Customer
                    </Button>

                    <AddCustomer
                        show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>

                <Table className="mt=4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Customer ID</th>
                            <th> Name </th>
                            <th> Address </th>
                            <th> Options </th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map(cust =>
                            <tr key={cust.id}>
                                <td>{cust.id}</td>
                                <td>{cust.name}</td>
                                <td>{cust.address}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button variant="warning" className="btn-warning"
                                            onClick={() => this.setState({ editModalShow: true, custId: cust.id, custName: cust.name })}
                                        >Edit</Button>

                                        <Button variant="danger" className="btn-danger"
                                            onClick={() => this.setState({ deleteModalShow: true, custId: cust.id })}
                                        >Delete</Button>

                                        <EditCustomer
                                            show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            custId={custId}
                                            custName={custName}
                                        />

                                        <DeleteCustomer
                                            show={this.state.deleteModalShow}
                                            onHide={deleteModalClose}
                                            custId={custId}
                                        />

                                    </ButtonToolbar>



                                </td>

                            </tr>
                        )}
                    </tbody>
                </Table>



            </div>

        );
    }
}
