import React, {Component} from 'react';

class GifSearch extends Component {

    state = {
        search: ''
    }

    handleSearchChange = event => {
        this.setState({
            search: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={event => this.props.handleSubmit(event)}>
                <input type={'text'} onChange={event => this.handleSearchChange(event)} name={'search'} value={this.state.search}/>
                <input type={'submit'}/>
            </form>

        );
    }
}

export default GifSearch;