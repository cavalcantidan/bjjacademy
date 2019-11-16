import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { DrawerItems, createDrawerNavigator } from 'react-navigation';

export default class DrawerContent extends Component {

    render() {
        return(
            <ScrollView>
                <View>
                  const Drawer = createDrawerNavigator({
                    Cadastro:{
                    screen:Cadastro
                    },
                    Login:{
                    screen:Login
                    },
                    contentComponent: (props) => (
                    <DrawerContent {...props}/>
                    )
                    });
                </View>
                <DrawerItems {...this.props} />
            </ScrollView>
        );
    }
}