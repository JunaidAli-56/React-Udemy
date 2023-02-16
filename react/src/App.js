import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle"
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const Dummy_Data = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.32,
    date: new Date(2019, 7, 14)
  },
  {
    id: 'e2',
    title: 'Car Insurance',
    amount: 92.56,
    date: new Date(2019, 5, 4)
  },
  {
    id: 'e3',
    title: 'Tv Billing',
    amount: 89.56,
    date: new Date(2021, 7, 23)
  },
  {
    id: 'e4',
    title: 'Gas Bill',
    amount: 70.56,
    date: new Date(2022, 10, 29)
  },
  {
    id: 'e5',
    title: 'Wooden Desk',
    amount: 459.32,
    date: new Date(2022, 5, 18)
  },
]
const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Data)

  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses])
    setExpenses((preExpense) => {
      return [expense, ...preExpense]
    })
  }
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;