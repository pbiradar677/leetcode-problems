// 2225) You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

// Return a list answer of size 2 where:

// answer[0] is a list of all players that have not lost any matches.
// answer[1] is a list of all players that have lost exactly one match.
// The values in the two lists should be returned in increasing order.

// Note:

// You should only consider the players that have played at least one match.
// The testcases will be generated such that no two matches will have the same outcome.
/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  let lossesCount = {};

  for (let [winner, loser] of matches) {
    // Increment the loss count for the loser
    if (!lossesCount[loser]) {
      lossesCount[loser] = 1;
    } else {
      lossesCount[loser]++;
    }

    // If the winner is not in the lossesCount, initialize with 0 losses
    if (!lossesCount[winner]) {
      lossesCount[winner] = 0;
    }
  }

  let noLossPlayers = [];
  let oneLossPlayers = [];

  // Iterate through the lossesCount dictionary to identify players with zero or one loss
  for (let player in lossesCount) {
    if (lossesCount[player] === 0) {
      noLossPlayers.push(+player);
    } else if (lossesCount[player] === 1) {
      oneLossPlayers.push(+player);
    }
  }

  // Sort the result arrays in increasing order
  noLossPlayers.sort((a, b) => a - b);
  oneLossPlayers.sort((a, b) => a - b);

  return [noLossPlayers, oneLossPlayers];
};

let matches = [
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [4, 9],
  [10, 4],
  [10, 9],
];

console.log("Winners and exactly one losses", findWinners(matches));
