import { erase, draw, isCollition } from ".."
import movement from '../../sounds/movement.mp3'
import block from '../../sounds/block.mp3'
//CONNECT THE KEYS TO ACTION FUNCTIONS, IT HAS A EVENT GUN THAT DECIDES WHAT FUNCTION CALL
const movementSound = new Audio(movement)
movementSound.volume = 0.03
const blockSound = new Audio(block)
blockSound.volume = 0.04


export const moveL = (DomCells, currentTetro, currentPosition, width, setPos, currentTetroIdx) => {
    const isAtTheLEdge = currentTetro().some(point => (point + currentPosition()) % width === 0)
    const isNextTaken = currentTetro().some(point => DomCells[point + currentPosition() - 1].classList.contains('taken'))
    if (!isAtTheLEdge && !isNextTaken) {
        const collition = isCollition(DomCells, currentTetro, currentPosition, width)
        erase(DomCells, currentTetro, currentPosition, currentTetroIdx)
        setPos(false)
        if (collition) {
            setPos(true)

        } else movementSound.play()
        draw(DomCells, currentTetro, currentPosition, currentTetroIdx)
        return
    }
    blockSound.play()

}
export const moveR = (DomCells, currentTetro, currentPosition, width, setPos, currentTetroIdx) => {
    const isAtTheREdge = currentTetro().some(point => (point + currentPosition()) % width === width - 1)
    const isNextTaken = currentTetro().some(point => DomCells[point + currentPosition() + 1].classList.contains('taken'))
    if (!isAtTheREdge && !isNextTaken) {
        const collition = isCollition(DomCells, currentTetro, currentPosition, width)
        erase(DomCells, currentTetro, currentPosition, currentTetroIdx)
        setPos(true)
        if (collition) {
            setPos(false)

        } else {
            movementSound.play()
        }
        draw(DomCells, currentTetro, currentPosition, currentTetroIdx)
        return
    }
    blockSound.play()
}
export const rotate = (DomCells, currentTetro, currentPosition, currentTetroIdx, nextRotation, width) => {
    erase(DomCells, currentTetro, currentPosition, currentTetroIdx)
    nextRotation(true)
    const isAtTheREdge = currentTetro().some(point => (point + currentPosition()) % width === width)
    const isAtTheLEdge = currentTetro().some(point => (point + currentPosition()) % width === 0)
    if (isAtTheLEdge || isAtTheREdge) { nextRotation(false); blockSound.play() } else { movementSound.play() }
    draw(DomCells, currentTetro, currentPosition, currentTetroIdx)
}

export const control = (e, DomCells, currentTetro, currentPosition, width, setPos, currentTetroIdx, nextRotation, gameLoop, gameIsPause) => {

    if (gameIsPause()) return
    if (e.keyCode === 37 || e.keyCode === 65) {
        moveL(DomCells, currentTetro, currentPosition, width, setPos, currentTetroIdx)
    }
    if (e.keyCode === 39 || e.keyCode === 68) {
        moveR(DomCells, currentTetro, currentPosition, width, setPos, currentTetroIdx)
    }
    if (e.keyCode === 38 || e.keyCode === 87) {
        rotate(DomCells, currentTetro, currentPosition, currentTetroIdx, nextRotation, width)
    }
    if (e.keyCode === 40 || e.keyCode === 83) {
        gameLoop()
        movementSound.play()
    }

}