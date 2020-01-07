import React, { Component } from 'react';

class Filter extends Component {
  render(){
    return(
      <div>
        <p>Filter Type:</p>
        <select name="printtype" size="1">
          <option value="all">All</option>
          <option value="book">book</option>
          <option value="magazine">magazine</option>
        </select>
        <p>book Type:</p>
        <select name="booktype" size="1">
          <option value="nofilter">No Filter</option>
          <option value="ebook">ebook</option>
          <option value="free">free</option>
        </select>
      </div>
    );
  }
}

export default Filter;
