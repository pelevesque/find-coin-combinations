'use strict'

let coins, sequ, numCoins, sum, coinType

function init(c) {
  coins = c
  sequ = []
  numCoins = 0
  sum = 0
  coinType = 0
}

function addCoin() {
  sequ[numCoins] = coinType
  sum += coins[coinType]
  ++numCoins
}

function remCoin() {
  sum -= coins[sequ[numCoins - 1]]
  --numCoins
}

function incrSeq() {
  while(true) {
    if (numCoins === 1) return false
    remCoin()
    coinType = sequ[numCoins - 1] + 1
    if (coinType < coins.length) {
      remCoin()
      addCoin()
      return true
    }
  }
}

function findCombinations(coins, targetSum) {
  init(coins)
  const found = []
  while(true) {
    if (sum < targetSum) {
      addCoin()
    }
    else {
      if (sum === targetSum) {
        found.push(
          sequ
            .filter((_, i) => i < numCoins)
            .map(e => coins[e])
        )
      }
      if (!incrSeq()) {
        break
      }
    }
  }
  return found
}

function findBestCombination(coins, targetSum) {
  const combos = findCombinations(coins, targetSum)
  return combos[combos.length - 1]
}

module.exports = {
  findCombinations,
  findBestCombination,
}
