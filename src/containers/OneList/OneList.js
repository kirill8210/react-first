import React, {Component} from 'react'
import classes from './OneList.css'
import {NavLink} from "react-router-dom";

export default class OneList extends Component{
    renderOne() {
        return [1,2,3].map((one, index) =>{
            return(
                <li
                key={index}
                >
                    <NavLink to={'/one/' + one }>
                        Тест {one}
                    </NavLink>
                </li>
            )
        })
    }
    render() {
        return(
            <div className={classes.OneList}>
                <div>
                    <h1>Список тестов</h1>
                    <ul>
                        {this.renderOne()}
                    </ul>
                </div>
            </div>
        )
    }

}
