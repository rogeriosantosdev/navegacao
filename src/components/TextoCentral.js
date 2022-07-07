import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native'

export default props => {
    return(
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: props.corFundo || '#000'
            }}>
            <Text style={{
                fontSize: 50,
                color: props.corFonte || '#FFF'
            }}>{props.children}</Text>
            <StatusBar style="auto" />
        </View>
    )
}