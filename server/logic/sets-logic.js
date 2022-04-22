export const getProcessOfSet = (data) => {
  if(data.cards) {
    const process = data.cards.reduce((acc, card) => {
      return acc + card.process
    }, 0)
    return {
      ...data,
      process: process
    }
  }
}