import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native'
const {height, width} = Dimensions.get('window')

const inputStyles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: 'gray'
    },
    inputTwo: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: '#bdc3c7',
    },
    viewPicker: {
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderStyle: 'solid',
        height: 50,
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    textArea: {
        paddingBottom: 100,
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 5,
        borderColor: 'gray'
    }
});

export default inputStyles;