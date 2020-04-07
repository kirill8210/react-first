import React, {Component} from 'react'
import classes from './OneList.css'
import {NavLink} from "react-router-dom"
import Loader from "../../components/UI/Loader/Loader"
import axios from '../../axios/axios-quiz'

export default class OneList extends Component{

    state= {
        quizes: [],
        loading: true
    }

    renderOne() {
        return this.state.quizes.map(one =>{
            return(
                <li
                key={one.id}
                >
                    <NavLink to={'/one/' + one.id }>
                        {one.name}
                    </NavLink>
                </li>
            )
        })
    }

    // componentDidMount() {
    //     axios.get('https://react-quiz-3f544.firebaseio.com/quiz.json').then(response =>{
    //         console.log(response)
    //     })
    // }

    async componentDidMount() {
        try{
            const response = await axios.get('/quizes.json')
            const quizes = []
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест №${index + 1}`
                })
            })
            this.setState({
                quizes, loading: false
            })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return(
            <div className={classes.OneList}>
                <div>
                    <h1>Список тестов</h1>
                    { this.state.loading
                    ? <Loader/>
                    : <ul>
                        {this.renderOne()}
                    </ul>
                    }
                </div>
            </div>
        )
    }

}
