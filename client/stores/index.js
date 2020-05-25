import {combineReducers} from 'redux'
import activeUser from './activeUsers'
import Users from './users'

const stores = combineReducers({
    users: Users,
    activeUser: activeUser
})

export default stores