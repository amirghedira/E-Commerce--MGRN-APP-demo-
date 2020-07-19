import React from 'react'
import { Row, Col, Input, Button } from 'reactstrap'


const ProfileField = (props) => {

    const [status, setStatus] = React.useState(false)
    return (
        <Row style={{ paddingTop: '50px', paddingLeft: '50px' }}>
            <Col xs="2" style={{ display: 'flex' }}>
                <h5 style={{ fontWeight: 'bold', fontSize: '15px', margin: 'auto' }}>{props.title}</h5>
            </Col>
            <Col xs={status ? '7' : '9'} style={{ display: 'flex', justifyContent: 'center' }}>

                <div>
                    {status ?
                        props.password ?
                            <div>
                                <Input style={{ margin: 'auto', fontSize: '16px' }} placeholder="password" type={props.type} />
                                <Input style={{ margin: 'auto', fontSize: '16px' }} placeholder="Re-enter password" type={props.type} />

                            </div>
                            :
                            <Input style={{ margin: 'auto', fontSize: '16px' }} placeholder={props.value} type={props.type} />
                        :
                        <h6 style={{ margin: 'auto' }}>{props.value}</h6>
                    }

                </div>

            </Col>
            <Col style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>

                {status ? <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Button color="success" style={{ marginLeft: '20px', marginRight: '10px' }}>
                        Save
                            </Button>
                    <Button color="danger" onClick={() => { setStatus(false) }}>
                        Cancel
                            </Button>
                </div>
                    :
                    <i style={{ fontSize: '20px', color: 'black' }} className="fa fa-pencil-square-o" aria-hidden="true"
                        onClick={() => { setStatus(true) }}
                    ></i>}
            </Col>
        </Row>
    )
}

export default ProfileField
