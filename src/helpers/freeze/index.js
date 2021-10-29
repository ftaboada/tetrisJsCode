import { draw, drawNext } from ".."

//FREEZE A COLLITION DETECTECTION, HERE YOU CHANGE THE STATE OF A TETROMINOE IF IT IS COLLIDE WITH A 'TAKEN' CELL
export const freeze = (currentTetro, currentPosition, width, startNewTetro, currentTetroIdx, NextDomCells, getNextTetro, getNextTetroIdx) => {
    const DomCells = Array.from(document.querySelectorAll('.cell'))
    const isDone = isCollition(DomCells, currentTetro, currentPosition, width)
    const current = currentTetro().map((e) => e + currentPosition())
    if (isDone && !Array.isArray(currentTetro)) {

        for (const i of current) {
            DomCells[i].classList.add('taken')
        }
        startNewTetro()
        const newTetro = currentTetro()
        draw(DomCells, newTetro, currentPosition(), currentTetroIdx())
        drawNext(NextDomCells, getNextTetro(), getNextTetroIdx())
    }
}

export const isCollition = (DomCells, currentTetro, currentPosition, width, direction = false) => {
    const current = currentTetro().map((e) => e + currentPosition())
    const isDone = current.some(e => { return DomCells[width + e].classList.contains('taken') })
    return isDone
}
