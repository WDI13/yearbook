var person;
var board;

var pad2 = function(number) {
    return (number < 10 ? '0' : '') + number;
};

personControls = {

    new: function(name) {
        person = {
                name: name,
                row: 28,
                column: 9,
                angle: 1
        };
        this.place(person);
    },

    place: function(person) {
        $('.person').remove();
        var $personImg = $('<img src="person.png"></img>');
        $personImg.addClass('person');
        $('#cell' + pad2(person.row) + pad2(person.column)).append($personImg);
        switch (person.angle) {
            case 1:
                $('.person').addClass('north');
                break;
            case 2:
                $('.person').addClass('east');
                break;
            case 3:
                $('.person').addClass('south');
                break;
            case 4:
                $('.person').addClass('west');
                break;
        }
        $(window).scrollTop(  $('.person').offset().top - $(window).height()/2  );
    },

    left: function(person) {
        if (person.angle === 1) {
            person.angle = 4;
        } else {
            person.angle -= 1;
        }
        this.place(person);
    },

    right: function(person) {
        if (person.angle === 4) {
            person.angle = 1;
        } else {
            person.angle += 1;
        }
        this.place(person);
    },
    testMove: function(row, column) {
        if (row === 0) {
            return true;
        } else if (row === 29) {
            return true;
        } else if (column === 0) {
            return true;
        } else if (column === 18) {
            return true;
        } else if (row > 4 && row < 25 && column === 6) {
            return true;
        } else if (row > 4 && row < 25 && column === 12) {
            return true;
        } else if (column > 5 && column < 13 && row === 5) {
            return true;
        } else if (column > 5 && column < 13 && row === 25) {
            return true;
        }
        return false;
    },

    forward: function(person) {
        if (person.angle === 1) {
            if (this.testMove(person.row -1, person.column)) {
                return;
            }
            person.row -= 1;
        } else if (person.angle === 2) {
            if (this.testMove(person.row, person.column + 1)) {
                return;
            }
            person.column += 1;
        } else if (person.angle === 3) {
            if (this.testMove(person.row +1, person.column)) {
                return;
            }
            person.row += 1;
        } else if (person.angle === 4) {
            if (this.testMove(person.row, person.column - 1)) {
                return;
            }
            person.column -= 1;
        }
        this.place(person);
    },

    backward: function(person) {
        if (person.angle === 1) {
            if (this.testMove(person.row +1, person.column)) {
                return;
            }
            person.row += 1;
        } else if (person.angle === 2) {
            if (this.testMove(person.row, person.column - 1)) {
                return;
            }
            person.column -= 1;
        } else if (person.angle === 3) {
            if (this.testMove(person.row -1, person.column)) {
                return;
            }
            person.row -= 1;
        } else if (person.angle === 4) {
            if (this.testMove(person.row, person.column + 1)) {
                return;
            }
            person.column += 1;
        }
        this.place(person);
    },

    reset: function(){
        $('.person').remove();
    }


};

var board = {

    make: function(rowNum, columnNum, rowStart, columnStart, element) {
        // board = {row: row, column: column};
        for (var i = rowStart; i < (rowStart + rowNum); i++) {
            for (var j = columnStart; j < (columnStart + columnNum); j++) {
                  var $cell = $('<div class="cell"></div>');
                  $cell.addClass('row' + pad2(i)).addClass('column' + pad2(j)).attr('id','cell' + pad2(i) + pad2(j) );
                  $(element).append($cell);
            }
            $(element).append('<br>');
        }

    },

    reset: function() {


    }

};

var linkCells = ['cell2501', 'cell2001', 'cell1401', 'cell0801', 'cell0401', 'cell0103', 'cell0107', 'cell0111', 'cell0115', 'cell0417', 'cell0817', 'cell1417', 'cell1917', 'cell2517', 'cell2205', 'cell1605', 'cell1005', 'cell0409', 'cell1013', 'cell1613', 'cell2213'];

$(function() {
    board.make(4,17,1,1,'#top-walk');
    board.make(21,5,5,1,'#left-walk');
    board.make(21,5,5,13,'#right-walk');
    board.make(3,17,26,1,'#bottom-walk');
    for (var i = 0; i < linkCells.length; i++) {
        $('#' + linkCells[i]).addClass('linkCell');
    }
    personControls.new('Wolf');
    $('body').keydown(function(e){
        if(e.keyCode == 37){
            e.preventDefault();
            personControls.left(person);
        }
        if(e.keyCode == 39){
            e.preventDefault();
            personControls.right(person);
        }
        if(e.keyCode == 38){
            e.preventDefault();
            personControls.forward(person);
        }
        if(e.keyCode == 40){
            e.preventDefault();
            personControls.backward(person);
        }
    });

    setTimeout($('body').animate({scrollTop:$(document).height()}, 4000), 2000);
});


$(document).ready(function() {
  $('.linkCell').on('click', function() {
    $('.overlay__container').show();
    $('.overlay__modal').show();
  });

  $('.overlay__container').on('click', function() {
    $('.overlay__container').hide();
    $('.overlay__modal').hide();
  })

});
