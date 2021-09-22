import logo from './logo.svg';
import './App.css';

function App() {
  let array = [53, 88, 10, 2, 99];
  function bubbleSort(sortArray) {
    for (let i = 0; i < sortArray.length-1; i++) {
      for (let j = 0; j < sortArray.length-i-1; j++) {
        if (sortArray[j] > sortArray[j+1]){
          let temp = sortArray[j];
          sortArray[j] = sortArray[j+1];
          sortArray[j+1] = temp;
        }
      } 
    }
    setArray(sortArray);
  }
  function getArray() {
    return array;
  }
  function setArray(newArr) {
    array = newArr;
  }
  return (
    <div className="App">
      <header className="App-header"> 
        <button onClick={()=>bubbleSort(array)}>Click me!</button>
        <h2>{getArray().toString()}</h2>
      </header>
    </div>
  );
}

export default App;
