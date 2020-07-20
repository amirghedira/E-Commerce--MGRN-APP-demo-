import React from 'react'
import { Container, Row, Col, Button, Form, Card, Input } from 'reactstrap'
import GlobalContext from '../../Context/GlobalContext'
import { useLazyQuery } from "react-apollo"
import { useHistory } from 'react-router-dom'
import gql from 'graphql-tag'


const LOGIN_USER_QUERY = gql`
query(
  $username:String!
  $password:String!  
){
  userLogin(username:$username,password:$password){
    
    status
    token
    user{
      username
      email
      address
      phone
    }
    
  }
}
`;

const Login = () => {

    const context = React.useContext(GlobalContext)
    const history = useHistory();
    const [errorLogin, setErrorLogin] = React.useState('')

    const [loginUser, { loading }] = useLazyQuery(LOGIN_USER_QUERY, {
        onCompleted: response => {
            if (response.userLogin.status != 200)
                setErrorLogin('wrong credentials')
            else {
                localStorage.setItem('token', response.userLogin.token)
                context.setToken(response.userLogin.token)
                context.setUser(response.userLogin.user)
                history.push("/home")
            }
        }
    })

    const loginHandler = () => {
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        // loginUser({})
        loginUser({
            variables: {
                username,
                password
            }
        })
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
                                <Form className="register-form">
                                    <label>Username</label>
                                    <Input placeholder="Username" id="username" type="text" onClickCapture={() => setErrorLogin('')} />
                                    <label>Password</label>
                                    <Input placeholder="Password" id="password" type="password" onClickCapture={() => setErrorLogin('')} />
                                    <label style={{ display: 'flex', justifyContent: 'center' }}>{errorLogin}</label>
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