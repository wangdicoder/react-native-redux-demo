/**
 * Created by wangdi on 21/11/16.
 */
'use strict';

import { store } from './store/index';
import { Provider } from 'react-redux';
import React from 'react';
import MainPage from './containers/MainPage';
import { Navigator } from 'react-native';

export default class App extends React.Component{
    
    render(){
        return(
            <Provider store={store}>
                <MainPage />
            </Provider>
        );
    }
}