class Statistics{
    constructor(){
        this.gameResults = [{
            win: true,
            bid: 2
        },
        {
            win: false,
            bid: -10
        }];
    }
    addGameToStatistics(win, bid){
        let gameResult = {
            win,
            bid
        }
        console.log(gameResult)
        this.gameResults.push(gameResult);
    }

    showGameStatistics(){
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(gr => gr.win ).length
        let losses = this.gameResults.filter(gr => !gr.win ).length

        return [games, wins, losses]
    }
}

// const firstStat = new Statistics()