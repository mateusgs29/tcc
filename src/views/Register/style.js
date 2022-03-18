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
  btnRegister: {
    backgroundColor: colors.purplePrimary,
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 30
  },
  textBtnRegister: {
    color: colors.white,
    fontWeight: "bold"
  },
  textLogin: {
    marginTop: 30,
    color: colors.black
  },
  linkLogin: {
    fontSize: 16,
    color: colors.purpleSecondary,
    textDecorationLine: "underline"
  },
  textError: {
    marginTop: 10,
    color: "#e63946",
    fontWeight: "bold",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5
  }
})

export default styles