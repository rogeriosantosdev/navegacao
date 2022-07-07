import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaA from "../view/TelaA";
import { StatusBar } from "expo-status-bar";
import TelaB from '../view/TelaB';
import TelaC from '../view/TelaC';
import PassoStack from '../components/PassoStack';

const Stack = createNativeStackNavigator();

export default props => (
    <Stack.Navigator initialRouteName="TelaA"
        screenOptions={{}}>
        <Stack.Screen name="TelaA"
            options={{ title: 'Informações iniciais' }}>
            {props => (
                <PassoStack {...props} avancar="TelaB">
                    <TelaA />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaB">
            {props => (
                <PassoStack {...props} avancar="TelaC" voltar>
                    <TelaB />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaC">
            {props => (
                <PassoStack {...props} voltar avancar="TelaC">
                    <TelaC {...props} />
                </PassoStack>
            )}
        </Stack.Screen>
    </Stack.Navigator>
)