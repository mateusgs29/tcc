import HouseWords1 from "../../../games/memorization/HouseWords1"
import Words1 from "../../../games/memorization/Words1"

const memorizationGamesData = [
  {
    name: "Palavras 01",
    cod: "words1",
    component: Words1,
    difficult: "easy",
    qtdResult: 10,
    options: {
      qtdWords: 10
    }
  },
  {
    name: "Palavras da casa 01",
    cod: "houseWords1",
    component: HouseWords1,
    difficult: "medium",
    qtdResult: 12,
    options: {
      qtdWordsGroup: 4,
    }
  }
]

export default memorizationGamesData