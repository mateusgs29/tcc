import { StyleSheet } from "react-native";
import { colors } from "../../../../styleGlobal";

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
    marginBottom: 5,
    marginTop: 30
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
  containerOrder: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.gray
  },
  avatarOrder: {
    width: 70,
    height: 70,
    marginVertical: 10,
    marginRight: 15
  },
  order: {
    fontSize: 16,
  },
  btnMarginVertical: {
    marginVertical: 20
  },
  containerAnswer: {
    flexDirection: "row",
    width: "100%"
  },
  inputAnswers: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  result: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.black,
    textAlign: "center"
  },
  containerInput: {
    width: "100%"
  },
  label: {
    fontSize: 16
  }
})

export default styles