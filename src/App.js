import React, { Component } from 'react';
import {  View, Text, Easing, Animated } from 'react-native';

// Components
/*
    Login
    Seleção do contexto do usuário
    Cadastro de pai e filho
    Cadastro de filhos
    
*/
import MainPage from './screens/Main/MainPage';
import LoginPage from './screens/Login/LoginPage';
import UserContextPage from './screens/Login/UserContextPage';

// Tarefas
import CriarTarefaPage from './screens/Tarefas/CriarTarefaPage';

import Buttons from './screens/Examples/ButtonsPage';
import FormPage from './screens/Examples/FormPage';

import { colors, fonts } from './styles/metrics';

// Navigation
import { createStackNavigator } from 'react-navigation';


export default createStackNavigator({
    'CriarTarefa': {
        screen: CriarTarefaPage,
        navigationOptions: {
            title: 'Criar Tarefa',
        }
    },
    'UserContext': {
        screen: UserContextPage,
        navigationOptions: {
            header: null,
        }
    },
    'Login': {
        screen: LoginPage,
        navigationOptions: {
            title: 'Login Pais',            
        }
    },
    'Examples': {
        screen: FormPage,
        navigationOptions: {            
        }
    },
   
   
    'Main': {
        screen: MainPage,
    }
}, {
    navigationOptions: {
        headerTintColor: 'white',
		headerStyle: {
			backgroundColor: colors.primary,
		},
		headerTitleStyle: {
			color: 'white',
			fontSize: fonts.big,
			alignSelf: 'center',
        },       
    },    
})