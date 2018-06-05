import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import SliderSelector from '../../components/SliderSelector';
import colors from '../../styles/colors';


export default class CriarTarefaPage extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.description }>
            <Text>Escolha ou crie uma tarefa</Text>
        </View>
        <View style={ styles.listContainer }>
                <SliderSelector />
        </View>
        <View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15, 
        backgroundColor: 'white',
        flex:1,
    },
    description: {
        paddingHorizontal:15,
    },
    listContainer: {
        marginTop: 15,
        marginBottom: 15,        
        backgroundColor: colors.gray_lighter,        
    }
})