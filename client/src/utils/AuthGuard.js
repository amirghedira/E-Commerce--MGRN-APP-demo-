import GlobalContext from '../Context/GlobalContext'
import React from 'react'
import { Redirect } from 'react-router-dom'



const AuthGuard = (props) => {
    const context = React.useContext(GlobalContext)
    if (context.token !== null)
        return props.children

    return <Redirect to="/login" />
}


export default AuthGuard