import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native'
import TelaA from './view/TelaA';
import TelaB from './view/TelaB';
import TelaC from './view/TelaC';

export default props => {
    return(
        <SafeAreaView style={{flex:1}}>
            <TelaA/>
            <TelaB/>
            <TelaC/>
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}