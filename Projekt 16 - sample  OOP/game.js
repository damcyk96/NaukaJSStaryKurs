class Game {
  constructor(start) {
    this.stats = new Statistics();
    this.wallet = new Wallet(start);

    document
      .getElementById("start")
      .addEventListener("click", this.startGame.bind(this));

    this.spanWallet = document.querySelector(".panel span.wallet");
    this.colorsArray = [...document.querySelectorAll(`div.color`)];
    this.inputBid = document.getElementById("bid");
    this.spanResult = document.querySelector('.score span.result');
    this.spanGames = document.querySelector('.score span.number');
    this.spanWins = document.querySelector('.score span.win');
    this.spanLosses = document.querySelector('.score span.loss');

    this.render();
  }

  render(
    colors = [``, ``, ``],
    money = this.wallet.getWalletValue(),
    result = ``,
    stats = [0, 0, 0],
    bid = 0,
    wonMoney = 0
  ) {
    this.colorsArray.forEach((board, i) => {
      board.style.backgroundColor = colors[i];
    })
    if (result) {
      result = `Wygrałeś ${wonMoney}PLN. `;
    } else if (!result && result !== "") {
      result = `Przegrałeś ${bid}PLN. `;
    }
    this.spanResult.textContent = result;
    this.spanWallet.textContent = money;
    this.spanGames.textContent = stats[0];
    this.spanWins.textContent = stats[1];
    this.spanLosses.textContent = stats[2];
    this.inputBid.value = '';
  }

  startGame() {
    if (this.inputBid.value < 1) return alert(`Kwota zbyt mała`);
    const bid = Math.floor(this.inputBid.value);
    if (!this.wallet.checkCanPlay(bid)) {
      return alert(`za mało środków lub wartosc nieprawidlowa`);
    }
    this.wallet.changeWallet(bid, `-`);
    this.draw = new Draw();
    const colors = this.draw.getDrawResult();
    const win = Result.checkResult(colors);
    const wonMoney = Result.moneyWinInGame(win, bid);
    this.wallet.changeWallet(wonMoney, `+`);
    this.stats.addGameToStats(win, bid);

    this.render(
      colors,
      this.wallet.getWalletValue(),
      win,
      this.stats.showGameStats(),
      bid,
      wonMoney
    );
  }
}
