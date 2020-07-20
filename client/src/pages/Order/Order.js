import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

import classes from './Order.module.css'
import OrderField from './OrderField/OrderField'
import Loading from 'components/Loading/Loading'
const Order = (props) => {
    const product = { _id: '8', title: 'produit1', description: 'this is a description', price: '22.99', image: "https://elcopcbonline.com/photos/product/4/176/4.jpg" }
    return (
        <Container className={classes.mainContainer}>
            {/* <Loading /> */}
            <h4 style={{ marginBottom: '20px', fontWeight: 'bold', color: 'black' }}>
                Command: #{props.match.params.id}
            </h4>
            <Row className={classes.orderContainer}>
                <Col xs='4'>
                    <img width="200" src={product.image} alt="img" />

                </Col>
                <Col>
                    <OrderField name="Product" value={product.title} />
                    <OrderField name="Order date" value={20 / 20 / 2020} />
                    <OrderField name="Quantity" value={8} />
                    <OrderField name="Total Price" value={'Command Passed'} icon="fa fa-check-circle-o" iconColor="green" />
                    <OrderField name="Total Price" value={'Command Pended'} icon="fa fa-times-circle-o" iconColor="red" />
                </Col>
            </Row>
            <Row style={{ marginTop: '30px' }}>
                <Col style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button color="danger" style={{ margin: '20px' }}>
                        Cancel
                    </Button>
                    <Button color="warning" style={{ margin: '20px' }}>
                        Edit
                </Button>
                    <Button color="success" style={{ margin: '20px' }}>
                        Validate
                </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Order
