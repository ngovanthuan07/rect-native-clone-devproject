import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    containerOne: {
        width: 100,
        height: 140,
        marginHorizontal: 5,
        marginVertical: 5,
        borderRadius: 5,
    },
    imageOne: {
        width: 100,
        height: 100,
        borderRadius: 5,
        backgroundColor: "black",
    },

    imageTwo: {
        width: 100,
        height: 45,
        borderRadius: 5,
        backgroundColor: "black",
    },


    containerFour: {
        width: 100,
        height: 140,
        marginHorizontal: 5,
        marginVertical: 5,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        flexWrap: 'wrap',
    },
    imageFour: {
        width: 45,
        height: 45,
        borderRadius: 5,
        backgroundColor: "black",
    },

})

export default styles;