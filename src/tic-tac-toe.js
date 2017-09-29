class TicTacToe {
    constructor() {
    	this.playField = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ]
        this.currentSymbol = 0;
        this.turn = 0;
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
    	return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.playField[rowIndex][columnIndex] !== null) {
            return ;
        }

            this.playField[rowIndex][columnIndex] = this.currentSymbol;
            this.turn++;
 
 

            if (this.playField[0][0] === this.playField[0][1] && this.playField[0][0] === this.playField[0][2] && this.playField[0][0] !== null ||
                this.playField[1][0] === this.playField[1][1] && this.playField[1][0] === this.playField[1][2] && this.playField[1][0] !== null  ||
                this.playField[2][0] === this.playField[2][1] && this.playField[2][0] === this.playField[2][2] && this.playField[2][0] !== null  ||
                this.playField[0][0] === this.playField[1][0] && this.playField[0][0] === this.playField[2][0] && this.playField[0][0] !== null  ||
                this.playField[0][1] === this.playField[1][1] && this.playField[0][1] === this.playField[2][1] && this.playField[0][1] !== null  ||
                this.playField[0][2] === this.playField[1][2] && this.playField[0][2] === this.playField[2][2] && this.playField[0][2] !== null  ||
                this.playField[0][0] === this.playField[1][1] && this.playField[0][0] === this.playField[2][2] && this.playField[0][0] !== null  ||
                this.playField[0][2] === this.playField[1][1] && this.playField[0][2] === this.playField[2][0] && this.playField[0][2] !== null  ) {
                this.winner = this.currentSymbol;
                }   
              this.currentSymbol = (this.currentSymbol == 0) ? 1 : 0; 
    }


    isFinished() {
    	if(this.getWinner() !== null || this.isDraw() === true) {
            return true;
        } 
        else{
            return false;
        }
    }

    getWinner() {
    	if(this.winner != null) {
            return this.winner;
        } 
        else{
            return null;
        }

    }

    noMoreTurns() {
    	if(this.turn === 9){
            return true;
        } 
        else {
            return false;
        }
    }

    isDraw() {
    	if (this.noMoreTurns() === true && this.getWinner() === null) {
            return true;
        }
        else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
    	        return this.playField[rowIndex][colIndex]
    }

}

module.exports = TicTacToe;
