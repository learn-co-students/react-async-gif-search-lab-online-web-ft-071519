import React from 'react';

export default class GifSearch extends React.Component {
    state = {
        searchTerm: ""
    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.searchTerm)
    }

    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <div>
                    <label>Enter a search term:</label>
                    <input 
                        type="text" 
                        name="search" 
                        onChange={event => this.handleChange(event)}
                        value={this.state.searchTerm} 
                    />
                </div>
                <div>
                    <button type="submit">Find gifs</button>
                </div>
            </form>
        )
    }
} 