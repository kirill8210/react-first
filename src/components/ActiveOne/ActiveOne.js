import React, {Component} from "react"
import classes from './ActiveOne.css'
import AnswersList from "./AnswersList/AnswersList";

const ActiveOne = props => (
    <div className={classes.ActiveOne}>
        <p className={classes.Question}>
            <span>
                <strong>{props.answerNumber}</strong>&nbsp;
                {props.question}
            </span>
            <small>{props.answerNumber} из {props.oneLength}</small>
        </p>
        <AnswersList
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
)

export default ActiveOne