var dice = {
    diceSize: 4,
    /*diceSize is a ppt, not a variable
    so when used in thr function,'this' becomes important
    we don't just write "diceSize", as if we are referring to a declared variable*/
    totalRolls: 0,
    roll : function(){
        var result = Math.ceil(this.diceSize * Math.random());
        this.totalRolls += 1;
        return result;
    }
}

//In node, 'dice' is not available to the other files/ folder
//we have the use the in-built ppt in node which is called exports

exports.newGame = dice //this creates a ppt 'game' and points it to the 'dice' object
exports.name = 'My New Program' //this creates another ppt and pints to a string

/*So the 'dice' object is exported as 'game'and 
the string obj 'My New Program' as 'name'*/






