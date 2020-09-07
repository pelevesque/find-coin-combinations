'use strict'

const f = require('./findCoinCombinations')

let coins = [1, 2, 5]
let sum = 18

// get best combination
const combo = f.findBestCombination(coins, sum)
console.log(combo)

// get all combinations
const combos = f.findCombinations(coins, sum)
console.log(combos)
