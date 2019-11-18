import React from 'react';

export default class GifList extends React.Component {
    render() {
        return (this.props.gifArray.length > 0) ? (
            <ul>
                <li><img src={this.props.gifArray[0]} alt="gif"></img></li>
                <li><img src={this.props.gifArray[1]} alt="gif"></img></li>
                <li><img src={this.props.gifArray[2]} alt="gif"></img></li>
            </ul>
        ) : null
    }
}