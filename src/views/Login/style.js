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
  containerLinkRegister: {
    flexDirection: "row",
    marginTop: 25,
    alignItems: "center"
  },
  textRegister: {
    color: colors.black
  },
  btnRegister: {
    marginLeft: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.purpleSecondary
  },
  textBtnRegister: {
    fontSize: 16,
    color: colors.purpleSecondary,
  },
  textError: {
    marginTop: 10,
    color: colors.red,
    fontWeight: "bold",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5
  }
})

export default styles