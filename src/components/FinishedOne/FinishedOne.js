import React from "react"
import classes from './FinishedOne.css'

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
                <button onClick={props.onRetry}>Повторить</button>
            </div>
        </div>
    )
}
export default FinishedOne