import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../styleGlobal";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    margin: 10,
  }, 
  textBtn: {
    textAlign: "center",
    fontSize: 16
  },
  textBtnDelete: {
    textAlign: "center",
    fontSize: 16,
    color: colors.red
  }
})

export default styles