import React from "react"
import classes from './FinishedOne.css'
import Button from "../UI/Button/Button"
import {Link} from 'react-router-dom'

const FinishedOne = props =>{
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success'){
            total++
        }
        return total
    }, 0)
    return(
        <div className={classes.FinishedOne}>
            <ul>
                {props.one.map((oneItem, index) =>{
                    const cls = [
                        'fa',
                        props.results[oneItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.results[oneItem.id]]
                    ]
                    return(
                        <li
                            key={index}
                        >
                            <strong>{index + 1}</strong>.&nbsp;
                            {oneItem.question}
                            <i className={cls.join(' ')} />
                        </li>
                    )
                }) }
            </ul>
            <p>Правильно {successCount} из {props.one.length}</p>
            <div>
                <Button onClick={props.onRetry} type="primary">Повторить</Button>
                <Link to="/">
                    <Button type="success">Перейти в список тестов</Button>
                </Link>
            </div>

        </div>
    )
}
export default FinishedOne