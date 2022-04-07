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