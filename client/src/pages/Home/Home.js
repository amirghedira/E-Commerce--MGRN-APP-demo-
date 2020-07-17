import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import classes from './Home.module.css'

const Home = () => {

    const products = [
        { id: '1', title: 'produit1', description: 'this is a description' },
        { id: '1', title: 'produit1', description: 'this is a description' },
        { id: '1', title: 'produit1', description: 'this is a description' },
        { id: '1', title: 'produit1', description: 'this is a description' },
        { id: '1', title: 'produit1', description: 'this is a description' },
        { id: '1', title: 'produit1', description: 'this is a description' },
        { id: '1', title: 'produit1', description: 'this is a description' },
        { id: '1', title: 'produit1', description: 'this is a description' },

    ]
    return (

        <div className={classes.mainHome}>
            <Container>
                <Row>
                    {products.map(product => {
                        return (

                            <Col xs='3' className={classes.cardProduct}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img className={classes.productImage} src="https://elcopcbonline.com/photos/product/4/176/4.jpg" />
                                </div>
                                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignContent: 'center' }} >
                                    <div>
                                        <h4 style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>{product.title}</h4>
                                        <h6 style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>{product.description}</h6>
                                        <Button color="success" style={{ display: 'flex', margin: 'auto' }}>
                                            Purchace
                                        </Button>
                                    </div>

                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>

    )
}

export default Home