import React from 'react'
import { Row, Col } from 'reactstrap'
const OrderField = (props) => {
    return (
        <Row style={{ paddingTop: '10px', paddingBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <Col xs="3">
                <h4 style={{ margin: 0, fontWeight: 'bold', fontSize: '18px' }}>
                    {props.name}:
                </h4>
            </Col>
            <Col style={{ display: 'flex', justifyContent: 'center' }}>
                <h5 style={{ margin: 0, fontWeight: '400' }}>
                    {props.icon &&
                        <i className={props.icon} style={{ fontSize: '26px', fontWeight: 'bold', color: props.iconColor, marginRight: '10px' }}></i>}
                    {props.value}

                </h5>
            </Col>
        </Row>
    )
}

export default OrderField
