import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';

class BoxItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    renderIcon() {
        if (this.props.icon != '') return <Icon name={this.props.icon} size={30} color={colors.gray_darker}/>
        return null
    }
    render() {
        return (      
            <View style={styles.container}>
                { this.renderIcon() }
                <Text style={styles.text}>{this.props.children}</Text>
            </View>      
        );
  }
}

const styles = StyleSheet.create({
    
    row: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        width: 110,
        height: 150,
        marginHorizontal: 10,
        borderRadius: 4,
    
    
        ...Platform.select({
          ios: {
            shadowColor: 'rgba(0,0,0,0.2)',
            shadowOpacity: 1,
            shadowOffset: {height: 2, width: 2},
            shadowRadius: 2,
          },
    
          android: {
            elevation: 4,
            marginHorizontal: 30,
          },
        })
      },
    container: {
        
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        width: 80,
        height: 80,
        marginHorizontal: 10,
        //borderRadius: 4,
    
    
        ...Platform.select({
          ios: {
            shadowColor: 'rgba(0,0,0,0.2)',
            shadowOpacity: 1,
            shadowOffset: {height: 2, width: 2},
            shadowRadius: 2,
          },
    
          android: {
            elevation: 2,
            marginHorizontal: 10,
          },
        })
        
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
