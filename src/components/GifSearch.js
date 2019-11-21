import React from 'react';

export default class GifSearch extends React.Component {
    constructor() {
        super()
        this.state = {
            query: ''
        }
    }
  
    handleChange = e => {
        
    }
    

    render() {
        return(
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" onChange={e => this.handleChange(e)} value={this.state.query}/>
          <input type="submit"/>
        </form>
        )
    }
}