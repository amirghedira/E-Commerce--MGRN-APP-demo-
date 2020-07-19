import React from 'react'
import GlobalContext from 'Context/GlobalContext'
import gql from 'graphql-tag'
import { useLazyQuery } from 'react-apollo';
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
    }
    
  }
}
`;
const AppContext = (props) => {

    const [products, setProducts] = React.useState([])
    const [token, setToken] = React.useState(null)

    const [loginUser, { loading, data }] = useLazyQuery(LOGIN_USER_QUERY)

    const userLoginHandler = async (username, password) => {
        await loginUser({
            variables: {
                username,
                password
            },
        })
        console.log(data)

    }

    return (
        <GlobalContext.Provider value={{
            userLogin: userLoginHandler
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}



export default AppContext