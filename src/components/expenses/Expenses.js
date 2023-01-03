import React, {useState} from 'react';
import {expensesList} from "../../data";
import "./Expenses.css"
import Card from "../ui/Card";
import NewExpense from "../newexpense/NewExpense";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = () => {


    const [expenses, setExpenses] = useState(expensesList);

    const [filteredYear, setFilteredYear] = useState('2020');

    const addExpenseHandler = expense => {
        setExpenses(prevState => {
            return [expense, ...prevState]

        })
    }

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className={"expenses"}>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
};

export default Expenses;
