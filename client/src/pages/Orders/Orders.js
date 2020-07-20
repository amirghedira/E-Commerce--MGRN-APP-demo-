import React from 'react'
import { Table, Container, Row, Button, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
const Orders = () => {
    return (
        <div>
            <Container style={{ marginTop: '100px', marginBottom: '100px' }}>
                <Row style={{ marginTop: '20px', marginBottom: '40px' }}>
                    <Col xs="12" style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button color="info" style={{ margin: '20px' }}>
                            All Orders
                    </Button>
                        <Button style={{ margin: '20px' }}>
                            Pended Orders
                    </Button>
                        <Button style={{ margin: '20px' }}>
                            Passed Orders
                    </Button>
                        <Button style={{ margin: '20px' }}>
                            Canceled Orders
                    </Button>
                    </Col>
                </Row>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Total price</th>
                            <th>Status</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"><Link to="/order/1">1</Link></th>
                            <td>Otto</td>
                            <td><Link>Product</Link></td>
                            <td>5</td>
                            <td>50 DT</td>
                            <td><i className="fa fa-check-circle-o" style={{ fontSize: '26px', fontWeight: 'bold', color: 'green' }}></i></td>
                            <td><i style={{ fontSize: '20px', fontWeight: 'bold' }} className="fa fa-pencil-square-o"></i></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Otto</td>
                            <td><Link>Product</Link></td>
                            <td>5</td>
                            <td>50 DT</td>
                            <td><i className="fa fa-times-circle-o" style={{ fontSize: '26px', fontWeight: 'bold', color: 'red' }}></i></td>
                            <td><i style={{ fontSize: '20px', fontWeight: 'bold' }} className="fa fa-pencil-square-o"></i></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default Orders
