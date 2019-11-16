import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

class Botao extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        let c = 1;
        if(props.c) {
            c = parseInt(props.c);
        }


        let bg = '#E0E0E0';
        if(props.bg) {
            bg = props.bg;
        }

        let bgt = '#000000';
        if(props.bgt) {
            bgt = props.bgt;
        }


        this.styles = StyleSheet.create({
            area:{
                flex:c,
                justifyContent:'center',
                alignItems:'center',
                borderWidth:1,
                borderColor:'#000000',
                borderRadius:15,
                margin:4,
                backgroundColor:bg,

            },
            text:{
                fontSize:30,
                color:bgt
            }
        });
    }

    render() {
        return (
            <TouchableOpacity style={this.styles.area} onPress={this.props.onPress}>
                <Text style={this.styles.text}>{this.props.n}</Text>
            </TouchableOpacity>
        );
    }

}

export default class Calculadora extends Component {

    constructor(props) {
        super(props);

        this.state = {r:'0', tf:''};


        this.frase = ['Essa é muito fácil...',
            'Nem precisei pensar para esta',
            'Faz uma mais difícil',
            'Voce deve estar brincando',
            'Poxa, que fácil!',
            'Você deve ser muito inteligente! SQN!!',
            'Me incomodando pra isso? Sério?',
            'Sério? Precisa de mim pra isso?',
            'Ha,ha,ha! NAO SABE...',
            'Você hein, sinceramente...',
            'Voce já ouviu falar de tabuada?'];
        this.frmedio = ['Estamos melhorando nas contas',
            'Quase precisei usar meus bites',
            'Ok, pra essa que estou aqui',
            'Ok, você precisa de mim...',
            'Ufa, uma conta legal de fazer',
            'Como eu sou nerd!',
            'Bora lá, quase me esforcei',
            'Eu sou muito fera, e meio arrogante! kkk',
            'Se fosse uma prova...'];
        this.btn = this.btn.bind(this);
    }



    btn(b) {
        let s = this.state;

        if(b == 'C') {
            s.r = '0';
        }
        else if(b == '=') {
            s.r = eval(s.r);
        }
        else {
            if(s.r == '0') {
                s.r = b;
            } else {
                s.r += b;
            }
        }

        if (s.r < '299' && b == '='){
            let rd = Math.floor(Math.random() * this.frase.length);
            s.tf = this.frase[rd];
        } else if (s.r > '299' && b == '=') {
            let rd = Math.floor(Math.random() * this.frmedio.length);
            s.tf = this.frmedio[rd];
        }
        else {
            if (s.r == '0') {
                s.tf = '';
            }

        }


        this.setState(s);
    }



    render() {
        return (
            <View style={styles.body}>
                <View style={styles.linha}>
                    <Text style={styles.res}>{this.state.r}</Text>

                </View>

                <View style={styles.linha2}>
                    <Text style={styles.frase}>{this.state.tf}</Text>
                </View>
                <View style={styles.linha}>
                    <Botao c="3" n="C" bg="#a8a8a8" onPress={()=>{this.btn("C")}} />
                    <Botao n="/" bg="#3464de" bgt='#ffffff' onPress={()=>{this.btn("/")}} />
                </View>
                <View style={styles.linha}>
                    <Botao n="7" onPress={()=>{this.btn("7")}} />
                    <Botao n="8" onPress={()=>{this.btn("8")}} />
                    <Botao n="9" onPress={()=>{this.btn("9")}} />
                    <Botao n="*" bg="#3464de" bgt='#ffffff' onPress={()=>{this.btn("*")}} />
                </View>
                <View style={styles.linha}>
                    <Botao n="4" onPress={()=>{this.btn("4")}} />
                    <Botao n="5" onPress={()=>{this.btn("5")}} />
                    <Botao n="6" onPress={()=>{this.btn("6")}} />
                    <Botao n="-" bg="#3464de" bgt='#ffffff' onPress={()=>{this.btn("-")}} />
                </View>
                <View style={styles.linha}>
                    <Botao n="1" onPress={()=>{this.btn("1")}} />
                    <Botao n="2" onPress={()=>{this.btn("2")}} />
                    <Botao n="3" onPress={()=>{this.btn("3")}} />
                    <Botao n="+" bg="#3464de" bgt='#ffffff' onPress={()=>{this.btn("+")}} />
                </View>
                <View style={styles.linha}>
                    <Botao c="2" n="0" onPress={()=>{this.btn("0")}} />
                    <Botao n="." onPress={()=>{this.btn(".")}} />
                    <Botao n="=" bg="#1f4199" bgt='#ffffff' onPress={()=>{this.btn("=")}} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body:{
        paddingTop:20,
        flex:1,
        backgroundColor:'#000000'
    },
    linha:{
        flex:1,
        flexDirection:'row'
    },
    linha2:{

        padding: 3,
        flexDirection:'row',
        backgroundColor:'#000000',
        height: 40,
        textAlign:'center',
        justifyContent: 'center'
    },
    res:{
        backgroundColor:'#000000',
        color:'#FFFFFF',
        fontSize:50,
        flex:1,
        textAlign:'right'
    },
    frase: {
        fontSize: 17,
        color: '#FFFFFF',
        backgroundColor:'#3464de',
        padding:3,
        textAlign:'center'

    }
});















