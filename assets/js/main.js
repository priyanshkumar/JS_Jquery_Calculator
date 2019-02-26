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
  }

  $(".number").on("click", function() {
    if (isOperatorChoose) {
      secondNumb += this.val();
      $("#second-number").text(secondNumb);
    } else {
      firstNumb += this.val();
      $("#first-number").text(firstNumb);
    }
  });

  $(".operator").on("click", function() {
    if (!isOperatorChoose && !firstNumb) {
      operator = this.val();
      isOperatorChoose = true;
      $("#operator").text(this.text());
    }
  });
});
