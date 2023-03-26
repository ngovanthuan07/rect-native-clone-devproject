import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        height: '6%',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textLeft: {
        fontWeight: "bold",
        fontSize: 20
    }, 
    leftNav: {
        flex: 1
    },
    rightNav: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})

export default styles;