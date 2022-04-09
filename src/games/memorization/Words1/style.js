import { StyleSheet } from "react-native";
import { colors } from "../../../../styleGlobal";

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
  },
  containerGame: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  listWords: {
    width: "100%",
    marginVertical: 20
  },
  word: {
    textAlign: "center",
    fontSize: 16,
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    paddingVertical: 10
  },
  btnMarginTop: {
    marginTop: 15
  }
})

export default styles