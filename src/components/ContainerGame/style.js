import { StyleSheet } from "react-native";
import { colors } from "../../../styleGlobal";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.purplePrimary
  },
  details: {
    textAlign: "justify",
    color: colors.blackLight,
    fontSize: 16,
    marginBottom: 5
  },
  result: {
    fontSize: 40,
    fontWeight: "bold",
    color: colors.black
  }
})

export default styles