import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
export default function ExpenseItem(props) {
  return <Card> {props.arr.map((data)=>{
     return <div className='expense-item' key={data.id}>
      <div>
      <ExpenseDate data={data.createdDate}/>
      </div>
      <div className='expense-item__description'>
        <h2>{data.title}</h2>
        <div className='expense-item__price' onClick={()=>{alert('이동')}}>이동</div>
      </div>
    </div>
  })}
  </Card>;
}
