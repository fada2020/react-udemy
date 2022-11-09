import React from 'react';
import  "./NewExpenseForm.css";
const NewExpenseForm = () =>{
    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label htmlFor="">Title</label>
                <input type="text" name="" />
            </div>  
            <div className='new-expense__control'>
                <label htmlFor="">Amount</label>
                <input type="number" name="" min="0.01" step="0.01" />
            </div>
            <div className='new-expense__control'>
                <label htmlFor="">Date</label>
                <input type="date" name="" min="2019-01-01" max="2022-11-02" />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
        </div>
    </form>

}

export default NewExpenseForm;