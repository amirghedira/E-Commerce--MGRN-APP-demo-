import React from 'react'
import { Container, Row, Col, Button, Form, Card, Input } from 'reactstrap'
import gql from 'graphql-tag'
import { useMutation } from 'react-apollo'
import { useHistory } from 'react-router-dom'

const SIGNNP_USER_QUERY = gql`
mutation(
  $username:String!
  $password:String! 
  $email:String!
  $phone:String!  
  $address:String!
){
    createUser(createUserInput:{
        username:$username,
        password:$password,
        email:$email,
        phone:$phone,
        address:$address
    }){

    user{
      username
      email
      address
      phone
    }
    
  }
}
`;




const SignUp = (props) => {

    const [infoText, setInfoText] = React.useState('')
    const [user, setUser] = React.useState({})
    const history = useHistory()
    const [signupUser] = useMutation(SIGNNP_USER_QUERY, {
        onCompleted: () => {
            history.push('/login')
        },
        variables: {
            username: user.username,
            password: user.password,
            email: user.email,
            phone: user.phone,
            address: user.address
        }
    })

    const signupUserHandler = () => {
        if (user.password === user.repassword)
            signupUser()

        else
            setInfoText('Passwords didnt match')

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
                                    <Input placeholder="Username" value={user.username || ''} onChange={(e) => setUser({ ...user, username: e.target.value })} type="text" />
                                    <label>Email</label>
                                    <Input placeholder="Email" value={user.email || ''} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                                    <label>Password</label>
                                    <Input placeholder="Password" value={user.password || ''} onChange={(e) => setUser({ ...user, password: e.target.value })} type="password" />
                                    <label>Re-Password</label>
                                    <Input placeholder="Repassword" value={user.repassword || ''} onChange={(e) => setUser({ ...user, repassword: e.target.value })} type="password" />
                                    <label>Phone number</label>
                                    <Input placeholder="N Phone" value={user.phone || ''} onChange={(e) => setUser({ ...user, phone: e.target.value })} type="text" />
                                    <label>Address</label>
                                    <Input placeholder="Address" value={user.address || ''} onChange={(e) => setUser({ ...user, address: e.target.value })} type="text" />
                                    <label style={{ display: 'flex', justifyContent: 'center' }}>{infoText}</label>
                                    <Button block className="btn-round" color="danger" onClick={signupUserHandler}>
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