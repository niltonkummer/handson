import React, { Component } from 'react';
import {  View, Text, Image, StyleSheet, Button } from 'react-native';



export default class UserContext extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image />
            <Text> teste</Text>
        </View>
        <View style={styles.buttonsContainer}>
            <View  style={styles.button} >
                <Button color='#FF0000' title='Pais' />
            </View>
            <View style={styles.button}>
                <Button  title='Filhos' />
            </View>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex:1
    },
    logoContainer: {
        flex:1,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonsContainer: {
        flex:3,
        justifyContent: 'center',
        paddingHorizontal: 100,
    },
    button: {        
        marginTop:30,        
    }
})