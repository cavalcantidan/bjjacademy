import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, FlatList, TouchableHighlight, Platform, TouchableOpacity, Alert, Modal, ScrollView  } from 'react-native';
import HistoricoItem from './HistoricoItem';
import firebase from './FirebaseConnection';
import moment from 'moment';
import 'moment/locale/pt-br';

export default class sobreNos extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {

        }
    }

    static
    navigationOptions = {
        title: 'Sobre',
        header: null
    };

    render()
    {
        return (
            <View style={styles.container}>

                <View style={styles.cTop}>
                    <Text style={styles.lightTitle}>SOBRE</Text>
                </View>

                <View style={styles.cMid}>
                    <View style={styles.logo}>

                    </View>
                </View>

                <View style={styles.cBottom}>
                    <ScrollView>
                        <Text style={styles.txt}>

                        </Text>
                    </ScrollView>
                </View>

                <View style={styles.buttonArea}>
                    <TouchableHighlight style={styles.button} onPress={this.cadastrar}>
                        <Text style={styles.btnText}>Cadastrar</Text>
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
        backgroundColor:'#000000',
        //alignItems:'center'
    },
    buttonArea:{
        justifyContent:'center',
        alignItems:'center'
    },
    cTop:{
        height:200,
        backgroundColor:'#000000',
        alignItems:'center',
        marginTop:0

    },
    cMid:{
        height:140,
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'center',
        borderTopRightRadius:20,
        borderTopLeftRadius:20
    },
    logo:{
        borderRadius:70,
        width:140,
        height:140,
        borderWidth:2,
        borderColor:'#FFFFFF',
        marginTop:-120

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
        backgroundColor:'transparent',
        height:40,
        width:200,
        padding:5,
        borderColor:'#ffffff',
        borderWidth:1,
        borderRadius:7,
        margin:7
    },
    btnText:{
        textAlign:'center',
        fontSize:20,
        color:'#ffffff',
        fontWeight:'bold'
    },
    txt:{
        fontSize:14,
        color:'#000000'
    }
});