/**
 * Created by wangdi on 21/11/16.
 */
'use strict';

import { store } from './store/index';
import { Provider } from 'react-redux';
import React from 'react';
import App from './containers/App';

export default class Root extends React.Component{
    
    render(){
        return(
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}