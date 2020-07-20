import React from 'react'
import { Container, Row } from 'reactstrap'
import classes from './Home.module.css'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Loading from 'components/Loading/Loading'
import ProductCard from './ProductCard/ProductCard'


const FETCH_PRODUCTS_QUERY = gql`
  {
  getProducts{
    products{
      _id
      imageUrl
      title
      price
      available
      description
    }
  }
  }
`;
const Home = () => {

    const { loading, data } = useQuery(FETCH_PRODUCTS_QUERY)

    return (
        <div className={classes.mainHome}>
            <Container>
                {loading ?
                    <Loading />
                    :
                    <Row>
                        {data.getProducts.products.map(product => {
                            return (

                                <ProductCard key={product._id} title={product.title} imageUrl={product.imageUrl} id={product._id} price={product.price} />
                            )
                        })}
                    </Row>}
            </Container>
        </div>

    )
}

export default Home