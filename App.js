import React, {Component} from 'react';
import {createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import Home from './src/Home';
import Cadastro from './src/Cadastro';
import Login from './src/Login';
import Interna from './src/Interna';
import Preload from './src/Preload';
import AddReceita from './src/AddReceita';
import AddDespesa from './src/AddDespesa';
import suaMarca from './src/suaMarca';
import totalReceita from './src/totalReceita';
import totalDespesa from './src/totalDespesa';

import Janeiro from './src/Janeiro';
import Fevereiro from './src/Fevereiro';
import Marco from './src/Marco';
import Abril from './src/Abril';
import Maio from './src/Maio';
import Junho from './src/Junho';
import Julho from './src/Julho';
import Agosto from './src/Agosto';
import Setembro from './src/Setembro';
import Outubro from './src/Outubro';
import Novembro from './src/Novembro';
import Dezembro from './src/Dezembro';








const Navegador = createStackNavigator({

    Preload:{
        screen:Preload
    },
    Interna:{
        screen:Interna
    },
    Home:{
        screen:Home
    },
    Cadastro:{
        screen:Cadastro
    },
    Login:{
        screen:Login
    },
    AddReceita:{
        screen:AddReceita
    },
    AddDespesa:{
        screen:AddDespesa
    },
    suaMarca:{
        screen:suaMarca
    },
    Janeiro:{
        screen:Janeiro
    },
    Fevereiro:{
        screen:Fevereiro
    },
    Marco:{
        screen:Marco
    },
    Abril:{
        screen:Abril
    },
    Maio:{
        screen:Maio
    },
    Junho:{
        screen:Junho
    },
    Julho:{
        screen:Julho
    },
    Agosto:{
        screen:Agosto
    },
    Setembro:{
        screen:Setembro
    },
    Outubro:{
        screen:Outubro
    },
    Novembro:{
        screen:Novembro
    },
    Dezembro:{
        screen:Dezembro
    },
    totalReceita:{
        screen:totalReceita
    },
    totalDespesa:{
            screen:totalDespesa
        }

});


export default createAppContainer(Navegador);