import React, { useState } from 'react'
import { cardInterface } from 'interfaces'

export const useCardHooks = () => {
  const [cards, setCards] = useState<cardInterface[]>([])

  const removeCard = (card: cardInterface) => {
    const isCardExisted = cards.find((cd: cardInterface) => cd.cardNumber === card.cardNumber)

    if (!isCardExisted) {
      return false
    }

    const updatedCards = cards.filter((cd: cardInterface) => card.cardNumber !== cd.cardNumber)
    setCards(updatedCards)
    return true
  }

  const addNewCard = (card: cardInterface) => {
    const isCardExisted = cards.find((cd: cardInterface) => cd.cardNumber === card.cardNumber)

    if (isCardExisted) {
      return false
    }

    const updatedCards: cardInterface[] = cards.concat(card)
    setCards(updatedCards)
    return true
  }

  return {
    cards,
    removeCard,
    addNewCard
  }
}