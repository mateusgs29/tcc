import { StyleSheet, StatusBar } from "react-native";
import { colors } from "../../../styleGlobal";

const styles = StyleSheet.create({
  btn: {
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 30
  },
  textBtn: {
    fontWeight: "bold",
  },
  purpleBtn: {
    backgroundColor: colors.purpleSecondary
  },
  purpleTextBtn: {
    color: colors.white,
  },
  greenBtn: {
    backgroundColor: colors.green
  },
  greenTextBtn: {
    color: colors.white
  },
  redBtn: {
    backgroundColor: colors.red
  },
  redTextBtn: {
    color: colors.white
  },
  grayBtn: {
    backgroundColor: colors.gray,
  },
  grayTextBtn: {
    color: colors.black
  },
  btnWithIcon: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-evenly"
  }
})

export default styles