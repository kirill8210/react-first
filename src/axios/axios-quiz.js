import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-3f544.firebaseio.com/'
})