import React, { Component }  from 'react';
import Book from './Book';

class BookList extends Component {
  render(){
    const books = this
          .props
          .books
          .map((books, i) => <Book { ...books } key={i}/>);
    return(
      <div className="bookmarkList">
        {books}
      </div>
    );
  }
}

export default BookList;
