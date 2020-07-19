import React from 'react'
import { Container, Row, Col, Button, Form, Card, Input } from 'reactstrap'
import GlobalContext from '../../Context/GlobalContext'
const Login = () => {

    const context = React.useContext(GlobalContext)
    const userNameInput = React.useRef(null)
    const formInput = React.useRef(null)
    const loginHandler = () => {
        context.userLogin(
            document.getElementById('username').value,
            document.getElementById('password').value
        )
    }
    return (
        <div>
            <div>
                <div className="filter" />
                <Container style={{ marginTop: '100px' }}>
                    <Row>
                        <Col className="ml-auto mr-auto" lg="4">
                            <Card className="card-register ml-auto mr-auto">
                                <h3 className="title mx-auto">Welcome</h3>
                                <Form ref={formInput} className="register-form">
                                    <label>Username</label>
                                    <Input placeholder="Username" id="username" type="text" />
                                    <label>Password</label>
                                    <Input placeholder="Password" id="password" type="password" />
                                    <Button block className="btn-round" color="danger" onClick={loginHandler}>
                                        Login
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


export default Login