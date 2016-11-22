/**
 * Created by wangdi on 21/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/ActionCreator';
import Counter from '../components/Counter';

class MainPage extends Component{

    render(){
        const {number, actions} = this.props;
        return(
            <View>
                <Counter text={number} onPress={actions}/>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.counter.count
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);