import React from 'react'
import { Container, Row, Col, Button, Input } from 'reactstrap'

import classes from './Order.module.css'
import OrderField from './OrderField/OrderField'
import Loading from 'components/Loading/Loading'
import gql from 'graphql-tag'
import { useQuery, useMutation } from 'react-apollo'
import FormateDate from 'components/FormatDate/FormatDate'


const UPDATE_ORDER_MUTATION = gql`

    mutation($orderId:String!,$quantity:Int!,$status:String!){
        updateOrder(orderId:$orderId,quantity:$quantity,status:$status){
            order{
                _id
            }
        }
    }
`;
const FETCH_ORDER_QUERY = gql`

    query($orderId:String!)
    {
        getOrder(orderId:$orderId)
        {
            status
            order
            {
                _id
                date
                status
                quantity
                product
                    {
                        title
                        imageUrl
                    }
            }
        }
    }

`;
const Order = (props) => {

    const [order, setOrder] = React.useState(null)
    useQuery(FETCH_ORDER_QUERY, {
        variables:
            { orderId: props.match.params.id },

        onCompleted: response => {
            console.log(response.getOrder)
            setOrder(response.getOrder.order)

        }
    })

    const [isEditingQuantity, setIsEdidingQuantity] = React.useState(false)

    const [orderQuantity, setOrderQuantity] = React.useState(1)

    const [updateQuantityOrder, { }] = useMutation(UPDATE_ORDER_MUTATION, {
        onCompleted: response => {
            console.log(response)
        },
        variables: {
            orderId: props.match.params.id,
            quantity: orderQuantity,
            status: order?.status
        }
    })
    const [cancelOrder, { }] = useMutation(UPDATE_ORDER_MUTATION, {
        onCompleted: response => {
            console.log(response)
        },
        variables: {
            orderId: props.match.params.id,
            quantity: orderQuantity,
            status: 'canceled'
        }
    })
    const [validateOrder, { }] = useMutation(UPDATE_ORDER_MUTATION, {
        onCompleted: response => {
            console.log(response)
        },
        variables: {
            orderId: props.match.params.id,
            quantity: orderQuantity,
            status: 'passed'
        }
    })
    const saveOrderHandler = () => {
        updateQuantityOrder()
        setOrder({ ...order, quantity: orderQuantity })
        setIsEdidingQuantity(false)
    }
    const cancelOrderHandler = () => {

        cancelOrder()
        setOrder({ ...order, status: 'canceled' })



    }
    const ValidateOrderHandler = () => {

        setOrder({ ...order, status: 'passed' })
        validateOrder()

    }
    if (!order)
        return <Loading />

    return (
        <Container className={classes.mainContainer}>
            {/* <Loading /> */}
            <h4 style={{ marginBottom: '20px', fontWeight: 'bold', color: 'black' }}>
                Command: #{order._id}
            </h4>
            <Row className={classes.orderContainer}>
                <Col xs='4'>
                    <img width="200" src={order.product.imageUrl} alt="img" />

                </Col>
                <Col>
                    <OrderField name="Product" value={order.product.title} />
                    <OrderField name="Order date" value={<FormateDate>{order.date}</FormateDate>} />
                    <Row style={{ paddingTop: '10px', paddingBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <Col xs="3">
                            <h4 style={{ margin: 0, fontWeight: 'bold', fontSize: '18px' }}>
                                Quantity:
                             </h4>
                        </Col>
                        <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            {
                                isEditingQuantity ?
                                    <Input style={{ width: '16%' }} type="number" min={1} defaultValue={order.quantity} onChange={(e) => { setOrderQuantity(+e.target.value) }} />
                                    :
                                    <h5 style={{ margin: 0, fontWeight: '400' }}>

                                        {order.quantity}

                                    </h5>
                            }
                        </Col>
                        <Col xs="4" >
                            {
                                isEditingQuantity &&
                                <div>
                                    <Button color="info" style={{ margin: '10px' }} onClick={() => saveOrderHandler()}>
                                        Save
                            </Button>
                                    <Button style={{ margin: '10px' }} onClick={() => setIsEdidingQuantity(false)}>
                                        Cancel
                            </Button>
                                </div>
                            }
                        </Col>
                    </Row>
                    {

                        order.status == 'passed' ?
                            <OrderField name="Status" value={'Command Passed'} icon="fa fa-check-circle-o" iconColor="green" />
                            :
                            order.status == 'pended' ?
                                <OrderField name="Status" value={'Command Pended'} icon="fa fa-times-circle-o" iconColor="yellow" />
                                :
                                <OrderField name="Status" value={'Command Canceled'} icon="fa fa-ban" iconColor="red" />

                    }
                </Col>
            </Row>
            {order.status == 'pended' &&
                <Row style={{ marginTop: '30px' }}>
                    <Col style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button color="danger" style={{ margin: '20px' }} onClick={cancelOrderHandler}>
                            Cancel
                    </Button>
                        <Button color="info" style={{ margin: '20px' }} onClick={() => setIsEdidingQuantity(!isEditingQuantity)}>
                            Edit
                    </Button>
                        <Button color="success" style={{ margin: '20px' }} onClick={ValidateOrderHandler}>
                            Validate
                </Button>
                    </Col>
                </Row>}
        </Container>
    )
}

export default Order
