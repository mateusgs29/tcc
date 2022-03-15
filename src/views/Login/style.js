import { StyleSheet } from "react-native";
import { colors } from '../../../styleGlobal'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center"
  },
  imageLogo: {
    width: 120,
    height: 120
  },  
  title: {
    color: colors.purplePrimary,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 30,
    marginBottom: 15
  },
  input: {
    width: "90%",
    backgroundColor: "white",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  btnLogin: {
    backgroundColor: colors.purplePrimary,
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 30
  },
  textBtnLogin: {
    color: colors.white,
    fontWeight: "bold"
  },
  textRegister: {
    marginTop: 30,
    color: colors.black
  },
  linkRegister: {
    fontSize: 16,
    color: colors.purpleSecondary,
    textDecorationLine: "underline"
  }
})

export default styles