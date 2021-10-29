// MAKE THE GAME BOARD

const columns = 10
const rows = 20

const Grid = () => new Array(columns * rows).fill(0)

export const makeGrid = (function () {
    let _grid = Grid()
    let _calls = 0
    return {
        get grid() {
            return _grid
        },
        set grid(newBoard) {
            _calls = _calls + 1
            _grid = newBoard
        },
        get calls() {
            return _calls
        }
    }
})()