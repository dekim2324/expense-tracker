import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const amount = transactions.map(transactions => transactions.amount);
    const income = amount
        .filter(amount => amount > 0)
        .reduce((accum, cur) => accum + cur)
        .toFixed(2);
    const expense = (amount
        .filter(amount => amount < 0)
        .reduce((accum, cur) => accum + cur) * -1)
        .toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{expense}</p>
            </div>
        </div>
    )
}
