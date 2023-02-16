import React, { useState } from "react";
import style from './AddUser.module.css'
import Card from "../UI/Card";
import Button from "../UI/Button";
const AddUser = (props) => {
    const [enterdUserName, setEnterdUserName] = useState('')
    const [enterdUserAge, setEnteredUserAge] = useState('')
    const addUserHandler = (e) => {
        e.preventDefault();
        // Validiation 
        if (enterdUserName.trim().length === 0 || enterdUserAge.trim().length === 0) {
            const errorobj = {
                title: 'Error',
                message: 'Please fill in all fields'
            }
            props.getError(errorobj);
            return;
        }
        // '+'  means convert string to number
        if (+enterdUserAge.length < 1) {
            const errorobj = {
                title: 'Error',
                message: 'Age must be greater than 0'
            }
            props.getError(errorobj);

            return;
        }
        console.log(enterdUserName, enterdUserAge)
        const addUserValues = {
            name: enterdUserName,
            age: enterdUserAge,
            id: Math.random().toLocaleString(),
        }
        setEnterdUserName('')
        setEnteredUserAge('')
        console.log(addUserValues)
        props.getData(addUserValues)
    }
    const userNameChangeHandler = (e) => {
        setEnterdUserName(e.target.value)
    }
    const userAgeChangeHandler = (e) => {
        setEnteredUserAge(e.target.value)
    }
    return (
        <>
            <Card className={style.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">User Input</label>
                    <input id="username" type="text"
                        value={enterdUserName}
                        onChange={userNameChangeHandler} />

                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" min='1'
                        value={enterdUserAge}
                        onChange={userAgeChangeHandler} />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>

        </>
    );
}

export default AddUser;
