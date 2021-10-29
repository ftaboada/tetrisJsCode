const width = 10

const o = [
    [1, 2, width + 1, width * 1 + 2],
    [1, 2, width + 1, width * 1 + 2],
    [1, 2, width + 1, width * 1 + 2],
    [1, 2, width + 1, width * 1 + 2],
]
const l = [
    [1, width + 1, width * 2 + 1, width * 2 + 2],
    [0, 1, 2, width],
    [0, 1, width + 1, width * 2 + 1],
    [width, width + 1, width + 2, 2]
]
const j = [
    [1, width + 1, width * 2, width * 2 + 1],
    [width, width + 1, width + 2, 0],
    [1, 2, width * 1 + 1, width * 2 + 1,],
    [0, 1, 2, width + 2]
]
const i = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [0, 1, 2, 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [0, 1, 2, 3],
]
const s = [
    [1, 2, width, width + 1],
    [1, width + 1, width + 2, width * 2 + 2],
    [1, 2, width, width + 1],
    [1, width + 1, width + 2, width * 2 + 2]
]
const z = [
    [0, 1, width + 1, width + 2],
    [1, width + 1, width, width * 2],
    [0, 1, width + 1, width + 2],
    [1, width + 1, width, width * 2],
]
const t = [
    [0, 1, 2, width + 1],
    [1, width + 1, width * 2 + 1, width],
    [1, width, width + 1, width + 2],
    [1, width + 1, width * 2 + 1, width + 2],
]

export const tetrominoes = [i, o, l, j, z, s, t]