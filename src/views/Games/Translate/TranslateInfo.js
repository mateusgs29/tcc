import Words1 from "../../../games/translate/Words1"
import Phrases1 from "../../../games/translate/Phrases1"

const translateGamesData = [
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
    name: "Frases",
    cod: "phrases1",
    component: Phrases1,
    difficult: "medium",
    qtdResult: 2,
    options: {
      qtdPhrases: 2
    }
  },
]

export default translateGamesData