import React, { Component } from 'react';

class Filter extends Component {
  render(){
    return(
      <div>
        <form onSubmit={this.props.handleSubmitPrint}> 
          <p>Filter Type:</p>
          <select name="printtype" size="1" onChange={this.props.handleFilterPrint}>
            <option value="">All</option>
            <option value="books">book</option>
            <option value="magazines">magazine</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
        <form onSubmit={this.props.handleSubmitBook}>
          <p>book Type:</p>
          <select name="booktype" size="1" onChange={e => this.props.handleFilterBook(e.target.value)}>
            <option value="">No Filter</option>
            <option value="ebooks">ebook</option>
            <option value="free-ebooks">free</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Filter;
