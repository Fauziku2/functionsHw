document.addEventListener('DOMContentLoaded', init);

function init() {


    var breakfast = document.querySelector('#breakfast-foods');
    var lunch = document.querySelector('#lunch-foods');

    // console.log(breakfast);
    // console.log(lunch);

    var button = document.querySelector('#brunch');
    button.addEventListener('click', transfer);

    function transfer() {

      var lastList = breakfast.querySelector('li:last-child')
  var removedList = breakfast.removeChild(lastList)

  lunch.appendChild(removedList)
} else {
  alert('breakfast is empty')
}
}
}
