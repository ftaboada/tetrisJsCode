import { getClassName } from ".."
//THIS FUNCTIONS DRAW AND CLEAN THE TETROMINOES, JUST THE ONE IS COTROLLED BY DE PLAYER
export const draw = (DomCells, currentTetro, currentPosition, currentTetroIdx) => {
    if (!Array.isArray(currentTetro)) {
        return DomCells.forEach((e, idx) => {
            if (currentTetro().map(t => t + currentPosition()).includes(idx)) {
                const className = getClassName(currentTetroIdx() + 1)
                e.classList.add(className)
            }
            return e
        })
    }
}
export const erase = (DomCells, currentTetro, currentPosition, currentTetroIdx) => {
    if (!Array.isArray(currentTetro)) {
        return DomCells.forEach((e, idx) => {
            if (currentTetro().map(t => t + currentPosition()).includes(idx)) {
                const className = getClassName(currentTetroIdx() + 1)
                e.classList.remove(className)
                return e
            }
            return e
        })
    }
}

export const drawNext = (NextDomCells, nextTetro, nextTetroIdx, justErase = false) => {
    //erase
    return NextDomCells.forEach((cell, idx) => {
        cell.classList.remove('o-cell', 'i-cell', 'l-cell', 'j-cell', 's-cell', 'z-cell', 't-cell')
        if (justErase) return
        //draw
        if (nextTetro.map(t => t + 13).includes(idx)) {
            const className = getClassName(nextTetroIdx + 1)
            cell.classList.add(className)
        }
    })

}