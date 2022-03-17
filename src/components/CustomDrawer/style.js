import { StyleSheet, StatusBar } from "react-native";
import { colors } from "../../../styleGlobal";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  profile: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 15,
    marginBottom: -15,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.blackLight
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black
  },
  userEmail: {
    color: colors.blackLight
  },
  textLogout: {
    textAlign: "center",
    margin: 20,
  },
  teste: {
    backgroundColor: "#0f0",
    color: "red"
  }
})

export default styles