import { StyleSheet } from "react-native";
const buttonStyles = StyleSheet.create({
    grayOutlinedButton: {
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    grayPinkButton: {
        backgroundColor: '#ED4C67',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    grayGreenButton: {
        backgroundColor: '#27ae60',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    grayOutlinedIconButton: {
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 10
    },
    filledButton: {
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 50,
        backgroundColor: '#ff4040'
    },
    filledButtonText: {
        color: 'white',
        fontWeight: '700'
    },
    grayOutlinedButtonText: {
        color: 'black',
        fontWeight: '700'
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13
    },
});

export default buttonStyles;