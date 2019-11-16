import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, FlatList, TouchableHighlight, StatusBar, ImageBackground, Platform, TouchableOpacity, Alert, Modal, ScrollView  } from 'react-native';
import HistoricoItem from './HistoricoItem';
import firebase from './FirebaseConnection';
import moment from 'moment';
import 'moment/locale/pt-br';
import Calculadora from './Calculadora';

export default class Interna extends Component
{

    static
    navigationOptions = {
        title: 'Home',
        header: null
    };

    constructor(props)
    {
        super(props);

        let getMes = moment().format('MMMM');

        this.state = {
            saldo:0,
            empresa:'',
            modalOn:false,
            modalOn2:false,
            getMes:getMes,
            historico:[],
            valorDois:[]
        }

        this.abrirModal1 = this.abrirModal1.bind(this);
        this.fecharModal1 = this.fecharModal1.bind(this);
        this.abrirModal2 = this.abrirModal2.bind(this);
        this.fecharModal2 = this.fecharModal2.bind(this);

        this.addReceita = this.addReceita.bind(this);
        this.totalReceitago = this.totalReceitago.bind(this);
        this.totalDespesago = this.totalDespesago.bind(this);
        this.addDespesa = this.addDespesa.bind(this);

        this.anuncie = this.anuncie.bind(this);
        this.sair = this.sair.bind(this);

        this.goJan = this.goJan.bind(this);
        this.goFev = this.goFev.bind(this);
        this.goMar = this.goMar.bind(this);
        this.goAbr = this.goAbr.bind(this);
        this.goMai = this.goMai.bind(this);
        this.goJun = this.goJun.bind(this);
        this.goJul = this.goJul.bind(this);
        this.goAgo = this.goAgo.bind(this);
        this.goSet = this.goSet.bind(this);
        this.goOut = this.goOut.bind(this);
        this.goNov = this.goNov.bind(this);
        this.goDez = this.goDez.bind(this);



        firebase.auth().onAuthStateChanged((user)=>{
            if(user) {
               firebase.database().ref('users').child(user.uid).on('value', (snapshot)=>{

                   let state = this.state;
                   state.saldo = snapshot.val().saldo;
                   state.academia = snapshot.val().academia;
                   this.setState(state);
               });


            }else {
               this.props.navigation.navigate('Home');
            }
        });

        firebase.auth().onAuthStateChanged((user)=>{
             if(user) {
         firebase.database().ref('historico').child(user.uid).orderByChild('meumes').equalTo(this.state.getMes).on('value', (snapshot)=>{

            let state = this.state;
            state.historico = [];

            snapshot.forEach((childItem)=>{
                state.historico.push({
                    key:childItem.key,
                    type:childItem.val().type,
                    valor:childItem.val().valor,
                    aluno:childItem.val().aluno,
                    produto:childItem.val().produto,
                    pagamento:childItem.val().pagamento,
                    selldata:childItem.val().selldata,
                    sellhora:childItem.val().sellhora,
                    empresa:childItem.val().empresa,
                    meumes:childItem.val().meumes
                });
            });


            this.setState(state);
        });

}else {
    this.props.navigation.navigate('Home');
}
});


firebase.auth().onAuthStateChanged((user)=>{
    if(user)
{
    firebase.database().ref(this.state.getMes).child(user.uid).orderByChild('valor').on('value', (snapshot)=>{

        let state = this.state;
    state.valorDois = [];

    snapshot.forEach((childItem) => {
        state.valorDois.push({
            valor: childItem.val().valor
        });
});


this.setState(state);
});

}
});


    }

fecharModal1() {
    let s = this.state;
    s.modalOn = false;
    this.setState(s);

}

abrirModal1() {
    let s = this.state;
    s.modalOn = true;
    this.setState(s);
}


fecharModal2() {
    let s = this.state;
    s.modalOn2 = false;
    this.setState(s);

}

abrirModal2() {
    let s = this.state;
    s.modalOn2 = true;
    this.setState(s);
}


goJan() {
    this.props.navigation.navigate('Janeiro');
}

goFev() {
    this.props.navigation.navigate('Fevereiro');
}

goMar() {
    this.props.navigation.navigate('Marco');
}
goAbr() {
    this.props.navigation.navigate('Abril');
}

goMai() {
    this.props.navigation.navigate('Maio');
}

goJun() {
    this.props.navigation.navigate('Junho');
}
goJul() {
    this.props.navigation.navigate('Julho');
}
goAgo() {
    this.props.navigation.navigate('Agosto');
}
goSet() {
    this.props.navigation.navigate('Setembro');
}
goOut() {
    this.props.navigation.navigate('Outubro');
}
goNov() {
    this.props.navigation.navigate('Novembro');
}
goDez() {
    this.props.navigation.navigate('Dezembro');
}

    addReceita() {
    let s = this.state;
    s.modalOn = false;
    this.setState(s);
    this.props.navigation.navigate('AddReceita');

}

totalReceitago() {
    let s = this.state;
    s.modalOn = false;
    this.setState(s);
    this.props.navigation.navigate('totalReceita');
}
totalDespesago() {
    let s = this.state;
    s.modalOn = false;
    this.setState(s);
    this.props.navigation.navigate('totalDespesa');
}
    addDespesa() {
    let s = this.state;
    s.modalOn = false;
    this.setState(s);
    this.props.navigation.navigate('AddDespesa');
}

anuncie() {
    let s = this.state;
    s.modalOn = false;
    this.setState(s);
    this.props.navigation.navigate('suaMarca');
}

    sair() {
    let s = this.state;
    s.modalOn = false;
    this.setState(s);
    firebase.auth().signOut();

}

    render()
    {
        return (
                <View style={styles.container}>

                    <StatusBar barStyle={'dark-content'} backgroundColor='#ffffff'/>
                <Image source={require('../assets/images/bg-top-5.png')} style={{
                    width:'100%',

                    zIndex:1,
                    borderBottomRightRadius:25,
                    borderBottomLeftRadius:25
                }}/>
                <View style={styles.saldoArea}>

                  <Text style={styles.saldo}>seu saldo: </Text>
                    <Text style={styles.saldoValor}>R$ {this.state.saldo.toFixed(2)}</Text>
                    <Text style={styles.darkTitle}>{this.state.academia}</Text>

                    <View style={styles.areaMes}>
                        <ScrollView horizontal={true}>
                        <TouchableHighlight onPress={this.goJan}>
                            <Text style={styles.meuMes}>Jan</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.goFev}>
                            <Text style={styles.meuMes}> Fev</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.goMar}>
                            <Text style={styles.meuMes}> Mar</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.goAbr}>
                            <Text style={styles.meuMes}> Abr</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.goMai}>
                            <Text style={styles.meuMes}> Mai</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.goJun}>
                            <Text style={styles.meuMes}> Jun</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.goJul}>
                            <Text style={styles.meuMes}> Jul</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.goAgo}>
                            <Text style={styles.meuMes}> Ago</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.goSet}>
                            <Text style={styles.meuMes}> Set</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.goOut}>
                            <Text style={styles.meuMes}> Out</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.goNov}>
                            <Text style={styles.meuMes}> Nov</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.goDez}>
                            <Text style={styles.meuMes}> Dez</Text>
                        </TouchableHighlight>
                        </ScrollView>
                    </View>

                </View>


                <View style={styles.historicoArea}>
                    <FlatList
                    style={styles.historico}
                    data={this.state.historico}
                    renderItem={({item})=><HistoricoItem data={item} />}
                    />
                </View>



                    <TouchableOpacity activeOpacity={0.5} onPress={this.abrirModal1} style={styles.TouchableOpacityStyle} >
                        <Image source={require('../assets/images/bt-menu.png')}  style={styles.FloatingButtonStyle} />
                    </TouchableOpacity>


                    <Modal transparent={true} animationType='slide' visible={this.state.modalOn}>
                        <View style={styles.modalIn}>


                            <View style={styles.modalMenu}>
                                <ScrollView>
                                    <TouchableHighlight style={styles.button} onPress={this.fecharModal1}>
                                        <Text style={styles.modalText}>(X) Fechar</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight style={styles.button} onPress={this.addReceita}>
                                        <Text style={styles.modalText}>Adicionar Receita</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight style={styles.button} onPress={this.addDespesa}>
                                        <Text style={styles.modalText}>Adicionar Despesa</Text>
                                     </TouchableHighlight>

                                     <TouchableHighlight style={styles.button} onPress={this.totalReceitago}>
                                         <Text style={styles.modalText}>Total Receita</Text>
                                     </TouchableHighlight>

                                     <TouchableHighlight style={styles.button} onPress={this.totalDespesago}>
                                            <Text style={styles.modalText}>Total Despesa</Text>
                                     </TouchableHighlight>

                                     <TouchableHighlight style={styles.button} onPress={this.anuncie}>
                                            <Text style={styles.modalText}>Sua marca aqui</Text>
                                     </TouchableHighlight>

                                    <TouchableHighlight style={styles.button} onPress={this.abrirModal2}>
                                        <Text style={styles.modalText}>Calculadora</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight style={styles.button} onPress={this.abrirModal2}>
                                        <Text style={styles.modalText}>Sobre nós</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight style={styles.button} onPress={this.sair}>
                                        <Text style={styles.modalText}>Sair (Logout)</Text>
                                    </TouchableHighlight>

                                </ScrollView>
                            </View>

                            <View style={styles.modalProp}>
                                <Image source={require('../assets/images/prop-menu-1.png')}  style={styles.propImg} />
                            </View>

                        </View>

                    </Modal>
                    <Modal transparent={true} animationType='slide' visible={this.state.modalOn2}>
                        <View style={styles.modalIn2}>
                            <Calculadora />
                            <View style={styles.modalStart}>
                                <TouchableHighlight onPress={this.fecharModal2}>
                                    <Text style={styles.closebt2}>(X) Fechar</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>

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
        backgroundColor:'#ffffff'
    },
    bg:{
        flex:1,
        width:null
    },
    area:{
        flex:1,
        alignItems:'flex-start',
        padding:15,
        margin:2,
        width:null,
        borderRadius:15,
        backgroundColor:'#ffffff',
        zIndex:4
    },
    modalIn:{
        position:'absolute',
        flexDirection:'row',
        justifyContent:'space-around',
        height:'41%',
        width:'100%',
        top:1,
        zIndex:7,
        backgroundColor:'#ffffff',
        justifyContent:'center',
        alignItems:'center',
        borderBottomRightRadius:25,
        borderBottomLeftRadius:25
    },
    modalMenu:{
        width:'50%',
        top:3,
        zIndex:9,
        backgroundColor:'#ffffff',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        alignSelf:'flex-start'

    },
    modalProp:{
        height:295,
        width:195,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'transparent'
    },
    propImg:{
    width:'100%',
    height:'100%',
    alignSelf:'center'
    },
    modalIn2:{
        position:'absolute',
        height:550,
        width: 300,
        bottom:130,
        right:40,
        elevation:7,
        borderBottomEndRadius:15,
        borderColor:'#ffffff'
    },
    areaMes:{
        height:56,
        backgroundColor:'#bd191a',
        width:200,
        borderRadius:25,
        padding:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:14

    },
    meuMes:{
        fontSize:13,
        fontWeight:'bold',
        color:'#000000',
        backgroundColor:'#ffffff',
        height:40,
        width:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:19,
        paddingRight:5,
        paddingLeft:5,
        paddingBottom:5,
        paddingTop:7,
        margin:3
    },
    modalText:{
        fontSize:15,
        color:'#000000',
        borderBottomWidth:1,
        height:40,
        alignItems:'flex-start',
        justifyContent:'flex-start',
        marginLeft:7,
        padding:4,
        borderBottomColor:'#000000'
    },
    saldoArea:{
        position:'absolute',
        height:'40%',
        width:'100%',
        top:1,
        right:1,
        paddingBottom:10,
        zIndex:3,
        alignItems:'center',

        borderBottomRightRadius:25,
        borderBottomLeftRadius:25
    },
    saldo:{
        textAlign:'center',
        fontSize:25,
        color:'#bd191a',
        paddingBottom:5
    },
    saldoValor:{
        textAlign:'center',
        fontSize:45,
        fontWeight:'bold',
        color:'#bd191a',
        paddingBottom:5
    },
    historico:{
        padding:5,
        backgroundColor:'#ffffff',
        borderTopRightRadius:25,
        borderTopLeftRadius:25
    },
      historicoArea:{
      flex:1,
      padding:1,
      backgroundColor:'transparent'
     },

    btnsArea:{
        flexDirection:'row',
        height:70,
        alignItems:'center',
        justifyContent:'flex-start',
        paddingTop:20,
        paddingBottom:5,
        backgroundColor:'#ffffff',
        marginTop:-5,
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
        elevation:20

    },
    button:{
        backgroundColor:'transparent',
        height:40,
        marginLeft:30
    },
    btnText:{
        textAlign:'center',
        fontSize:20,
        color:'#ffffff',
        fontWeight:'bold'
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
        fontSize:20,
        fontWeight:'bold',
        marginTop:4,
        color:'#FFFFFF',
        letterSpacing:4,
        textAlign:'center',
        borderTopWidth:1,
        paddingTop:10,
        borderTopColor:'#ffffff'
    },
    darkTitle:{
        fontSize:22,
        marginTop:4,
        color:'#000000',
        letterSpacing:4,
        textAlign:'center',
        paddingTop:10,
        fontFamily:'sans-serif-medium'
    },
    txt:{
        fontSize:14,
        color:'#000000'
    },
    TouchableOpacityStyle: {
        position: 'absolute',
        width:'100%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        right:1,
        top:'36%',
        backgroundColor:'transparent',
        borderRadius:15,
        elevation:0,
        zIndex:6
    },
    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 65,
        height: 45,
        borderRadius:20
    },
    FloatingButtonStyle2: {
        right:39,
        bottom:13
    },
    closebt:{
        fontSize:17,
        fontWeight:'bold',
        marginBottom:5,
        padding:5,
        color:'#ffffff'
    },
    closebt2:{
        fontSize:17,
        fontWeight:'bold',
        padding:5,
        color:'#000000'
    },
    modalStart:{
        height:30,
        flexDirection:'row',
        color:'#000000',
        padding:3,
        alignItems:'center',
        justifyContent:'center'
    }
});