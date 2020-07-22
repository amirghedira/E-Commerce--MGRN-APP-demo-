import React from 'react'
import GlobalContext from 'Context/GlobalContext'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo'


const FETCH_CONNECTEDUSER_QUERY = gql`
query{
  getConnectedUser{
    user{
      _id
      username
      email
      phone
      address
    }   
  }
}
`;

const AppContext = (props) => {

    const [token, setToken] = React.useState(localStorage.getItem('token'))
    const { data, loading } = useQuery(FETCH_CONNECTEDUSER_QUERY)
    const [orders, setOrders] = React.useState([])
    const [user, setUser] = React.useState(null)


    React.useEffect(() => {
        if (!loading) {
            setUser(data.getConnectedUser.user)
        }

    }, [loading, token])

    const disconnectHandler = () => {

        setUser(null)
        setToken(null)
        localStorage.removeItem('token')

    }

    return (
        <GlobalContext.Provider value={{
            token: token,
            setToken: setToken,
            user: user,
            setUser: setUser,
            disconnectUser: disconnectHandler,
            setOrders: setOrders,
            orders: orders
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}



export default AppContext