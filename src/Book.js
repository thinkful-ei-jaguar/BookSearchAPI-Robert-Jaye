import React, { Component }  from 'react';
class Book extends Component{
  render(){
      console.log(this.props)
    return(
        <div className="book">
            <img src={this.props.volumeInfo.imageLinks.thumbnail}></img> 
            <h1>{this.props.volumeInfo.title}</h1>
            <h2>{this.props.volumeInfo.authors[0]}</h2>
            <h3>{this.props.saleInfo.saleability == "NOT_FOR_SALE"|| this.props.saleInfo.saleability =="FREE" ? "0" : this.props.saleInfo.retailPrice.amount}</h3>
            <p>{this.props.volumeInfo.description}</p>
      </div>
    );
  }
}

export default Book;