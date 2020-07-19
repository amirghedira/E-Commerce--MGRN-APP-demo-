import React from 'react'
import { Container } from 'reactstrap'
import ProfileField from './ProfileField/ProfileField'
function Profile() {

    return (
        <div>
            <Container>
                <h2>Update Profile</h2>
                <div style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                    <ProfileField title="Username" value="amirgh" type="text" />
                    <ProfileField title="Email" value="exo.csbd@gmail.com" type="text" />
                    <ProfileField title="Password" password value="*******" type='password' />
                    <ProfileField title="Phone Number" value="55901171" type='number' />
                    <ProfileField title="address" value="skanes" type='textarea' />
                </div>

            </Container>

        </div>
    )
}

export default Profile
