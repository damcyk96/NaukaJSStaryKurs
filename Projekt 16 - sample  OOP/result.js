class Result {
    static moneyWinInGame(result, bid) {
        if(result)
        {
            return bid*3
        }
        else return 0;
    }

    static checkResult(draw) {
        if (draw[0] === draw[1] && draw[1] === draw[2]
            || 
            draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2])
            return true;
            else return false;
    }
}