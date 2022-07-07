import React from 'react'
import { Button, View } from 'react-native'
import TextoCentral from '../components/TextoCentral'


export default props => {
    return (
        <View style={{ flex: 1 }}>
            <View stlye={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Button
                    title="Abrir"
                    onPress={() => {
                        props.navigation.openDrawer()
                        setTimeout(() => {
                            props.navigation.closeDrawer()
                            setInterval(()=>{
                                props.navigation.toggleDrawer()        
                            }, 1000)
                        }, 3000)
                    }}
                />
            </View>
            <View style={{ flex: 1 }}>
                <TextoCentral corFundo="#33fa72" corFonte="#000">
                    Tela D
                </TextoCentral>
            </View>
        </View>
    )
}