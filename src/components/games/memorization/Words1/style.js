import { StyleSheet } from "react-native";
import { colors } from "../../../../../styleGlobal";

const styles = StyleSheet.create({
  containerDetails: {
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
  }
})

export default styles