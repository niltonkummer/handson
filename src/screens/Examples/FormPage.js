import React, { Component } from 'react';
import {  View, Text, TextInput, StyleSheet, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

import FormRow from '../../components/FormRow';
import Button from '../../components/Button';

import { colors } from '../../styles/metrics';

export default class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password: '',
            isLoading: false,
            message: '',
        };
    }

    componentDidMount() {
        // Initialize Firebase
      const config = {
          apiKey: "AIzaSyAY8LelXl9IXmsisQJQ5zIi1mC-DfzDDUo",
          authDomain: "series-54ec2.firebaseapp.com",
          databaseURL: "https://series-54ec2.firebaseio.com",
          projectId: "series-54ec2",
          storageBucket: "series-54ec2.appspot.com",
          messagingSenderId: "844338712114"
      };
      if (!firebase.apps.length) {
        firebase.initializeApp(config);		
      }
  }

    onChangeHandler(field, value) {
		this.setState({
            [field]: value,
            message: '',
		})
	};

    onTryLogin() {
		this.setState({
			isLoading: true,
        });
        setTimeout(() => {
            const {email, password} = this.state;
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(user => {
                alert("usuario " + JSON.stringify(user))
                this.setState({
                    message: '',
                })	
			})
			.catch(error => {                
                this.setState({
                    message: error.code
                })
				
			}).then(
				() => this.setState({
                    isLoading: false,                    
				})
			)
        }, 3000)		
    }

    renderMessage() {
        if (this.state.message != '') return <Text style={styles.errorMessage}>{this.state.message}</Text>
        return <Text> </Text>
    }

    renderTextInputs() {
        let colorUnderline = colors.secundary;
        if (this.state.message != '') {
            colorUnderline = colors.primary;
        }
        return (
            <View >
                <FormRow label={'E-mail:'}>            
                        <TextInput           
                        placeholderTextColor={colors.gray_dark}
                        style={styles.input}
                        returnKeyType='next' 
                        autoCapitalize='none' 
                        keyboardType='email-address' 
                        autoCorrect={false}                  
                        placeholder='Preencha com o seu email'                
                        underlineColorAndroid={colorUnderline}
                        onChangeText={text => this.onChangeHandler('email', text)}
                        blurOnSubmit={true}
                    />
                </FormRow>
                <FormRow label={'Senha:'}>            
                    <TextInput            
                        returnKeyType='go'
                        autoCapitalize='none'
                        autoCorrect={false}                 
                        placeholder='Preencha com a sua senha'
                        style={styles.input}
                        secureTextEntry
                        placeholderTextColor={colors.gray_dark}
                        underlineColorAndroid={colorUnderline}
                        onSubmitEditing={() => this.onTryLogin()}
                        onChangeText={text => this.onChangeHandler('password', text)}
                        blurOnSubmit={true}
                        
                    />
                </FormRow>
                { this.renderMessage() }
                { this.renderButton() }
                <TouchableOpacity>
                    <Text style={styles.labelInfo}>Esqueceu a sua senha?</Text>
                </TouchableOpacity>
            </View>
        );
    }

    renderButton() {
		if (this.state.isLoading) 
			return <ActivityIndicator />;
		
		return <Button style={styles.buttonSignIn} onPress={() => this.onTryLogin()}>Entrar</Button>;
	}
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={ styles.logo } source={ require('../../images/Logo220_50px.png') } />                
                </View>
            
                { this.renderTextInputs() }
                <View>
                    <Text style={styles.labelInfo}>É novo por aqui?</Text>
                    <Button style={styles.buttonSignUp} onPress={() => {}}>Cadastre-se</Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 35,
        flex:1,
        justifyContent: 'space-around'
    },
    label: {       
    },
    input: {
        fontWeight: 'bold',
        borderColor: colors.secundary,        
        height: 35,
        color: colors.gray_darker,
    },
    logoContainer: {
        
    },
    buttonSignIn: {
        marginTop: 30,
        backgroundColor: colors.secundary,
        marginBottom: 15,
    },
    buttonSignUp: {      
        marginTop: 15,  
        backgroundColor: colors.primary
    },
    labelInfo: {
        alignSelf: 'center',
    },
    errorMessage: {
        color: colors.primary
    }
});
