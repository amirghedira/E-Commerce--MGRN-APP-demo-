import React from 'react'
import { Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import classes from './ProductCard.module.css'
const ProductCard = (props) => {
    return (
        <Col xs='3' className={classes.cardProduct}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img className={classes.productImage} src={props.imageUrl} alt="..." />
            </div>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignContent: 'center' }} >
                <div>
                    <Link to={`/product/${props.id}`}>
                        <h4 style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                            <strong>{props.title}</strong>
                        </h4>
                    </Link>
                    <h6 style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>{props.price}$</h6>
                    <Button color="success" style={{ display: 'flex', margin: 'auto', width: '110px' }} tag={Link} to={`/purchase/${props.id}`}>
                        Purchace
                    </Button>
                </div>

            </div>
        </Col>
    )
}

export default ProductCard
