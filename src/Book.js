import React, { Component }  from 'react';
class Book extends Component{
  render(){
    return(
        <div className="book">
        <div className="book__row">
          <div className="book__title">
            <a 
              href={this.props.url} 
              target="_blank"
              rel="noopener noreferrer">
                {this.props.title}
              </a>
          </div>
        </div>      
        <div className="bookmark__description">
          {this.props.description}
        </div>
      </div>
    );
  }
}



export default Book;