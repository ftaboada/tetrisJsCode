import { getClassName, makeGrid, createGame, draw, erase, freeze, control, drawNext } from './helpers'
import './style.scss'
import song from './sounds/song.mp3'
import gameOver from './sounds/gameOver.mp3'
import p from './sounds/pause.mp3'
import score from './sounds/score.mp3'

//GAME ELEMENTS
let gameInterval
const DomBoard = document.getElementById('board')
const NextDisplayer = document.getElementById('next-display')
const Board = makeGrid
const displayer = new Array(50).fill('min-cell')

const { getcurrentTetro,
    getcurrentXPos,
    setcurrentYPos,
    gettetrominoeIndex,
    gameStart,
    getgameStart,
    newTetro,
    setcurrentXPos,
    getGameSpeed,
    width,
    nextRotation,
    pauseGame,
    unPauseGame,
    addLine,
    getscore,
    isNewTetro,
    setNewTetro,
    setGameOver,
    gameIsPause,
    getNextTetro,
    getNextTetroIdx,
} = createGame
Board.grid.forEach((element) => {
    const newElement = document.createElement('div')
    const childElement = document.createElement('div')
    newElement.classList.add('cell')
    newElement.classList.add(getClassName(element))
    newElement.appendChild(childElement)
    DomBoard.appendChild(newElement)
})
const takes = new Array(10).fill('taken')
takes.forEach((element) => {
    const newElement = document.createElement('div')
    newElement.classList.add(element)
    newElement.classList.add('cell')
    newElement.setAttribute('id', element);

    DomBoard.appendChild(newElement)
})
displayer.forEach((element) => {
    const newElement = document.createElement('div')
    newElement.classList.add(element)
    NextDisplayer.appendChild(newElement)
})
const themeSong = new Audio(song)
themeSong.volume = 0.02
themeSong.loop = true
const gameOverSound = new Audio(gameOver)
gameOverSound.volume = 0.05
const pauseSound = new Audio(p)
pauseSound.volume = 0.05
const scoreSound = new Audio(score)
scoreSound.volume = 0.05
let DomCells = Array.from(document.querySelectorAll('.cell'))
const NextDomCells = Array.from(document.querySelectorAll('.min-cell'))
const gameLoop = () => {
    if (gameIsPause()) return

    if (isNewTetro()) {
        draw(DomCells, getcurrentTetro, getcurrentXPos, gettetrominoeIndex)
        setNewTetro(false)
        isGameOver()
        return
    }
    if (getgameStart()) {

        erase(DomCells, getcurrentTetro, getcurrentXPos, gettetrominoeIndex)
        checkForPoints()
        setcurrentYPos()
        draw(DomCells, getcurrentTetro, getcurrentXPos, gettetrominoeIndex)
        freeze(getcurrentTetro, getcurrentXPos, width, newTetro, gettetrominoeIndex, NextDomCells, getNextTetro, getNextTetroIdx)
        isGameOver()
    }
}

const handleStartClick = () => {
    if (!getgameStart()) {
        gameStart()
        themeSong.play()
        gameInterval = setInterval(gameLoop, getGameSpeed())
        draw(DomCells, getcurrentTetro, getcurrentXPos, gettetrominoeIndex)
        drawNext(NextDomCells, getNextTetro(), getNextTetroIdx())
        writePause()
        return
    }
    if (gameIsPause()) {
        themeSong.play()
        pauseSound.play()
        unPauseGame()
        writePause()
        return
    }
    if (getgameStart() && !gameIsPause()) {
        themeSong.pause()
        pauseSound.play()
        pauseGame()
        writeStart()
        return
    }
}


document.addEventListener('keyup', (e) => control(e, DomCells, getcurrentTetro, getcurrentXPos, width, setcurrentXPos, gettetrominoeIndex, nextRotation, gameLoop, gameIsPause))

if (gameIsPause()) {
    clearInterval(gameInterval)
}
//score Element
const scoreSpanEl = document.getElementById('score-display')
const writeScore = () => {
    scoreSpanEl.innerText = getscore().toString()
}
// CHECKS AND CLEAN THE GRID
const checkForPoints = () => {
    const len = DomCells.length - width
    for (let idx = 0; idx < len; idx += width) {
        const row = new Array(width).fill('nothing').map((e, i) => i + idx)
        const isALine = row.every(index => DomCells[index].classList.contains('taken'))
        if (isALine) {

            for (let index of row) {
                DomCells[index].classList.remove('taken', 'o-cell', 'i-cell', 'l-cell', 'j-cell', 's-cell', 'z-cell', 't-cell')
            }
            const newRow = DomCells.splice(idx, width)
            DomCells = [...newRow, ...DomCells]
            DomCells.forEach((DomNode) => {
                DomBoard.appendChild(DomNode)
            })
            addLine()
            writeScore()
            scoreSound.play()
        }
    }
}
const isGameOver = () => {
    if (DomCells[getcurrentXPos() + width + 1].classList.contains('taken')) {
        setGameOver()
        writeStart()
        themeSong.pause()
        themeSong.fastSeek = 0
        DomCells.forEach((cell, i) => {
            if (i > 200) return
            cell.classList.remove('taken', 'o-cell', 'i-cell', 'l-cell', 'j-cell', 's-cell', 'z-cell', 't-cell')
        })
        drawNext(NextDomCells, null, null, true)
        gameOverSound.play()

    }
}


// UI ELEMENTS
const startButtonEl = document.getElementById('start-game-button')
startButtonEl.addEventListener('click', handleStartClick)
const writePause = () => startButtonEl.innerText = 'Pause'
const writeStart = () => startButtonEl.innerText = 'Start'

