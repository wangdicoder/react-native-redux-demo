/**
 * Created by wangdi on 22/11/16.
 */
'use strict';

import React from 'react';
import { Navigator, View, Text } from 'react-native';
import MainPage from './MainPage';

export default class App extends React.Component{

    render(){
        return(
            <Navigator
                initialRoute={{component: MainPage}}
                renderScene={(route, navigator) => {
                    return <route.component navigator={navigator} {...route.args}/>
                }}
            />
        );
    }
}