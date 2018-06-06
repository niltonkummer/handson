import React, { Component } from 'react';
import { Dimensions, Text, View, FlatList, StyleSheet, Platform } from 'react-native';

import SortableList from 'react-native-sortable-list';



import BoxItem from './BoxItem';

const window = Dimensions.get('window');

const data = [
    {
      icon: 'plus',
      text: 'Criar Tarefa',
    },
    {
      icon: 'word',
      text: 'Tema de casa',
    },
    {
      icon: 'bed',
      text: 'Ir Dormir',
    },
    {
      icon: 'https://placekitten.com/200/203',
      text: 'Oscar',
    },
    {
      icon: 'https://placekitten.com/200/204',
      text: 'Dusty',
    },
    {
      icon: 'https://placekitten.com/200/205',
      text: 'Spooky',
    },
    {
      icon: 'https://placekitten.com/200/210',
      text: 'Kiki',
    },
    {
      icon: 'https://placekitten.com/200/215',
      text: 'Smokey',
    },
    {
      icon: 'https://placekitten.com/200/220',
      text: 'Gizmo',
    },
    {
      icon: 'https://placekitten.com/220/239',
      text: 'Kitty mam ammamms',
    },
];

class SliderSelector extends Component {
    _renderRow = ({data, active}) => {
        return <BoxItem icon={data.icon}>{data.text}</BoxItem>
    }
    render() {        
        return (            
            <SortableList
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.list}
            contentContainerStyle={styles.contentContainer}
            data={data}
            renderRow={this._renderRow} />

        );
    }
}

const styles = StyleSheet.create({
    list: {
        height: 100,
        width: window.width,
    },
    contentContainer:{
        ...Platform.select({
            ios: {
              paddingVertical: 30,
            },
      
            android: {
              paddingVertical: 10,
            }
          })
    }
})

export default SliderSelector;
