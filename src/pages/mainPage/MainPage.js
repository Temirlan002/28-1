import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeInputAction, changeTitle, changeTitleWithParams } from "../../store/titleSlice"



function MainPage() {
    const dispatch = useDispatch()

    const {title, inputValue} = useSelector(state => state.titleReducer)


    const withParams = () => {
        dispatch(changeTitleWithParams(inputValue))
    }

    const changeInput = (event) => {
        dispatch(changeInputAction(event.target.value))
    }
    

    return (
        <div>
            <h1>{title}</h1>
            <input value={inputValue} onChange={changeInput} />
            <button onClick={() => dispatch(changeTitle())}>change title</button>
            <button onClick={withParams}>with params</button>
        </div>
    )
}

export default MainPage