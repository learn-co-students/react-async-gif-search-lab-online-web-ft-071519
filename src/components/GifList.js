import React from 'react';

const GifList = props => {

    return(
        <ul>
            {props.gifs.map(gifData => {
                return <li><img src={gifData.url}/></li>
            })}
        </ul>
    )
}

export default GifList;