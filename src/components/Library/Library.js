import React, { Component } from 'react';
import {Book} from './Book';
import {Hiring} from './Hiring';
import {NotHiring} from './NotHiring';
import PropTypes from 'prop-types';

class LibraryClass extends Component{
    static defaultProps = {
      books:[{
        title:"Sample book",
        author:'She',
        pages: 50}]
    }
    state = {open:false,freeBookmark:true,hiring:false,data:[],loading:false}
  /*   constructor(props){
      super(props)
      this.state = {
        open:true
      }
      this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
    } */
     componentDidMount(){
       this.setState({loading:true});
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then(data=>data.json())
       .then(data=>this.setState({data,loading:false}));
       console.log("component is mounted");
     }
  
     componentDidUpdate(){
      console.log("component is updated");
    }
     toggleOpenClosed =()=>{
       this.setState(prevState=>({
         open:!prevState.open
       }))
     }
  
    render(){
      const {books} = this.props
      return (
        <div>
          <h1>Library is {this.state.open?'open':'closed'}</h1>
      <h2>{this.state.hiring? <Hiring/>: <NotHiring/>}</h2>
           {this.state.loading?"Loading..":this.state.data.map(
             (post)=>{
             return (
               <div key={post.id}>
                 
                {/* <p height={100}>{post.id}</p>
                <p height={100}>{post.userId}</p>
                <p height={100}>{post.body}</p> */}
  
               </div>
             )
           })}
          <button onClick={this.toggleOpenClosed}>Change</button>
          {books.map(
            (book, i) => <Book key={i} title={book.title} author={book.author} pages={book.pages} freeBookmark={this.state.freeBookmark} />
          )}
         
        </div>
    
      )
    }
  }

  LibraryClass.propTypes= {
    books:PropTypes.array
  }
  
  Book.propTypes= {
    title:PropTypes.string,
    author:PropTypes.string,
    pages:PropTypes.number,
    freeBookmark:PropTypes.bool
  }
  


  export default LibraryClass