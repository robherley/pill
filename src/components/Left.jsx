import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class Left extends Component {
    render() {
        return (
            <div style={{borderTopLeftRadius: '50px' }}>
                <ReactPlayer 
                    url='https://www.youtube.com/watch?v=feA64wXhbjo' 
                    playing 
                    width={320}
                    height={180}
                    volume={0}
                    style={{borderRadius: '10px', overflow: 'hidden', 'pointerEvents': 'none'}}
                />
            </div>
        );
    }
}

export default Left;