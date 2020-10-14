import React from 'react';
import { render } from 'react-dom';
import { Book } from './../Library/Book';
import PropTypes from 'prop-types';

class Cart extends React.Component{

 state={open:true,loading:false,data:[]}
 static defaultProps = {
books:[{
   orderId:123,
   productName:456,
   productType:"Car"
 }]};

 toggleStateValues=()=>{
     this.setState(prevState=>({
        open:!prevState.open
     }))
 }
 componentDidMount(){
     this.state.loading=false;
     fetch('https://jsonplaceholder.typicode.com/posts').then(
       data=>data.json()).
       then((data)=>{
       this.setState({data:data,loading:false})
     })
 }

 render(){
const {books}= this.props;
     return (
         <div>
             <h1>{this.state.open?"Library is open":"Library is closed"}</h1>
             <button onClick={this.toggleStateValues}>Change</button>
           {
               this.state.loading?"Loading..":
               this.state.data.map((post)=>{
                return(
                    <div key={post.id}>
                        {post.title}
                        </div>
                )
               })
           }

           {
           books.map((book,newj)=><Book key={newj} title={book.title}/>
               )}
         </div>
     )
 }

}


Cart.propTypes={
   books:PropTypes.array
}
export default Cart;