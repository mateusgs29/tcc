import { StyleSheet } from "react-native"
import { colors } from "../../../../../styleGlobal"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.purplePrimary,
    textAlign: "center"
  }, 
  game: {
    backgroundColor: colors.gray,
    width: "85%",
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 5,
    borderLeftWidth: 5,
    borderLeftColor: colors.purpleSecondary,
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  gameName: {
    color: colors.black,
    fontSize: 18,
    fontWeight: "bold",
  },
  difficult: {
    marginTop: 5,
    display: "flex",
    width: 80,
    backgroundColor: colors.white,
    textAlign: "center",
    borderRadius: 50,
    fontWeight: "bold",
  },
  easyDifficult: {
    color: colors.white,
    backgroundColor: colors.green,
  },
  mediumDifficult: {
    color: colors.white,
    backgroundColor: colors.orange
  },
  hardDifficult: {
    color: colors.white,
    backgroundColor: colors.red,
  },
  gameDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  gameResult: {
    fontSize: 14,
    marginRight: 5,
  },
  containerLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default styles