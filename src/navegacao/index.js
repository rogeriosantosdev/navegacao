import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
// import Stack from './Stack'
import Tab from './Tab'
// import Drawer from './Drawer'
import { StatusBar } from 'expo-status-bar'

export default props => {
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                {/* <Drawer/> */}
                <Tab/>
                {/* <Stack/> */}
            </NavigationContainer>
            {/* <StatusBar style="auto"/> */}
        </SafeAreaView>
    )
}