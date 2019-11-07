var gradeBook = {
    _grades: [],
    _total: 0,
    addGrade: function(newGrade){
        this._grades.push(newGrade);
    },
    getCountOfGrades: function(){
        return this._grades.length;
    },
    getAverage: function(){
        for (var grade=0; grade < this._grades.length; grade++){
            this._total += this._grades[grade]
        }
        return this._total/(this._grades.length)
    },
    reset: function() {
        this._grades = [];
    }

}

// gradeBook.addGrade(100)
// gradeBook.addGrade(50)
// var avg = gradeBook.getAverage()
// console.log(avg)
exports.book = gradeBook;