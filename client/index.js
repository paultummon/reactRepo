
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import stores from './stores'
const store = createStore(stores)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"))