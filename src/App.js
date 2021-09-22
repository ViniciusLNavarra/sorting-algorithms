import logo from './logo.svg';
import './App.css';
import React from 'react';

function bubbleSort(sortArray) {
  // Array recieved is a String
  sortArray = sortArray.split(',').map(Number)
  for (let i = 0; i < sortArray.length-1; i++) {
    for (let j = 0; j < sortArray.length-i-1; j++) {
      if (sortArray[j] > sortArray[j+1]){
        let temp = sortArray[j];
        sortArray[j] = sortArray[j+1];
        sortArray[j+1] = temp;
      }
    } 
  }
  return sortArray;
}

function Button(props){
  return React.createElement('button',{onClick:props.handleClick},props.name)
}

class App extends React.Component {
  state={
    array: ([53, 88, 10, 2, 99]).toString()
  }

  handleSort = () => {
    this.setState({
      array: bubbleSort(this.state.array).toString()
    })
  }
  
  render(){
    return React.createElement('div',{className:"App"},
      React.createElement('header',{className:"App-header"},
        React.createElement('p', null, this.state.array),
        React.createElement(Button,{handleClick:this.handleSort,name:'Sort'},null)
      )
    )
  }
}

export default App;
