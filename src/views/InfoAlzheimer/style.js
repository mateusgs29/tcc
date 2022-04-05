import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../styleGlobal";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 15,
  },
  title: {
    fontSize: 24,
    color: colors.purplePrimary,
    fontWeight: "bold"
  },
  text: {
    textAlign: "justify",
    color: colors.blackLight,
    fontSize: 16,
    marginBottom: 5
  },
  collapse: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    paddingVertical: 5
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5
  }
})

export default styles