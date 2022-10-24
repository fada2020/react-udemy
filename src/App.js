import './App.css';
import {useState} from 'react';
import ExpenseItem from './components/ExpenseItem'
function App() {
  const [arr, setArr] = useState([ {id:'el1', title: 'ABC', amount: 2000, date:'2022-01-14'},
  {id:'el2', title: 'DEF', amount: 3000, date:'2022-01-15'},
  {id:'el3', title: 'GHI', amount: 4000, date:'2022-01-16'},
  {id:'el4', title: 'JKL', amount: 5000, date:'2022-01-17'}]);

  return (
    <div className="App">
     <h2>Let's just started.</h2>
      <ExpenseItem arr={arr}/>
    </div>
  );
}

export default App;
