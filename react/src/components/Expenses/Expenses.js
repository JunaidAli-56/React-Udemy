import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import './Expenses.css'
const Expenses = (props) => {
    const [filteredYear, setFilterYear] = useState('2022')
    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear)
    }
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    return (
        <>
            <Card className="expenses">
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpenseList items={filteredExpenses} />
            </Card>
        </>
    );
}

export default Expenses;
