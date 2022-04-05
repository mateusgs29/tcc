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
    marginBottom: 5,
    paddingHorizontal: 20,
    textAlign: "center"
  },
  subtitle: {
    color: colors.blackLight,
    marginBottom: 15
  },
  input: {
    width: "90%",
    backgroundColor: "white",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
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
  btnDelete: {
    backgroundColor: colors.red
  },
  btnCancel: {
    backgroundColor: colors.gray,
    marginTop: 10
  },
  textBtnDelete: {
    color: "#fff",
    fontWeight: "bold"
  },
  textBtnCancel: {
    fontWeight: "bold"
  },
  textError: {
    marginTop: 10,
    color: colors.red,
    fontWeight: "bold",
    paddingVertical: 2,
  }
})

export default styles