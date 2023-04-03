import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: "flex-end",
  },

  buttonRoom: {
    marginHorizontal: 10,
    marginVertical: 10,
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 10,
    backgroundColor: "#ED4C67",
    borderRadius: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  buttonCreate: {
    backgroundColor: "#ED4C67",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  textInput: {
    marginVertical: 30,
    width: 200
  }
});

export default styles;
