import React, {useState} from 'react';
import {expensesList} from "../../data";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../ui/Card";
import NewExpense from "../newexpense/NewExpense";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = () => {


    const [expenses, setExpenses] = useState(expensesList);

    const [filteredYear, setFilteredYear] = useState('2020');

    const addExpenseHandler = expense => {
        console.log(expense)
    }

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    return (
        <Card className={"expenses"}>

            <NewExpense onAddExpense={addExpenseHandler} />

            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {expenses.map((item) => (
                <ExpenseItem item={item} key={item.id}/>
            ))}
        </Card>
    );
};

export default Expenses;
