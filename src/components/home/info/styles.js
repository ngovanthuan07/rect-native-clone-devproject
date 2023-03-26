import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        height: '40%',
        flexDirection: 'column',
        
    },
    containerBackground: {
        width: '100%',
        height: '70%',
        alignItems: 'center',
    },
    background: {
        width: '95%',
        height: '100%',
        borderRadius: 10,
        backgroundColor: '#ED4C67',
    },
    containerImage: {
        alignItems: 'center',
        top: 60,
        left: 30,
        position: 'absolute',
    },
    image: {
        width: 70,
        height: 70,
        backgroundColor: 'black',
        borderRadius: 50,
  
    },  
    textUserName: {
        fontSize: 16,
        color: 'white',
    },
    bottomContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    containerNumber: {
        alignItems: 'center',
    },

    textNumber: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    button: {
        padding: 10,
        backgroundColor: '#ED4C67',
        borderRadius: 10,
    },
    bottomText: {
        color: 'white',
        fontWeight: 'bold',
    }
})

export default styles;