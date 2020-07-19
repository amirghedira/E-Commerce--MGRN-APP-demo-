import React from 'react'
import { Container, Row, Col, Button, Form, Card, Input } from 'reactstrap'


const SignUp = () => {

    return (
        <div>
            <div>
                <div className="filter" />
                <Container style={{ marginTop: '100px' }}>
                    <Row>
                        <Col className="ml-auto mr-auto" lg="4">
                            <Card className="card-register ml-auto mr-auto">
                                <h3 className="title mx-auto">Welcome</h3>
                                <Form className="register-form">
                                    <label>Username</label>
                                    <Input placeholder="Username" type="text" />
                                    <label>Email</label>
                                    <Input placeholder="Email" type="text" />
                                    <label>Password</label>
                                    <Input placeholder="Password" type="password" />
                                    <label>Re-Password</label>
                                    <Input placeholder="Repassword" type="password" />
                                    <label>Phone number</label>
                                    <Input placeholder="N Phone" type="text" />
                                    <label>Address</label>
                                    <Input placeholder="Address" type="text" />
                                    <Button block className="btn-round" color="danger">
                                        Register
                                   </Button>
                                </Form>
                                <div className="forgot">
                                    <Button
                                        className="btn-link"
                                        color="danger"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Forgot password?
                  </Button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default SignUp