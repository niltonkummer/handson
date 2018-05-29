import React, { Component } from 'react';
import {  View, Text } from 'react-native';

// Components
/*
    Login
    Seleção do contexto do usuário
    Cadastro de pai e filho
    Cadastro de filhos
    
*/
import LoginPage from './components/Login/LoginPage';
import Main from './components/Main/Main';
import UserContext from './components/Login/UserContext'

// Navigation
import { StackNavigator } from 'react-navigation';

export default StackNavigator({
    'UserContext': {
        screen: UserContext,
        navigationOptions: {
            header: null,
        }
    },
    'Login': {
        screen: LoginPage,
        navigationOptions: {
            header: null,
        }
    },
    'Main': {
        screen: Main,
    }
}, {
    navigationOptions: {
        
    }
})