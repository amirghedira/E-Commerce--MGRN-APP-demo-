import React from 'react'
import { Container } from 'reactstrap'
import ProfileField from './ProfileField/ProfileField'
import gql from 'graphql-tag'
import { useMutation } from 'react-apollo';
import GlobalContext from '../../Context/GlobalContext'
import Loading from 'components/Loading/Loading';

const UPDATE_USERINFO_MUTATION = gql`

    mutation($username:String!,$email:String!,$address:String!,$phone:String!){
        updateUser(updateUserInput:{
            username:$username
            email:$email
            phone:$phone
            address:$address
        }){
            user{
              _id
            }
        }
    }
`;

const Profile = () => {

    const context = React.useContext(GlobalContext)
    const [userInfo, setUserInfo] = React.useState(null)

    React.useEffect(() => {
        if (context.token && context.user)
            setUserInfo(context.user)

    }, [context.token, context.user])
    const [updateUserInfo] = useMutation(UPDATE_USERINFO_MUTATION, {
        onCompleted: data => {
            console.log(data)
        },
        onError: err => {
            console.log(err)
        }
    })

    const updateUserNameHandler = (newUserInfos) => {
        updateUserInfo({ variables: { ...userInfo, username: newUserInfos.username } })
        setUserInfo({ ...userInfo, username: newUserInfos.username })

    }
    const updateEmailHandler = (newUserInfos) => {
        updateUserInfo({ variables: { ...userInfo, email: newUserInfos.email } })
        setUserInfo({ ...userInfo, email: newUserInfos.email })

    }
    const updateAddressHandler = (newUserInfos) => {
        updateUserInfo({ variables: { ...userInfo, address: newUserInfos.address } })
        setUserInfo({ ...userInfo, address: newUserInfos.address })

    }
    const updatePasswordHandler = (newUserInfos) => {
        // updateUserInfo({ variables: { updateUserInput: { ...userInfo , } } })
    }
    const updatePhoneHandler = (newUserInfos) => {
        updateUserInfo({ variables: { ...userInfo, phone: newUserInfos.phone } })
        setUserInfo({ ...userInfo, phone: newUserInfos.phone })

    }
    if (!userInfo)
        return <Loading />
    return (
        <div>
            <Container>
                <h2>Update Profile</h2>
                <div style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                    <ProfileField id="username" title="Username" value={userInfo.username} type="text" updateUser={updateUserNameHandler} />
                    <ProfileField id="email" title="Email" value={userInfo.email} type="text" updateUser={updateEmailHandler} />
                    <ProfileField id="password" title="Password" password value="*******" type='password' updateUser={updatePasswordHandler} />
                    <ProfileField id="phone" title="Phone Number" value={userInfo.phone} type='number' updateUser={updatePhoneHandler} />
                    <ProfileField id="address" title="address" value={userInfo.address} type='textarea' updateUser={updateAddressHandler} />
                </div>

            </Container>

        </div>
    )
}

export default Profile
