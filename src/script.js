//function for counter page
document.addEventListener('DOMContentLoaded', function() {
    const counterInput = document.getElementById('counter');
    const decreaseBtn = document.getElementById('decrease');
    const increaseBtn = document.getElementById('increase');

    decreaseBtn.addEventListener('click', function() {
        counterInput.value = parseInt(counterInput.value, 10) - 1;
        if (counterInput.value < 1) counterInput.value = 1;
    });

    increaseBtn.addEventListener('click', function() {
        counterInput.value = parseInt(counterInput.value, 10) + 1;
    });
});

//function for selected card
document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(
      ".question-container__section__card"
    );

    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        cards.forEach(function (otherCard) {
          otherCard.classList.remove("selected");
        });
        card.classList.add("selected");
      });
    });
  });

//function for selected card
document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(".language-card");

    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        cards.forEach(function (otherCard) {
          otherCard.classList.remove("selected");
        });
        card.classList.add("selected");
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(
      ".question-container__section__Yes-No"
    );

    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        cards.forEach(function (otherCard) {
          otherCard.classList.remove("selected");
        });
        card.classList.add("selected");
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(
      "._Not-sure_clicked-effect"
    );

    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        cards.forEach(function (otherCard) {
          otherCard.classList.remove("selected");
        });
        card.classList.add("selected");
      });
    });
  });