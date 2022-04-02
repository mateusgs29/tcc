import { StyleSheet, Dimensions } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { colors } from "../../../../styleGlobal";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.purplePrimary,
    marginBottom: 20
  },
  input: {
    width: "90%",
    backgroundColor: "white",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    color: colors.black
  },
  inputDisabled: {
    color: colors.blackLight
  },
  containerCheckbox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  checkboxBase: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.purpleSecondary,
    backgroundColor: 'transparent'
  },
  checkboxChecked: {
    backgroundColor: colors.purpleSecondary
  },
  checkboxText: {
    marginLeft: 5,
    color: colors.black
  },
  btn: {
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 20
  },
  btnEditable: {
    backgroundColor: colors.purpleSecondary,
  },
  btnSave: {
    backgroundColor: colors.green
  },
  btnCancel: {
    backgroundColor: colors.gray,
    marginTop: 10
  },
  textBtnEditable: {
    color: "#fff",
    fontWeight: "bold"
  },
  textBtnBlack: {
    fontWeight: "bold",
    color: colors.black
  },
  textError: {
    marginTop: 10,
    color: colors.red,
    fontWeight: "bold",
    paddingVertical: 2,
  }
})

export default styles