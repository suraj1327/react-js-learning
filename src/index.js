import React, { Component } from 'react';
import { render } from 'react-dom';

import {Book} from './components/Library/Book';
import LibraryClass from './components/Library/Library';
import {BrowserRouter as Router} from 'react-router-dom';
import App  from '../src/components/index';

var style = {
  'backgroundColor': 'orange',
  'color': 'white'
}

const title = React.createElement(
  'h1',
  { 'id': 'title', className: 'header', style: style },
  'Hello World'
)


const list = React.createElement(
  'ul',
  { 'id': 'title', className: 'header', style: style },
  React.createElement(
    'li',
    {},
    "Item on List"
  )
)

let booksListObj = [{
    title:"New book",
    author:'Me',
    pages: 20
},{
  title:"My book",
  author:'She',
  pages: 50
}];

let hobbyObject = {
  name: 'travel',
  days: 10,
  year: 2019,
  goal: 20
}

const goalPercent = decimal => {
  console.log(decimal);
  return decimal * 100 + '%';
}
const calcGoalPercent = (total, goal) => {
  return goalPercent(total / goal);
}


//parent component


const Library = ({ books }) => {
  return (
    <div>
      <h1>Library data</h1>
      {/*  
   <Book title="NewBook" author="Me" pages={20} />
  <Book title="OtherBook" author="She" pages={30} />
  <Book title="Thirdbook" author="He" pages={50} />  */}
      {books.map(
        (book, i) => <Book key={i} title={book.title} author={book.author} pages={book.pages} />
      )}
    </div>

  )
}

const MyHealthCounter = ({ name, days, year, goal }) => {
  return (    
    <div>
     <section>
       <div>
         <p>Name: {name}</p>
       </div>
       <div>
         <p>Days: {days}</p>
       </div>
       <div>
         <p>Year: {year}</p>
       </div>
       <div>
         <p>Goal: {calcGoalPercent(days,goal)}</p>
       </div>
     </section>
     </div> 

  )
}

/* class MyHealthCounter extends Component {
  goalPercent=decimal=>{
    console.log(decimal);
    return decimal*100 +'%';
  }
  calcGoalPercent=(total,goal)=>{
    return this.goalPercent(total/goal);
  }

  render() {
    const { name, days, year, goal } = this.props; 
    return (
       Same as func component render
    );
  }

} */


class Message extends Component {
  render() {//use two curly braces for telling property with value
    return (
      <div style={style}>
        <h1 id="header-element" style={{ color: this.props.color }}>
          Hello Everyone, {this.props.msg}</h1>
        <p>My name is {this.props.name} . I will check back in {this.props.minutes} minutes</p>
      </div>
    );
  }

}


class FavColorForm extends Component{
  state={value:''}

  newColor=e=>{
    this.setState({
      value:e.target.value
    })
  
  }

  submit=e=>{
      console.log("New color",this.state.value);
      e.preventDefault()

  }

  render(){
    return(
      <form onSubmit={this.submit}>
      <label>Color changer</label>
      <input type="color" onChange={this.newColor}></input>
       <button type="Submit">Submit</button>
      
    </form>
    )
  }

}

render(
  //title,
  //list,

  /*   <div style={style}>  
      <h1 id="header-element">Hello World</h1>
      <p>My name is SS</p>
    </div>, */
  <div>
   <Router>
      <App book={booksListObj}/>
    </Router>
    <Message msg="How are you?" color="blue" name="Suraj Soni" minutes={5} />
    <MyHealthCounter name={hobbyObject.name} days={hobbyObject.days} year={hobbyObject.year} goal={hobbyObject.goal} />
    <Library books={booksListObj}/>
    <LibraryClass/>
    <FavColorForm/>

  </div>,

  document.getElementById('root')
)