import React, {Component} from 'react';

class GifList extends Component {
    render() {
        return (
            <ul>
                {this.props.gifs.map(g => (
                    <li>
                        <img src={g} alt={'gif'}/>
                    </li>
                ))}
            </ul>
        );
    }
}

export default GifList;