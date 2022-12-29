import React from 'react';
import {expenses} from "../../data";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../ui/Card";

const Expenses = () => {
    return (
        <Card className={"expenses"}>
            {expenses.map((item) => (
                <ExpenseItem item={item} key={item.id}/>
            ))}
        </Card>
    );
};

export default Expenses;
