import HouseWords1 from "../../../games/memorization/HouseWords1"
import Orders1 from "../../../games/memorization/Orders1"
import Words1 from "../../../games/memorization/Words1"

const memorizationGamesData = [
  {
    name: "Palavras",
    cod: "words1",
    component: Words1,
    difficult: "easy",
    qtdResult: 10,
    options: {
      qtdWords: 10
    }
  },
  {
    name: "Palavras da casa",
    cod: "houseWords1",
    component: HouseWords1,
    difficult: "medium",
    qtdResult: 12,
    options: {
      qtdWordsGroup: 4,
    }
  },
  {
    name: "Pedidos",
    cod: "orders1",
    component: Orders1,
    difficult: "hard",
    qtdResult: 5,
    options: {
      qtdOrders: 5
    }
  }
]

export default memorizationGamesData