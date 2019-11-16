import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, FlatList, Linking, TextInput, TouchableHighlight, Platform, TouchableOpacity, Alert, Modal, ScrollView  } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';

export default class suaMarca extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {


        }



    }

    static
    navigationOptions = {
        title: 'Sua Marca Aqui',
        headerStyle:{
            backgroundColor:'#bc1919',
            fontWeight:'bold'
        },
        headerTintColor:'#ffffff'
    };



render()
{
    return (
        <View style={styles.container}>

            <View style={styles.cTop}>
            </View>

            <View style={styles.cMid}>
                <View style={styles.logo}>
                    <Image style={{borderRadius:70}} source={require('../assets/images/logo-s-1.jpg')} />
                </View>
            </View>

            <View style={styles.cBottom}>
                <ScrollView>
                    <View style={styles.buttonArea}>
                    <Text style={styles.txt}>   Quer deixar sua marca visível para milhares ou milhões de pessoas?
                    É mais fácil e barato que você imagina. Sua marca estará em nosso APP na página de PRE-LOAD
                    ou em nosso APP MENU.
                    Toda vez que o usuário de nosso sistema abrir o nosso APP, ele irá visualizar sua marca.
                    Sempre que o menu se abrir, da mesma forma, sua marca será visualizada. Sem a necessidade de
                    códigos, cadastros imensos e muito tempo gasto para poucas impressões e um índice baixo de
                    interação em outros meios e outras plataformas.
                    Envie-nos um e-mail agora mesmo e faça sua marca conhecida por meio de
                    nosso APP. Basta clicar no link abaixo, enviar e-mail ou acessar nosso site no botão principal
                    desta tela.</Text>
                    <TouchableHighlight onPress={()=>Linking.openURL('mailto:daniel14cavalcanti@gmail.com')}>
                        <Text style={styles.linkText}>enviar e-mail</Text>
                    </TouchableHighlight>
                    </View>


                </ScrollView>
            </View>

            <View style={styles.buttonArea}>
                <TouchableHighlight style={styles.button} onPress={()=>Linking.openURL('mailto:daniel14cavalcanti@gmail.com')}>
                    <Text style={styles.btnText}>Ir para o site</Text>
                </TouchableHighlight>
            </View>

        </View>
    );
}


}


const styles = StyleSheet.create({
    icone:{
        width:26,
        height:26
    },
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#bd191a',
        //alignItems:'center'
    },
    buttonArea:{
        justifyContent:'center',
        alignItems:'center',
        lineHeight:22
    },
    input:{
        height:40,
        padding:5,
        borderBottomWidth:2,
        marginBottom:10
    },
    cTop:{
        height:100,
        backgroundColor:'#bd191a',
        alignItems:'center',
        marginTop:0,
        borderTopRightRadius:20,
        borderTopLeftRadius:20

    },
    cMid:{
        height:70,
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'center',
        borderTopRightRadius:20,
        borderTopLeftRadius:20
    },
    logo:{
        width:140,
        height:140,
        borderRadius:70,
        borderWidth:2,
        borderColor:'#FFFFFF',
        marginTop:-75

    },
    cBottom:{
        flex:1,
        backgroundColor:'#FFFFFF',
        padding:14

    },
    lightTitle:{
        fontSize:32,
        fontWeight:'bold',
        marginTop:40,
        color:'#FFFFFF',
        letterSpacing:4
    },
    darkTitle:{

    },
    button:{
        backgroundColor:'#ffffff',
        height:40,
        width:200,
        padding:5,
        borderRadius:15,
        margin:10
    },
    btnText:{
        textAlign:'center',
        fontSize:20,
        color:'#bd191a',
        fontWeight:'bold'
    },
    linkText:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
    },
    txt:{
        fontSize:18,
        color:'#000000',
        textAlign:'center'
    }
});