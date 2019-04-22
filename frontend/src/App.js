import React, {Component} from 'react';
import './App.css';
import Bear from "./pages/song"
import {Provider} from 'react-redux'
import logger from 'redux-logger'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

export const store = createStore(rootReducer, applyMiddleware(logger, thunk))

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Bear />
            </Provider>
        );
    }
}

export default App;
