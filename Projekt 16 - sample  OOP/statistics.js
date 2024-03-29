class Statistics {
  constructor() {
    this.gameResults = [];
  }

  addGameToStats(win, bid) {
    let gameResult = {
      // win: win,  // to samo
      // bid: bid
      win,
      bid
    };
    this.gameResults.push(gameResult);
  }

  showGameStats() {
    let games = this.gameResults.length;
    let wins = this.gameResults.filter(result => result.win).length;
    let losses = this.gameResults.filter(result => !result.win).length;
    return [games, wins, losses];
  }
}
