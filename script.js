/* body start */
let score = 0;
let answer;
$(".container2").hide();
$("#scoreOfPlayer").hide();
$("img").hide();

/* save value in localStorage */
function speichern() {
  let bez = "Punktestand";
  localStorage.setItem(bez, score);
}

/* clear local storage */
function deleteLocalStorage() {
  // bezeichnung.value = ""; only for html
  // inhalt.value = ""; only for html
  localStorage.clear();
}

/* restart game */
function restartGame() {
  //userInput.value = ""; // reset score input
  location.reload();
  localStorage.clear();
}

/* if button enter were clicked, check answer */
function checkAnswer() {
  let userInput = $("#userInput").val();
  // console.log(userInput);
  if (userInput == answer) {
    score++;
    $("#lvl" + score).addClass("green");
    $("#scoreOfPlayer").html("Your score: " + score + " points");
    alert("Correct!");
    speichern();
    startGame();
  } else {
    alert("Wrong answer!");
    startGame();
  }
}

/* 1-50 */
function generateRandomNumber() {
  let randomComputerNr = Math.floor(Math.random() * 50) + 1;
  return randomComputerNr;
}

/* 51 - 100 */
function generateRandomNumber2() {
  let randomComputerNr = Math.floor(Math.random() * 100) + 51;
  return randomComputerNr;
}

/* get random result */
function randomResult() {
  let randomResEl = generateRandomNumber(); // 1-50
  if (randomResEl % 2 == 0) {
    return randomResEl;
  } else {
    return randomResEl + 1; // else add +1
  }
}

/* get random divisor */
function randomDivisor() {
  let randomDiv = generateRandomNumber();
  if (randomDiv % 2 == 0) {
    return randomDiv;
  } else {
    return randomDiv + 1; // else add +1
  }
}

/* Game start */
function startGame() {
  $(".container2").show();
  $("#scoreOfPlayer").show();
  $("#pressPlay").hide();
  userInput.value = ""; // reset score inputfield
  speichern();
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  const thirdNumber = generateRandomNumber2();
  let resultEl = randomResult();
  let divisorEl = randomDivisor();
  answer = questions(firstNumber, secondNumber, thirdNumber);

  /* Wich Question? according to score */
  function questions(fNumber, sNumber, tNumber) {
    switch (score) {
      case 0:
        $("#calc-el").text("How much is " + fNumber + " + " + sNumber + "?");
        answer = fNumber + sNumber; // add fourth number if required in the parameter
        // console.log(fNumber, secondNumber, answer);
        return answer;
        break;
      case 1:
        $("#calc-el").text("How much is " + tNumber + " - " + sNumber + "?");
        answer = tNumber - sNumber;
        // console.log(tNumber, sNumber, answer);
        return answer;
        break;
      case 2:
        $("#calc-el").text("How much is " + fNumber + " * " + sNumber + "?");
        answer = fNumber * sNumber;
        // console.log(fNumber, sNumber, answer);
        return answer;
        break;
      case 3:
        $("#calc-el").text(
          "How much is " + "? " + " : " + divisorEl + " = " + resultEl
        );
        answer = divisorEl * resultEl;
        // console.log(divisorEl, resultEl, answer);
        return answer;
        break;
      case 4:
        $("#calc-el").text(
          "How much is " + tNumber + " - " + fNumber + " + " + sNumber + "?"
        );
        answer = tNumber - fNumber + sNumber;
        // console.log(tNumber, fNumber, sNumber, answer);
        return answer;
        break;
      case 5:
        $("#calc-el").text(
          "How much is " + fNumber + " + " + sNumber + " - " + tNumber + "?"
        );
        answer = fNumber + sNumber - tNumber;
        // console.log(fNumber, sNumber, tNumber, answer);
        return answer;
        break;
      case 6:
        $("#calc-el").text(
          "How much is " + fNumber + " - " + tNumber + " + " + sNumber + "?"
        );
        answer = fNumber - tNumber + sNumber;
        // console.log(fNumber, tNumber, sNumber, answer);
        return answer;
        break;
      case 7 /* wurzelberechnung */ /* Return the value of the number 4 to the power of 3 (4*4*4): Math.pow(4, 3); = 64 */:
        $("#calc-el").text("What is the square root of " + 25 + " ?"); // without decimal places
        answer = Math.pow(25, 0.5);
        // console.log(25, answer);
        return answer;
      // break;
      case 8 /* logarrhytmus */:
        /* 9. Aufgabe: Logarithmus eines Werts (Math.pow()) Per Zufall die Basis und das Ergebnis bestimmt.
            Eher kleine Werte nehmen, da sonst Potenz-Funktion sehr große Werte hat */
        $("#calc-el").text(
          "What is the log10 of " + fNumber + " ? rounded to 2 decimal places!"
        ); // without decimal places
        let roundNumber = Math.log10(fNumber);
        answer = Math.round((roundNumber + Number.EPSILON) * 100) / 100;
        // console.log(fNumber, roundNumber, answer);
        return answer;
      // break; // still round to 2 decimal places?
      default:
        $(".container2").hide();
        $("#scoreOfPlayer").hide();
        $("button").hide();
        $("#pressPlay").hide();
        $("img").show();
        $("#restartGame").show();
        $("#finished").text("You really did it! Congratulations");
        $("#finished2").text("All levels completed :)");
        alert("You really did it! Congratulations");
        break;
    }
  }
}
