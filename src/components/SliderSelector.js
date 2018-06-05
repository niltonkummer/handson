import React, { Component } from 'react';
import { FlatList, Text,  } from 'react-native';

import { Card } from "react-native-elements";

import BoxItem from './BoxItem';



class SliderSelector extends Component {
    render() {
        const dataItems = [
            {key:'Item 1'},
            {key:'Item 2'},
        ]
        return (
            
        <FlatList
            horizontal
            contentContainerStyle={{
                margin:10,
            }}
            data={[
                {key: 'Criar'}, 
                {key: 'Arrumar o quarto'},
                {key: 'Limpar a sujeira'},
                {key: 'Limpar a sujeira'},
                {key: 'Limpar a sujeira'},

            ]}
            renderItem={({item}) => (
                <Card 
                    containerStyle={{ width:80, height:80}}
                    
                    >
                    <BoxItem>{item.key}</BoxItem>
                </Card>)
                }
        />

        );
    }
}

export default SliderSelector;
