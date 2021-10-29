export const getRandomNumber = (range = 4, start = 0) => {
    const randomNumber = Math.round((Math.random() * range) + start)
    if (randomNumber > range) {
        getRandomNumber(range, start)
    } else {
        return randomNumber
    }
}