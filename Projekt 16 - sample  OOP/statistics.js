class Statistics {
    constructor() {
        this.gameResults = [{win: true, bid: 2}];
    }

    addGameToStats(win, bid) {
        let gameResult = {
            // win: win,
            // bid: bid
            win,
            bid
        } 
        this.gameResults.push(gameResult)
    }

    showGameStats() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win)
        //return [games, liczbaWygranych, liczbaPorazek]
    }

}

const stats = new Statistics()