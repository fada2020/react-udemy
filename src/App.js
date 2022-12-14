import './App.css';
import {useState, useEffect} from 'react';
import ExpenseItem from './components/expenses/ExpenseItem.js';
import NewExpense from './components/newExpense/NewExpense.js';
function App() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    fetch(`http://혁주.kro.kr/open/api/v1/all`)
      .then(res => res.json())
      .then(res => {
        setArr(res);
    });      
  }, []);

  return (
    <div className="App">
     <NewExpense/>
      <ExpenseItem arr={arr}/>
    </div>
  );
}

export default App;
