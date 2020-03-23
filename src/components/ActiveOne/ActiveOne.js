import React, {Component} from "react"
import classes from './ActiveOne.css'
import AnswersList from "./AnswersList/AnswersList";

const ActiveOne = props => (
    <div className={classes.ActiveOne}>
        <p className={classes.Question}>
            <span>
                <strong>2.</strong>&nbsp;
                Как дела?
            </span>
            <small>4 из 12</small>
        </p>
        <AnswersList
            answers={props.answers}
        />
    </div>
)

export default ActiveOne