import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#969696',
    },
    img: {
        width: 337,
        height: 327,
        marginTop: 70,
    },
    containertext: {
        backgroundColor: '#BFBFBF',
        width: 345,
        height: 60,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#BFBFBF',
        margin: 30
    },
    text: {
        padding: 20,
        fontFamily: 'LuckiestGuy_400Regular',
        color: '#7C7C7C'
    },
    ball: {
        width: 100,
        height: 30,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})