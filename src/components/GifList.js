import React from "react";


export default class GifList extends React.Component {

    render() {


        return <ul>

            <li><img src={this.props.url} /></li>
        </ul>

    }
}