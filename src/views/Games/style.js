import { StyleSheet } from "react-native"
import { colors } from "../../../styleGlobal"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.purplePrimary
  }, 
  optionGame: {
    backgroundColor: colors.purpleSecondary,
    width: "80%",
    marginTop: 30,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  textOptionGame: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  }
})

export default styles