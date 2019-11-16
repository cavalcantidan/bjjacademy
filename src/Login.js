import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput, Text, Button, TouchableHighlight } from 'react-native';
import firebase from './FirebaseConnection';

export default class Login extends Component
{

    static
    navigationOptions = {
        title: 'LOGIN',
        headerStyle:{
            backgroundColor:'#bc1919'
        },
        headerTintColor:'#ffffff'
    };


    constructor(props)
    {
        super(props);
        this.state = {
            emailInput:'',
            senhaInput:''
        }

        this.entrar = this.entrar.bind(this);

        firebase.auth().signOut();


    }

    entrar() {
    if(this.state.emailInput != '' && this.state.senhaInput != '') {

        firebase.auth().onAuthStateChanged((user)=>{
            if(user) {

            this.props.navigation.navigate('Interna');

        }
    });

    firebase.auth().signInWithEmailAndPassword(
        this.state.emailInput,
        this.state.senhaInput
    ).catch((error)=>{
        alert(error.code);
});

}
}


render()
{
    return (
        <View style={styles.container}>
            <Text style={styles.saldo}>Faça seu login</Text>
            <Text style={styles.txt}>E-mail:</Text>
            <TextInput autoFocus={true} placeholder='Digite seu e-mail' style={styles.input} onChangeText={(emailInput)=>this.setState({emailInput})} />
            <Text style={styles.txt}>Senha:</Text>
            <TextInput secureTextEntry={true} style={styles.input} onChangeText={(senhaInput)=>this.setState({senhaInput})} />

            <TouchableHighlight style={styles.button} onPress={this.entrar}>
                <Text style={styles.btnText}>Logar</Text>
            </TouchableHighlight>
        </View>
    );
}
}
const styles = StyleSheet.create({
    icone:{
        width:26,
        height:26
    },
    input:{
        height:40,
        padding:5,
        borderRadius:15,
        backgroundColor:'#e8ecef',
        margin:10
    },
    container:{
        flex:1,
        margin:10
    },
    saldoArea:{
        paddingTop:30,
        paddingBottom:20,
        backgroundColor:'#999999'
    },
    saldo:{
        textAlign:'left',
        fontSize:30,
        fontWeight:'bold',
        color:'#bd191a',
        margin:10,
        padding:5
    },
    historico:{
        flex:1,
        padding:5
    },
    btnsArea:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        paddingTop:20,
        paddingBottom:10,
        backgroundColor:'#999999'
    },
    button:{
        backgroundColor:'#bd191a',
        height:40,
        borderRadius:15,
        margin:10,
        padding:5
    },
    btnText:{
        textAlign:'center',
        fontSize:20,
        color:'#ffffff'
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
    txt:{
        fontSize:14,
        color:'#000000',
        margin:10
    }
});