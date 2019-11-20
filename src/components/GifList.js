import React from 'react'

export default class GifList extends React.Component {
    render() {
        return(
            <ul>
                <li><img src={this.props.gifArray[1]} /></li>
                <li><img src={this.props.gifArray[2]} /></li>
                <li><img src={this.props.gifArray[3]} /></li>
            </ul>
        )
    }
}