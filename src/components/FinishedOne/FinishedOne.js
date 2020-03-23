import React from "react"
import classes from './FinishedOne.css'

const FinishedOne = props =>{
    return(
        <div className={classes.FinishedOne}>
            <ul>
                <li>
                    <strong>1. </strong>
                    How are you
                    <i className={'fa fa-times ' + classes.error }/>
                </li>
                <li>
                    <strong>1. </strong>
                    How are you
                    <i className={'fa fa-check ' + classes.success }/>
                </li>
            </ul>
            <p>Правильно 4 из 10</p>
            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
}
export default FinishedOne