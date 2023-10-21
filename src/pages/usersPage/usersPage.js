import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, changeInput, clearInput, deleteAll } from "../../store/usersSlice";
import User from "../../components/User";

function UsersPage() {

    const dispatch = useDispatch()

    const {inputValue, users} = useSelector(state => state.usersReducer)

    const changeInputFunc = (event) => {
        dispatch(changeInput(event.target.value))
    }

    const addUserFunc = () => {
        dispatch(addUser(inputValue))
    }

    const clearInputFunc = () => {
        dispatch(clearInput())
    }

    const deleteAllFunc = () => {
        dispatch(deleteAll())
    }

    return (
        <>
            <input type="text" value={inputValue} placeholder="name" onChange={changeInputFunc} />
            <button onClick={addUserFunc}>add user</button>
            <button onClick={clearInputFunc}>clear</button>
            <button onClick={deleteAllFunc}>delete all</button>
            {users.map(user => <User name={user} />)}
            
        </>
    )
}

export default UsersPage