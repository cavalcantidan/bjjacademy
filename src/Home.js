import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, ImageBackground, TouchableHighlight } from 'react-native';

export default class Home extends Component
{

    static
    navigationOptions = {
        title: 'Home',
        header: null
    };

    constructor(props)
    {
        super(props);
        this.state = {
            email: ''
        }

        this.cadastrar = this.cadastrar.bind(this);
        this.login = this.login.bind(this);

    }

    cadastrar() {
    this.props.navigation.navigate('Cadastro');

}

    login() {
    this.props.navigation.navigate('Login');

}

    render() {
        return (
            <ImageBackground source={require('../assets/images/fundo-start-p1.jpg')} style={styles.bg}>
              <View style={styles.container}>
                  <View style={styles.buttonArea}>
                      <TouchableHighlight style={styles.button} onPress={this.cadastrar}>
                          <Text style={styles.btnText}>CADASTRAR</Text>
                      </TouchableHighlight>
                      <TouchableHighlight style={styles.button} onPress={this.login}>
                          <Text style={styles.btnText}>LOGIN</Text>
                      </TouchableHighlight>

                  </View>
              </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    bg:{
        flex:1,
        width:null
    },
    buttonArea:{
        margin:30
    },
    button:{
        backgroundColor:'#ffffff',
        margin:10,
        height:40,
        width:200,
        borderRadius:15,
        justifyContent:'center'
    },
    btnText:{
        textAlign:'center',
        fontSize:20,
        color:'#bd191a',
        fontWeight:'bold'
    },
    icone:{
        width:26,
        height:26
    },
    container:{
        flex:1,
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
        fontSize:30,
        color:'#000000'

    },
    txt:{
        marginTop:5,
        fontSize:14,
        color:'#000000'
    }
});