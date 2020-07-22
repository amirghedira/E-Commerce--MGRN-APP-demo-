import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import Loading from 'components/Loading/Loading';
import { Link } from 'react-router-dom';

const FETCH_PRODUCT_QUERY = gql`

   query getProduct(

       $productId:String!
   ){
       getProduct(productId:$productId){
           product{
               _id
               title
               description
               price
               imageUrl
               available
           }
       }

   }


`;
const Product = (props) => {

    const { data, loading } = useQuery(FETCH_PRODUCT_QUERY, {
        variables: {
            productId: props.match.params.id
        }
    })
    return (
        <div>
            <div>
                <Container style={{ paddingTop: '100px', paddingBottom: '100px' }}>
                    {loading ?
                        <Loading />
                        :

                        <Row>
                            <Col xs="4">
                                <img width="400" src={data.getProduct.product.imageUrl} alt="..." />
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <h5 style={{ fontWeight: 'bold', fontSize: '14px' }}> Price: {data.getProduct.product.price}$</h5>
                                </div>
                            </Col>
                            <Col xs="8">
                                <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
                                    <h4 style={{ fontWeight: 500 }}>{data.getProduct.product.title}</h4>
                                </div>
                                <pre style={{ display: 'flex', justifyContent: 'center', minHeight: '150px', marginTop: '40px', whiteSpace: 'pre-wrap', paddingLeft: '20px', paddingRight: '20px' }}>
                                    {data.getProduct.product.description}
                                </pre>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button color="success" tag={Link} to={`/purchase/${data.getProduct.product._id}`}>
                                        Purchase
                                </Button>

                                </div>
                            </Col>
                        </Row>}

                </Container>
            </div>

        </div>
    )
}

export default Product
