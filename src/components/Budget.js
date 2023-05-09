import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, remaining, expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const setBudget = (newBudget) => {
        if (newBudget > 20000) {
            alert("The value cannot exceed remaining funds  £" + remaining);
            return;
        } else if (newBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
                <input
                style={{width: 70 + '%'}}
                required='required'
                type='number'
                id='budget'
                step='10'
                value={budget}
                onChange={(event) => setBudget(event.target.value)}>
            </input></span>
        </div>
    );
};
export default Budget;