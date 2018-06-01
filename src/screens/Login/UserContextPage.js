import React, { Component } from 'react';
import {  View, Text, Image, StyleSheet } from 'react-native';

// Colors
import { colors } from '../../styles/metrics'
import Button from '../../components/Button';

export default class UserContextPage extends Component {
    onChooseParent() {
        this.props.navigation.navigate('Examples');
    }
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={ styles.logo } source={ require('../../images/Logo220_50px.png') } />
                <View style={ styles.textContent }>
                    <Text style={ [styles.text, styles.textTitle ] }>Seja bem-vindo!</Text>
                    <Text style={ styles.text }>Escolha o perfil que deseja usar.</Text>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.button} >
                    <Button
                        onPress={(e) => this.onChooseParent()} 
                        icon={ require('../../images/Botao_pais_25_36px.png') } 
                        size='bigger' 
                        color={ colors.primary } 
                        style={ styles.button }>Pais</Button>
                </View>
                <View style={styles.button}>
                    <Button icon={ require('../../images/Botao_filhos_25_36px.png') } size='bigger' color={ colors.secundary } style={ styles.button } >Filhos</Button>
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
        alignItems: 'center',
        
    },
    logo: {
        alignSelf: 'center',
    },
    buttonsContainer: {
        flex:1,
        justifyContent: 'center',
        paddingHorizontal: 100,        
    },
    textContent: {
        marginTop: 53
    },
    text:{
        alignSelf: 'center',
    },
    textTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {                
        paddingVertical: 30
    }
})