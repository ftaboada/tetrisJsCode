import { tetrominoes } from "../../constants"
import { getRandomNumber } from ".."

//ALL GAME VARIABLES, PRIVATE AND WITH ALL FUNCTIONS NEEDED TO IMPLEMENT THE GAME
export const createGame = (function () {
    let _gameStart = false
    let _score = null
    let _sound = false
    let _music = false
    let _gameOver = true
    const _width = 10
    let _currentXPos = 4
    let _tetrominoeIndex = getRandomNumber(tetrominoes.length - 1)
    let _currentTetro = null
    let _gameSpeed = 1000
    let _nextTetro = null
    let _nextTetroIdx = null
    let _id = null
    let _newTetro = false
    let _pause = false
    return {
        getgameStart: () => { return _gameStart },
        getscore: () => _score,
        getsound: () => _sound,
        getmusic: () => _music,
        getgameOver: () => _gameOver,
        getcurrentXPos: () => _currentXPos,
        gettetrominoeIndex: () => _tetrominoeIndex,
        getcurrentTetro: () => _currentTetro,
        getGameSpeed: () => _gameSpeed,
        get width() { return _width },
        getNextTetro: () => _newTetro,
        getNextTetroIdx: () => _nextTetroIdx,
        gameStart: () => {
            _gameStart = !_gameStart
            if (_gameStart) {
                _id = getRandomNumber(3)
                const nextId = getRandomNumber(3)
                const nextTetro = getRandomNumber(tetrominoes.length - 1)
                _gameOver = false
                _score = 0
                _currentTetro = tetrominoes[_tetrominoeIndex][_id]
                _nextTetro = tetrominoes[nextTetro][nextId]
                _nextTetroIdx = nextTetro
            }
            return _gameStart
        },
        gameOver: () => {
            if (_gameStart && !_gameOver) {
                _gameOver = true
            }

        },
        setsound: () => {
            _sound = !_sound
        },
        setmusic: () => {
            _music = !_music
        },
        addLine: () => {
            _score += 10
            return
        },
        setcurrentXPos: (direction) => {
            if (direction) {
                _currentXPos += 1
            } else {
                _currentXPos -= 1
            }
        },
        setcurrentYPos: () => {
            _currentXPos += _width
        },
        newTetro: () => {
            _currentXPos = 4
            _currentTetro = _nextTetro
            _tetrominoeIndex = _nextTetroIdx
            _newTetro = true
            const newTetro = getRandomNumber(tetrominoes.length - 1)
            const newId = getRandomNumber(3)
            _nextTetro = tetrominoes[newTetro][newId]
            _nextTetroIdx = newTetro

        },
        getNextTetro: () => {
            return _nextTetro
        },
        pauseGame: () => {
            _pause = true
        },
        unPauseGame: () => {
            _pause = false
        },
        isNewTetro: () => {
            return _newTetro
        },
        setNewTetro: () => {
            _newTetro = false
        },
        nextRotation: (direction) => {
            if (direction) {
                const newId = _id + 1 > tetrominoes[_tetrominoeIndex].length - 1 ? 0 : _id + 1
                _id = newId
                _currentTetro = tetrominoes[_tetrominoeIndex][newId]

            } else {
                const newId = _id - 1 < 0 ? tetrominoes[_tetrominoeIndex].length - 1 : _id - 1
                _id = newId
                _currentTetro = tetrominoes[_tetrominoeIndex][_id]
            }
        },
        setGameOver: () => {
            _gameOver = true
            _currentXPos = 4
            _tetrominoeIndex = getRandomNumber(tetrominoes.length - 1)
            _currentTetro = null
            _gameSpeed = 1000
            _nextTetro = null
            _nextTetroIdx = null
            _id = null
            _newTetro = false
            _gameStart = false
            _score = null
        },
        gameIsPause: () => {
            return _pause
        }
    }
})()