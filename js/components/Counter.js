/**
 * Created by wangdi on 22/11/16.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Text, View, Button} from 'react-native';

export default class Counter extends Component{
    static propTypes = {
        onPress: PropTypes.object
    };

    render(){
        const {text, onPress} = this.props;
        return(
            <View>
                <Text style={{fontSize: 25, alignSelf: 'center'}}>{text}</Text>
                <Button title="add" onPress={onPress.increment}/>
                <Text> </Text>
                <Button title="subtract" onPress={onPress.decrement}/>
            </View>
        );
    }
}