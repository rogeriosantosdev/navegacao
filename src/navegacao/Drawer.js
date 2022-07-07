import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TelaA from "../view/TelaA"
import TelaB from '../view/TelaB';
import TelaC from '../view/TelaC';
import TelaD from '../view/TelaD';

const Drawer = createDrawerNavigator();

export default props => (
    <Drawer.Navigator initialRouteName="TelaD">
        <Drawer.Screen name="TelaA" component={TelaA} />
        <Drawer.Screen name="TelaB" component={TelaB} />
        <Drawer.Screen name="TelaC" component={TelaC} />
        <Drawer.Screen name="TelaD" component={TelaD} />
    </Drawer.Navigator>
)