import React from 'react'
import { Container, Row, Col, Button, Input } from 'reactstrap'
import classes from './Order.module.css'
import OrderField from '../Order/OrderField/OrderField'
import Loading from 'components/Loading/Loading'
import { useQuery, useMutation } from 'react-apollo'
import gql from 'graphql-tag'
import GlobalContext from '../../Context/GlobalContext'
import { useHistory } from 'react-router'

const FETCH_PRODUCT_QUERY = gql`
    query($productId:String!)
    {
      getProduct(productId:$productId)
        {
            product
            {
                title
                _id
                description
                price
                imageUrl
            }
        }
    }

`;

const ORDER_PRODUCT_MUTATION = gql`
    mutation($productId:String!,$quantity:Int!)
    {
        orderProduct(productId:$productId,quantity:$quantity)
        {
            order
            {
                _id
                product
                {
                    title
                    _id
                }
                totalPrice
                quantity
                date
                status
            }
        }
    }
`;
const Purchase = (props) => {

    const context = React.useContext(GlobalContext)
    const history = useHistory()
    const [quantity, setQuatity] = React.useState(1)

    const { data, loading } = useQuery(FETCH_PRODUCT_QUERY,
        {
            variables: {
                productId: props.match.params.id
            }
        })

    const [orderProduct] = useMutation(ORDER_PRODUCT_MUTATION, {
        update(proxy, response) {
            context.setOrders([...context.orders, response.data.orderProduct.order])
            history.push(`/order/${response.data.orderProduct.order._id}`)
        },
        onError: err => {
            console.log(err)
        },
        variables: {
            productId: props.match.params.id,
            quantity: quantity
        }
    })
    const validateCommandHandler = () => {

        if (!context.token)
            history.push('/login/')
        orderProduct()


    }
    if (loading)
        return <Loading />
    return (
        <Container className={classes.mainContainer}>
            <h4 style={{ marginBottom: '20px', fontWeight: 'bold', color: 'black' }}>
                Purchase: #{props.match.params.id}
            </h4>
            <Row className={classes.orderContainer}>
                <Col xs='4'>
                    <img width="200" src={data.getProduct.product.imageUrl} alt="img" />

                </Col>
                <Col>
                    <OrderField name="Product" value={data.getProduct.product.title} />
                    <Row style={{ paddingTop: '10px', paddingBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <Col xs="3">
                            <h4 style={{ margin: 0, fontWeight: 'bold', fontSize: '18px' }}>
                                Quantity:
                            </h4>
                        </Col>
                        <Col style={{ display: 'flex', justifyContent: 'center' }}>
                            <Input type="number" onChange={(e) => { setQuatity(+e.target.value) }} style={{ margin: 0, fontWeight: '400', width: '15%' }} defaultValue={quantity} min={1} />

                        </Col>
                    </Row>
                    <OrderField name="Total Price" value={quantity * data.getProduct.product.price + '$'} />
                </Col>
            </Row>
            <Row style={{ marginTop: '30px' }}>
                <Col style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button color="danger" style={{ margin: '20px' }}>
                        Cancel
                    </Button>
                    <Button color="success" style={{ margin: '20px' }} onClick={validateCommandHandler}>
                        Validate
                </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Purchase
