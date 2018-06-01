import React, { Component } from 'react';
import { View, Text,  } from 'react-native';

import Button from '../../components/Button';

import { colors } from '../../styles/metrics';

export default class ButtonsPage extends Component {
  render() {
    return (
        <View>            
            <View  style={{paddingHorizontal: 30, marginTop: 5}}>
                <Button size='small'>teste</Button>
            </View>
            <View style={{paddingHorizontal: 30, marginTop: 5}}>
                <Button >teste</Button>
            </View>
            <View  style={{paddingHorizontal: 30, marginTop: 5}}>
                <Button color={colors.secundary}>teste</Button>
            </View>
            <View  style={{paddingHorizontal: 30, marginTop: 5}}>
                <Button size='big'>teste</Button>
            </View>
            <View  style={{paddingHorizontal: 30, marginTop: 5}}>
                <Button size='bigger'>teste</Button>
            </View>
            <View  style={{paddingHorizontal: 30, marginTop: 5}}>
                <Button icon size='bigger'>teste</Button>
            </View>
        </View>
    );
  }
}
 
