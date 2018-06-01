import React, { Component } from 'react';
import {  View, Text, TextInput, StyleSheet } from 'react-native';

const FormRow = ({ style = null, children, label = '' }) => {      
    const renderLabel = () => {
        if (label != '') 
            return <Text style={{marginLeft:4}}>{ label }</Text>
        return null
    }
    return (
        <View style={[styles.container, style]}>          
            { renderLabel() }
            { children }
        </View>
    );  
}

const styles = StyleSheet.create({
    container: {
        marginTop:20
    }
})


export default FormRow;