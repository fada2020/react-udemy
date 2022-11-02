import React from 'react';
import  "./NewExpenseForm.css";
const NewExpenseForm = () =>{
    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label for="">Title</label>
                <input type="text" name="" value=""/>
            </div>  
            <div className='new-expense__control'>
                <label for="">Amount</label>
                <input type="number" name="" min="0.01" step="0.01" value=""/>
            </div>
            <div className='new-expense__control'>
                <label for="">Date</label>
                <input type="date" name="" min="2019-01-01" max="2022-11-02" value=""/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
        </div>
    </form>

}

export default NewExpenseForm;