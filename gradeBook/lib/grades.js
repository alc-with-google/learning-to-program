var gradeBook = {
    _grades: [],
    

    addGrade: function(newGrade){
        this._grades.push(newGrade);
    },

    getCountOfGrades: function(){
        return this._grades.length;
    },

    getAverage: function(){
        var total = 0
        for (var grade=0; grade < this._grades.length; grade++){
            total += this._grades[grade]
        }
        return total/(this._grades.length)
    },

    getLetterGrade: function(){
        for (var grade=0; grade < this._grades.length; grade++){
            var avg = this.getAverage();
            if (avg > 90){
                return 'A';
            } else if (avg>80){
                return 'B';
            } else if (avg>70){
                return 'C'; 
            } else if (avg>60){
                return 'D'; 
            } else if (avg>50){
                return 'E'; 
            } else {
                return 'F'
            }
        }
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