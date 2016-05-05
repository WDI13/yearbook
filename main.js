var data = {
  'bill': {
    name: 'Bill',
    imgSrc: 'img/Bill.jpg',
    portfolio: '#',
    linkedIn: '#',
    blah: 'I am a Nodist'
  },
  'bhuvana': {
    name: 'Bhuvana ',
    imgSrc: 'img/Bhuvana.jpg',
    portfolio: '#',
    linkedIn: '#',
    blah: 'Something about butterflies'
  },
  'carmen': {
    name: 'Carmen',
    imgSrc: 'img/Carmen.jpg',
    portfolio: '#',
    linkedIn: '#',
    blah: 'Something about butterflies'
  },
  'chris': {
    name: 'Chris',
    imgSrc: 'img/Chris.jpg',
    portfolio: '#',
    linkedIn: '#',
    blah: 'Something about butterflies'
  },
  'dale': {
    name: 'Dale',
    imgSrc: 'img/Dale.jpg',
    portfolio: '#',
    linkedIn: '#',
    blah: 'Something about butterflies'
  },
  'dan-b': {
    name: 'Dan B',
    imgSrc: 'img/DanielB.jpg',
    portfolio: '#',
    linkedIn: '#',
    blah: 'Something about butterflies'
  },
  'dan-m': {
    name: 'Dan M',
    imgSrc: 'img/DanielM.jpg',
    portfolio: '#',
    linkedIn: '#',
    blah: 'Something about butterflies'
  },
  'dave': {
    name: 'Dave',
    imgSrc: 'img/Dave.jpg',
    portfolio: '#',
    linkedIn: '#',
    blah: 'Something about butterflies'
  },
  'emily': {
    name: 'Emily',
    imgSrc: 'img/Emily.jpg',
    portfolio: '#',
    linkedIn: '#',
    blah: 'Something about butterflies'
  },
  'harrison': {
    name: 'Harson',
    imgSrc: 'img/Harrison.jpg',
    portfolio: '#',
    linkedIn: '#',
    blah: 'Something about butterflies'
  },
  'ian': {
    name: 'Ian',
    imgSrc: 'img/Ian.jpg',
    portfolio: '#',
    linkedIn: '#',
    blah: 'Something about butterflies'
  },
  'jae': {
    name: 'Jae',
    imgSrc: 'img/Jae.jpg',
    portfolio: '#',
    linkedIn: '#',
    blah: 'Something about butterflies'
  },
  'jenn': {
    name: 'Jenn',
    imgSrc: 'img/Jenn.jpg',
    portfolio: '#',
    linkedIn: '#',
    blah: 'Something about butterflies'
  },
  'josh': {
    name: 'Josh',
    imgSrc: 'img/Josh.jpg',
    portfolio: '#',
    linkedIn: '#',
    blah: 'Something about butterflies'
  },
  'marc': {
    name: 'Marc',
    imgSrc: 'img/Marc.jpg',
    portfolio: '#',
    linkedIn: '#',
    blah: 'Something about butterflies'
  },
  'prateek': {
    name: 'Prateek',
    imgSrc: 'img/Prateek.jpg',
    portfolio: '#',
    linkedIn: '#',
    blah: 'Something about butterflies'
  },
  'prazwal': {
    name: 'Prazwal',
    imgSrc: 'img/Prazwal.jpg',
    portfolio: '#',
    linkedIn: '#',
    blah: 'Something about butterflies'
  },
  'rany': {
    name: 'Rany',
    imgSrc: 'img/Rany.jpg',
    portfolio: '#',
    linkedIn: '#',
    blah: 'Something about butterflies'
  },
  'sam-d': {
    name: 'Samantha',
    imgSrc: 'img/Samantha.jpg',
    portfolio: '#',
    linkedIn: '#',
    blah: 'Something about butterflies'
  },
  'sam-h': {
    name: 'Sam',
    imgSrc: 'img/Sam.jpg',
    portfolio: '#',
    linkedIn: '#',
    blah: 'Something about butterflies'
  },
  'tom': {
    name: 'Tom',
    imgSrc: 'img/Tom.jpg',
    portfolio: '#',
    linkedIn: '#',
    blah: 'Something about butterflies'
  },

};

function preloadimages(arr){ // Should preload images so we get the image of the person
    var newimages=[];         // when their div pops up.
    for (var i=0; i<arr.length; i++){
        newimages[i]=new Image();
        newimages[i].src=arr[i];
    }
}
data.names = Object.getOwnPropertyNames(data); // this could be arrNames, but didn't see it till just then.
data.imgSrcs = data.names.map( function (person) {
  return person.imgSrc;
});
preloadimages(data.imgSrcs);

var person;
var board;
var allCells = [];
var linkCells = ['cell2501', 'cell2001', 'cell1401', 'cell0801', 'cell0401', 'cell0103', 'cell0107', 'cell0111', 'cell0115', 'cell0417', 'cell0817', 'cell1417', 'cell1917', 'cell2517', 'cell2205', 'cell1605', 'cell1005', 'cell0409', 'cell1013', 'cell1613', 'cell2213'];
var eggRef;

var arrNames = ['bill', 'bhuvana', 'carmen', 'chris', 'dale', 'dan-b', 'dan-m', 'dave', 'emily', 'harrison', 'ian', 'jae', 'jenn', 'josh', 'marc', 'prateek', 'prazwal', 'rany', 'sam-d', 'sam-h', 'tom'];

var pad2 = function(number) {
  return (number < 10 ? '0' : '') + number;
};

// Object to handle Agent Wolf
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
    if (testCell === eggRef) {
      window.location.replace("egg.html");
    }
    for (var j = 0; j < linkCells.length; j++) {
      if ('cell' + testCell === linkCells[j]) {
        this.openModal(linkCells[j]);
        return false;
      }
    }
    for (var i = 0; i < allCells.length; i++) {
      if (testCell === allCells[i]) {
        return false;
      }
    }
    return true;
  },
  openModal: function(cellId) {
    // var cssID = linkCells[j];
    var name = $('#' + cellId).children().attr('data-name');
    var objDetails = data[name];
    console.log(objDetails);
    populateLinkCell(objDetails);
    $('.overlay__container').show();
    $('.overlay__modal').show();
    $('.yb__info-box').text(name);
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
  }

};

// Function to create boards
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

  }

};


var populateLinkCell = function(obj) {
  $('.overlay__modal').html( linkCellTemplate(obj) );
};

var linkCellTemplate;

/// DOCUMENT READY

$(document).ready(function() {
  linkCellTemplate = _.template($('.overlay__template').text());

  // create board
  board.make(4, 17, 1, 1, '#top-walk');
  board.make(21, 5, 5, 1, '#left-walk');
  board.make(21, 5, 5, 13, '#right-walk');
  board.make(3, 17, 26, 1, '#bottom-walk');
  eggRef = '2901';
  // add stuff to red linkCells
  for (var i = 0; i < linkCells.length; i++) {
    var name = arrNames[i];
    $div = $('<div>').addClass('yb__dialog');
    var $linkCell = $('<div></div>');
    $linkCell.addClass('row' + linkCells[i].slice(4,6));
    $linkCell.addClass('column' + linkCells[i].slice(6,8));
    $linkCell.addClass('cell linkCell ').addClass(name).attr('data-name', name);
    $('#' + linkCells[i]).append($linkCell);
  }

  // Create Agent Wolf
  personControls.new('Agent Wolf');


  // Keyboard events
  $('body').keydown(function(e) {
    if (e.keyCode === 37) {
      e.preventDefault();
      if ($('.overlay__container').css('display') !== 'none') {
        $('.overlay__container').hide();
        $('.overlay__modal').hide();
      }
      personControls.left(person);
    }

    if (e.keyCode === 39) {
      e.preventDefault();
      if ($('.overlay__container').css('display') !== 'none') {
        $('.overlay__container').hide();
        $('.overlay__modal').hide();
      }
      personControls.right(person);
    }

    if (e.keyCode === 38) {
      e.preventDefault();
      if ($('.overlay__container').css('display') !== 'none') {
        $('.overlay__container').hide();
        $('.overlay__modal').hide();
      }
      personControls.forward(person);
    }

    if (e.keyCode === 40) {
      personControls.backward(person);
      if ($('.overlay__container').css('display') !== 'none') {
        $('.overlay__container').hide();
        $('.overlay__modal').hide();
      }
      e.preventDefault();
   }

    // Escape key
    if (e.keyCode === 27) {
      $('.overlay__container').hide();
      $('.overlay__modal').hide();
    }
  });

  // Initial animation
  setTimeout($('body').animate({
    scrollTop: $(document).height()
  }, 4000), 2000);


  // Event handlers for linkCells
  $('.linkCell').on('click', function() {
    var name = $(this).attr('data-name');
    var objDetails = data[name];
    populateLinkCell(objDetails);
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

  $('.linkCell').on('mouseenter', function(e) {
    var name = $(this).attr('data-name');
    var x = e.pageX;
    var y = e.pageY;
    $('.yb__small-info-box').text(name);
    $('.yb__small-info-box').css({left: x, top: y});
    $('.yb__small-info-box').fadeIn();
    setTimeout(function() {
      $('.yb__small-info-box').fadeOut();
    }, 2000);
  });

  $('.linkCell').on('mouseleave', function() {
    $('.yb__info-box').text('');
  });

  $('.overlay__modal--close').on('click', function() {
    $('.overlay__container').hide();
    $('.overlay__modal').hide();
  });



});
