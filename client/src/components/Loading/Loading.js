import React from 'react'
import Loader from 'react-loader-spinner'

const Loading = () => {
    return (
        <div style={{ display: 'flex', backgroundColor: 'rgba(0,0,0,0.4)', position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh', zIndex: '1000' }}>
            <Loader
                style={{ margin: 'auto', marginTop: '400px' }}
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}

            />
        </div>
    )
}

export default Loading
