import React from 'react'
import Loader from 'react-loader-spinner'

const Loading = () => {
    return (
        <div style={{ display: 'flex', backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', top: '0', left: '0', width: '100vw', height: '1000vh', zIndex: '1000' }}>
            <Loader
                style={{ margin: 'auto' }}
                type="Puff"
                color="#6bd098"
                height={100}
                width={100}

            />
        </div>
    )
}

export default Loading
