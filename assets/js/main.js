$(document).ready(function() {
  var firstNumb = 0;
  var secondNumb = 0;
  var operator = "";
  var result = 0;
  var isOperatorChoose = false;

  function reset() {
    firstNumb = "";
    secondNumb = "";
    operator = "";
    result = 0;
    isOperatorChoose = false;

    $("#first-number, #second-number, #operator, #result").empty();
  }

  $(".number").on("click", function() {
    if (secondNumb == "") {
      if (isOperatorChoose) {
        secondNumb += $(this).val();
        $("#second-number").text(secondNumb);
      } else {
        firstNumb += $(this).val();
        $("#first-number").text(firstNumb);
      }
    }
  });

  $(".operator").on("click", function() {
    if (isOperatorChoose === false) {
      operator = $(this).val();
      isOperatorChoose = true;
      $("#operator").text($(this).text());
    }
  });

  $(".equal").on("click", function() {
    firstNumb = parseInt(firstNumb);
    secondNumb = parseInt(secondNumb);

    if (operator === "plus") {
      result = firstNumb + secondNumb;
    } else if (operator === "minus") {
      result = firstNumb - secondNumb;
    } else if (operator === "times") {
      result = firstNumb * secondNumb;
    } else if (operator === "divide") {
      result = firstNumb / secondNumb;
    } else {
      result = Math.pow(firstNumb, secondNumb);
    }

    $("#result").text(result);
  });

  $(".clear").on("click", function() {
    reset();
  });
  reset();
});
