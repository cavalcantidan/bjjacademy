import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, FlatList, TouchableHighlight, TextInput, Button } from 'react-native';
import HistoricoItem from './HistoricoItem';
import firebase from './FirebaseConnection';
import moment from 'moment';
import 'moment/locale/pt-br';


export default class AddDespesa extends Component
{

    static
    navigationOptions = {
        title: 'Adicionar Despesa',
        headerStyle:{
            backgroundColor:'#bc1919',
            fontWeight:'bold'
        },
        headerTintColor:'#ffffff'
    };

    constructor(props)
    {
        super(props);

        let showhora = moment().format('H:mm');
        let getMes = moment().format('MMMM');
        var getmoment = moment().locale('pt-br').format('L');


        this.state = {
            valor:'',
            produto:'',
            showhora:showhora,
            getmoment:getmoment,
            getMes:getMes,
            empresa:''

        }
        this.add = this.add.bind(this);

    }

    add() {
    if(this.state.valor != '') {

        let historico = firebase.database().ref('historico').child(firebase.auth().currentUser.uid);
        let user = firebase.database().ref('users').child(firebase.auth().currentUser.uid);

        let key = historico.push().key;

        historico.child(key).set({
            type:'despesa',
            valor:this.state.valor,
            produto:this.state.produto,
            sellhora:this.state.showhora,
            selldata:this.state.getmoment,
            empresa:this.state.empresa,
            meumes:this.state.getMes
        });

        user.once('value').then((snapshot)=>{

            let saldo = parseFloat(snapshot.val().saldo);
            let academia = snapshot.val().academia;

        saldo -= parseFloat(this.state.valor);

        user.set({
            saldo:saldo,
            academia:academia
        });

        this.props.navigation.goBack();

    });
}

}

render()
{
    return (
        <View style={styles.container}>

            <Text style={styles.saldo}>Adicione suas despesas</Text>
            <TextInput
            style={styles.input}
            keyboardType='numeric'
            value={this.state.valor}
            placeholder='Qual o valor'
            autoFocus={true}
            onChangeText={(valor)=>this.setState({valor})}
            />

            <TextInput
                style={styles.input}
                autoCapitalize='characters'
                placeholder='Razão / CNPJ'
                onChangeText={(empresa)=>this.setState({empresa})}

             />

            <TextInput
            style={styles.input}
            placeholder='Produto / Serviço'
            onChangeText={(produto)=>this.setState({produto})}

            />
            <TouchableHighlight style={styles.button} onPress={this.add}>
                <Text style={styles.btnText}>Adicionar</Text>
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
        color:'#000000'
    }
});