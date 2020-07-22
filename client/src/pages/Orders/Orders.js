import React, { useContext } from 'react'
import { Table, Container, Row, Button, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo';
import Loading from 'components/Loading/Loading';
import FormateDate from 'components/FormatDate/FormatDate';
import GlobalContext from '../../Context/GlobalContext'
import AuthGuard from '../../utils/AuthGuard'
const FETCH_ORDERS_QUERY = gql`
    query{
        getUserOrders{
            orders
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
const Orders = () => {

    const context = useContext(GlobalContext)
    const [orders, setOrders] = React.useState(null)
    const { loading, data } = useQuery(FETCH_ORDERS_QUERY)
    const [filterOption, setFilterOption] = React.useState(1)

    React.useEffect(() => {
        if (!loading) {

            setOrders(data.getUserOrders.orders)
            context.setOrders(data.getUserOrders.orders)
        }
    }, [loading, data, context])

    React.useEffect(() => {
        switch (filterOption) {
            case 2:
                {
                    setOrders(context.orders.filter(order => order.status === 'pended'))
                    break;
                }
            case 3:

                {
                    setOrders(context.orders.filter(order => order.status === 'passed'))
                    break;
                }
            case 4:

                {
                    setOrders(context.orders.filter(order => order.status === 'canceled'))
                    break;
                }
            default:
                {
                    setOrders(context.orders)
                    break;
                }
        }
    }, [filterOption, context.orders])


    if (loading)
        return <Loading />
    return (

        <AuthGuard>
            <div>
                <Container style={{ marginTop: '100px', marginBottom: '100px' }}>
                    <Row style={{ marginTop: '20px', marginBottom: '40px' }}>
                        <Col xs="12" style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button color={filterOption === 1 ? "info" : null} style={{ margin: '20px' }} onClick={() => { setFilterOption(1) }}>
                                All Orders
                    </Button>
                            <Button color={filterOption === 2 ? "info" : null} style={{ margin: '20px' }} onClick={() => { setFilterOption(2) }}>
                                Pended Orders
                    </Button>
                            <Button color={filterOption === 3 ? "info" : null} style={{ margin: '20px' }} onClick={() => { setFilterOption(3) }}>
                                Passed Orders
                    </Button>
                            <Button color={filterOption === 4 ? "info" : null} style={{ margin: '20px' }} onClick={() => { setFilterOption(4) }}>
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
                            </tr>
                        </thead>
                        <tbody>
                            {orders.slice(0).reverse().map((order, index) => {

                                return (
                                    <tr key={order._id}>
                                        <th scope="row"><Link to={`/order/${order._id}`}><strong style={{ fontWeight: 'bold' }}>{orders.length - index}</strong></Link></th>
                                        <td><FormateDate>{order.date}</FormateDate></td>
                                        <td><Link to={`/product/${order.product._id}`}><strong style={{ fontWeight: 'bold' }}>{order.product.title}</strong></Link></td>
                                        <td>{order.quantity}</td>
                                        <td>{order.totalPrice} $</td>
                                        <td>
                                            {
                                                order.status === 'passed' ?
                                                    <i className="fa fa-check-circle-o" style={{ fontSize: '26px', fontWeight: 'bold', color: 'green' }}></i>
                                                    :
                                                    order.status === 'pended' ?
                                                        <i className="fa fa-times-circle-o" style={{ fontSize: '26px', fontWeight: 'bold', color: 'yellow' }}></i>
                                                        :
                                                        <i className="fa fa-ban" style={{ fontSize: '26px', fontWeight: 'bold', color: 'red' }}></i>

                                            }
                                        </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </Table>
                </Container>
            </div>
        </AuthGuard>
    )
}

export default Orders
