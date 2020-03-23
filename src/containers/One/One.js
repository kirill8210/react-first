import React, {Component} from "react"
import classes from './One.css'
import ActiveOne from "../../components/ActiveOne/ActiveOne";

class One extends Component{
    state = {
        one: [
            {
                answers:[
                    {text: 'Вопрос 1'},
                    {text: 'Вопрос 2'},
                    {text: 'Вопрос 3'},
                    {text: 'Вопрос 4'}
                ]
            }
        ]
    }
    render() {
        return(
            <div className={classes.One}>
                <div className={classes.OneWrapper}>
                    <h1>One</h1>
                    <ActiveOne
                        answers={this.state.one[0].answers}
                    />
                </div>
            </div>
        )
    }
}

export default One