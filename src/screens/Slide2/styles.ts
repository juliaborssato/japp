import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
       flex:1,
       alignItems:"center",
       backgroundColor: '#969696',
    },
    img:{
        width:337,
        height:327,
        marginTop: 70,
    },
    text:{
        backgroundColor: '#BFBFBF',
        padding: 20,
        width:345,
        height:60,
        borderRadius: 40,
        fontFamily: 'LuckiestGuy_400Regular'
    },
    ball: {
        width: 100,
        height: 30,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 40
    },
    box1: {
        width: 270,
        height: 310,
        backgroundColor: '#BFBFBF',
        borderRadius: 15,
    },
    texto: {
        padding: 20,
        width:145,
        height:60,
        borderRadius: 40,
        fontFamily: 'LuckiestGuy_400Regular'
    },
    email: {
        marginTop: 10,
        margin: 8,
        fontSize: 20,
        fontFamily: 'LuckiestGuy_400Regular'
    },
    senha: {
        marginTop: 17,
        margin: 8,
        fontSize: 20,
        fontFamily: 'LuckiestGuy_400Regular'
    },
    input: {
        backgroundColor: '#fff',
        height: 40,
        borderRadius: 30,
    },
    caixinha:{
        flex:1
    }
    
})