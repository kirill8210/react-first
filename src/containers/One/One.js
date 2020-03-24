import React, {Component} from "react"
import classes from './One.css'
import ActiveOne from "../../components/ActiveOne/ActiveOne"
import FinishedOne from "../../components/FinishedOne/FinishedOne";

class One extends Component{
    state = {
        results: {}, // {[id]: 'success' 'error}
        isFinished: false,
        activeQuestion: 0,
        answerState: null, // {[id]: 'success' 'error}
        one: [
            {
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
                id:1,
                answers:[
                    {text: 'Чёрный', id:1},
                    {text: 'Синий', id:2},
                    {text: 'Красный', id:3},
                    {text: 'Зеленый', id:4}
                ]
            },
            {
                question: 'Какой сейчас год?',
                rightAnswerId: 3,
                id: 3,
                answers:[
                    {text: '2018', id:1},
                    {text: '2019', id:2},
                    {text: '2020', id:3},
                    {text: '2021', id:4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) =>{
        if (this.state.answerState){
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success'){
                return
            }
        }
        const question = this.state.one[this.state.activeQuestion]
        const results = this.state.results
        if (question.rightAnswerId === answerId){
            if (!results[question.id]){
                results[question.id] = 'success'
            }
            this.setState({
                answerState: {[answerId]: 'success'},
                results
            })
            const timeout = window.setTimeout(() => {
                if (this.isOneFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            })
        }

    }
    isOneFinished(){
        return this.state.activeQuestion + 1 === this.state.one.length
    }
    retryHandler= () =>{
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    render() {
        return(
            <div className={classes.One}>
                <div className={classes.OneWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    {
                        this.state.isFinished
                        ?   <FinishedOne
                                results={this.state.results}
                                one={this.state.one}
                                onRetry={this.retryHandler}
                            />
                        :   <ActiveOne
                                answers={this.state.one[this.state.activeQuestion].answers}
                                question={this.state.one[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                oneLength={this.state.one.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }

                </div>
            </div>
        )
    }
}

export default One