var person;
var board;
var allCells = [];
var linkCells = ['cell2501', 'cell2001', 'cell1401', 'cell0801', 'cell0401', 'cell0103', 'cell0107', 'cell0111', 'cell0115', 'cell0417', 'cell0817', 'cell1417', 'cell1917', 'cell2517', 'cell2205', 'cell1605', 'cell1005', 'cell0409', 'cell1013', 'cell1613', 'cell2213'];

var arrNames = ['bill', 'bhuvana', 'carmen', 'chris', 'dale', 'dan-b', 'dan-m', 'dave', 'emily', 'harrison', 'ian', 'jae', 'jenn', 'josh', 'marc', 'prateek', 'prazwal', 'rany', 'sam-d', 'sam-h', 'tom'];

var pad2 = function(number) {
  return (number < 10 ? '0' : '') + number;
};

var personControls = {

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
    $(window).scrollTop($('.person').offset().top - $(window).height() / 2);
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
    var testCell = pad2(row).toString() + pad2(column).toString();
    for (var j = 0; j < linkCells.length; j++) {
      if ('cell' + testCell === linkCells[j]) {
        var cssID = linkCells[j];
        var name = $('#' + cssID).attr('data-name');
        $('.yb__info-box').text(name);
      }
    }
    for (var i = 0; i < allCells.length; i++) {
      if (testCell === allCells[i]) {
        return false;
      }
    }
    return true;
  },

  forward: function(person) {
    if (person.angle === 1) {
      if (this.testMove(person.row - 1, person.column)) {
        return;
      }
      person.row -= 1;
    } else if (person.angle === 2) {
      if (this.testMove(person.row, person.column + 1)) {
        return;
      }
      person.column += 1;
    } else if (person.angle === 3) {
      if (this.testMove(person.row + 1, person.column)) {
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
      if (this.testMove(person.row + 1, person.column)) {
        return;
      }
      person.row += 1;
    } else if (person.angle === 2) {
      if (this.testMove(person.row, person.column - 1)) {
        return;
      }
      person.column -= 1;
    } else if (person.angle === 3) {
      if (this.testMove(person.row - 1, person.column)) {
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

  reset: function() {
    $('.person').remove();
  }


};

var board = {

  make: function(rowNum, columnNum, rowStart, columnStart, element) {
    for (var i = rowStart; i < (rowStart + rowNum); i++) {
      for (var j = columnStart; j < (columnStart + columnNum); j++) {
        allCells.push(pad2(i).toString() + pad2(j).toString());
        var $cell = $('<div class="cell"></div>');
        $cell.addClass('row' + pad2(i)).addClass('column' + pad2(j)).attr('id', 'cell' + pad2(i) + pad2(j));
        $(element).append($cell);
      }
      $(element).append('<br>');
    }

  },

  reset: function() {

  }

};

$(document).ready(function() {
  board.make(4, 17, 1, 1, '#top-walk');
  board.make(21, 5, 5, 1, '#left-walk');
  board.make(21, 5, 5, 13, '#right-walk');
  board.make(3, 17, 26, 1, '#bottom-walk');

  for (var i = 0; i < linkCells.length; i++) {
    var name = arrNames[i];
    $div = $('<div>').addClass('yb__dialog');
    $('#' + linkCells[i]).addClass('linkCell').addClass(name).attr('data-name', name);
  }
  personControls.new('Wolf');
  $('body').keydown(function(e) {
    if (e.keyCode == 37) {
      e.preventDefault();
      personControls.left(person);
    }
    if (e.keyCode == 39) {
      e.preventDefault();
      personControls.right(person);
    }
    if (e.keyCode == 38) {
      e.preventDefault();
      personControls.forward(person);
    }
    if (e.keyCode == 40) {
      e.preventDefault();
      personControls.backward(person);
    }
  });

  setTimeout($('body').animate({
    scrollTop: $(document).height()
  }, 4000), 2000);


  $('.linkCell').on('click', function() {
    $('.overlay__container').show();
    $('.overlay__modal').show();
  });

  $('.overlay__container').on('click', function() {
    $('.overlay__container').hide();
    $('.overlay__modal').hide();
  });

  $('.linkCell').on('mouseenter', function() {
    var name = $(this).attr('data-name');
    $('.yb__info-box').text(name);
  });

  $('.linkCell').on('mouseleave', function() {
    $('.yb__info-box').text('');
  });



});
