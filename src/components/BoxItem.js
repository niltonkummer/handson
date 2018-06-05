import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';

class BoxItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
    return (      
        <View style={styles.container}>
            <Icon name="plus" size={30} color={colors.gray_darker}/>
            <Text style={styles.text}>{this.props.children}</Text>
        </View>      
    );
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        backgroundColor:'white',                
        flexDirection: 'column',
        
    },
    text: {        
        fontSize: 10,
        textAlign: 'center',
        justifyContent: 'center',
        color: colors.gray_darker,
        fontWeight: 'bold',
    }
})

export default BoxItem;
