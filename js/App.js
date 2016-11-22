/**
 * Created by wangdi on 21/11/16.
 */
'use strict';

import { store } from './store/index';
import { Provider } from 'react-redux';
import React from 'react';
import { Navigator } from 'react-native';
import MainPage from './containers/MainPage';

export default class App extends React.Component{
    
    render(){
        return(
            <Provider store={store}>
                <Navigator
                    initialRoute={{component: MainPage}}
                    renderScene={(route, navigator) => {
                        return <route.component navigator={navigator} {...route.args}/>
                    }}
                />
            </Provider>
        );
    }
}