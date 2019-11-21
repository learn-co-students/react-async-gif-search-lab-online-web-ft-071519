import React from 'react';

export default class GifSearch extends React.Component {
    constructor() {
        super()
        this.state = {
            query: ''
        }
    }
  
    handleChange = e => {
        this.setState({
            query: e.target.value
        })
    }
    

    render() {
        return(
        <form onSubmit={e => this.props.handleSubmit(e)}>
          <input type="text" onChange={e => this.handleChange(e)} value={this.state.query}/>
          <input type="submit"/>
        </form>
        )
    }
}