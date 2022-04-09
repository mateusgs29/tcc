import { StyleSheet } from "react-native";
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
  marginTopBtn: {
    marginTop: 10
  },
  textError: {
    marginTop: 10,
    color: colors.red,
    fontWeight: "bold",
    paddingVertical: 2,
  }
})

export default styles