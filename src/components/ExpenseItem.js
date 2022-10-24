import './ExpenseItem.css'

export default function ExpenseItem(props) {
  console.log(props);

  return <> {props.arr.map((data)=>{
     return <div className='expense-item'>
      <div>{data.date}</div>
      <div className='expense-item__description'>
        <h2>{data.title}</h2>
        <div className='expense-item__price'>${data.amount}</div>
      </div>
    </div>
  })}
  </>;
}
