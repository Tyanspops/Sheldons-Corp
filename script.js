var start = false;
const startbutton = document.createElement("button");
startbutton.textContent = "Start Game";
document.body.appendChild(startbutton);
startbutton.addEventListener("click", function () {
  document.body.appendChild(img);
  document.body.appendChild(button);
  document.body.appendChild(buy);
  startbutton.style.display = "none";
});
const buy = document.createElement("button");
buy.textContent = "Buy";
buy.classList.add("buy");
const button = document.createElement("button");
button.classList.add("roll");
const img = document.createElement("img");
img.classList.add("dice");
img.alt = "";
button.textContent = "Dice Roll";

var turn = "player1";
var p1p = 1;
var p2p = 1;
var cost = 0;
var p1m = 1000;
var p2m = 1000;
var state2 = true;
var state3 = true;
var state4 = true;
var state5 = true;
var state6 = true;
var state7 = true;
var state8 = true;
let red = 0;
let blue = 0;
let status = 0;

button.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  if (randomNumber == 1) {
    img.src =
      "https://cdn.glitch.global/59ca867b-a3f6-4132-a860-a58523d45afb/dice-six-faces-one.png?v=1680939227004";
  } else if (randomNumber == 2) {
    img.src =
      "https://cdn.glitch.global/59ca867b-a3f6-4132-a860-a58523d45afb/dice-six-faces-two.png?v=1680939232516";
  } else if (randomNumber == 3) {
    img.src =
      "https://cdn.glitch.global/59ca867b-a3f6-4132-a860-a58523d45afb/dice-six-faces-three.png?v=1680939234783";
  } else if (randomNumber == 4) {
    img.src =
      "https://cdn.glitch.global/59ca867b-a3f6-4132-a860-a58523d45afb/dice-six-faces-four.png?v=1680939237102";
  } else if (randomNumber == 5) {
    img.src =
      "https://cdn.glitch.global/59ca867b-a3f6-4132-a860-a58523d45afb/dice-six-faces-five.png?v=1680939239835";
  } else {
    img.src =
      "https://cdn.glitch.global/59ca867b-a3f6-4132-a860-a58523d45afb/dice-six-faces-six.png?v=1680939242149";
  }

  if (turn == "player1") {
    turn = "player2";
    if (1 == p1p) {
      p1b1.style.display = "none";
    } else if (2 == p1p) {
      p1b2.style.display = "none";
    } else if (3 == p1p) {
      p1b3.style.display = "none";
    } else if (4 == p1p) {
      p1b4.style.display = "none";
    } else if (5 == p1p) {
      p1b5.style.display = "none";
    } else if (6 == p1p) {
      p1b6.style.display = "none";
    } else if (7 == p1p) {
      p1b7.style.display = "none";
    } else {
      p1b8.style.display = "none";
    }
    p1p += randomNumber;
    if (p1p >= 9) {
      p1p -= 8;
      p1m += 200;
    }
    if (1 == p1p) {
      p1b1.style.display = "block";
    } else if (2 == p1p) {
      p1b2.style.display = "block";
      cost = 200;
      if (n2.style.backgroundColor == "red") {
        p1m -= 20;
      }
      buy.addEventListener("click", function () {
        if (state2 == false) {
          buy.style.display = "none";
        } else if (p1m < 200) {
          buy.style.display = "none";
        } else {
          status += 1;
          state2 = false;
          p1m -= cost;
          var p2 = document.getElementById("2");
          p2.style.backgroundColor = "blue";
          n2.style.backgroundColor = "blue";
          m2.style.backgroundColor = "blue";
          b2.style.backgroundColor = "blue";
          r2.style.backgroundColor = "blue";
          document.getElementById("p1mhtml").innerHTML = "Money: $" + p1m;
          blue += 1;
        }
        buy.style.display = "block";
      });
    } else if (3 == p1p) {
      p1b3.style.display = "block";
      cost = 300;
      if (n3.style.backgroundColor == "red") {
        p1m -= 30;
      }
      buy.addEventListener("click", function () {
        if (state3 == false) {
          buy.style.display = "none";
        } else if (p1m < 300) {
          buy.style.display = "none";
        } else {
          status += 1;
          state3 = false;
          p1m -= cost;
          var p3 = document.getElementById("3");
          p3.style.backgroundColor = "blue";
          n3.style.backgroundColor = "blue";
          m3.style.backgroundColor = "blue";
          b3.style.backgroundColor = "blue";
          r3.style.backgroundColor = "blue";
          document.getElementById("p1mhtml").innerHTML = "Money: $" + p1m;
          blue += 1;
        }
        buy.style.display = "block";
      });
    } else if (4 == p1p) {
      p1b4.style.display = "block";
      cost = 400;
      if (m4.style.backgroundColor == "red") {
        p1m -= 40;
      }
      buy.addEventListener("click", function () {
        if (state4 == false) {
          buy.style.display = "none";
        } else if (p1m < 400) {
          buy.style.display = "none";
        } else {
          status += 1;
          state4 = false;
          p1m -= cost;
          var p4 = document.getElementById("4");
          p4.style.backgroundColor = "blue";
          n4.style.backgroundColor = "blue";
          m4.style.backgroundColor = "blue";
          b4.style.backgroundColor = "blue";
          r4.style.backgroundColor = "blue";
          document.getElementById("p1mhtml").innerHTML = "Money: $" + p1m;
          blue += 1;
        }
        buy.style.display = "block";
      });
    } else if (5 == p1p) {
      p1b5.style.display = "block";
      cost = 500;
      if (n5.style.backgroundColor == "red") {
        p1m -= 50;
      }
      buy.addEventListener("click", function () {
        if (state5 == false) {
          buy.style.display = "none";
        } else if (p1m < 500) {
          buy.style.display = "none";
        } else {
          status += 1;
          state5 = false;
          p1m -= cost;
          var p5 = document.getElementById("5");
          p5.style.backgroundColor = "blue";
          n5.style.backgroundColor = "blue";
          m5.style.backgroundColor = "blue";
          b5.style.backgroundColor = "blue";
          r5.style.backgroundColor = "blue";
          document.getElementById("p1mhtml").innerHTML = "Money: $" + p1m;
          blue += 1;
        }
        buy.style.display = "block";
      });
    } else if (6 == p1p) {
      p1b6.style.display = "block";
      cost = 600;
      if (n6.style.backgroundColor == "red") {
        p1m -= 60;
      }
      buy.addEventListener("click", function () {
        if (state6 == false) {
          buy.style.display = "none";
        } else if (p1m < 600) {
          buy.style.display = "none";
        } else {
          status += 1;
          state6 = false;
          p1m -= cost;
          var p6 = document.getElementById("6");
          p6.style.backgroundColor = "blue";
          n6.style.backgroundColor = "blue";
          m6.style.backgroundColor = "blue";
          b6.style.backgroundColor = "blue";
          r6.style.backgroundColor = "blue";
          document.getElementById("p1mhtml").innerHTML = "Money: $" + p1m;
          blue += 1;
        }
        buy.style.display = "block";
      });
    } else if (7 == p1p) {
      p1b7.style.display = "block";
      cost = 700;
      if (n7.style.backgroundColor == "red") {
        p1m -= 70;
      }
      buy.addEventListener("click", function () {
        if (state7 == false) {
          buy.style.display = "none";
        } else if (p1m < 700) {
          buy.style.display = "none";
        } else {
          status += 1;
          state7 = false;
          p1m -= cost;
          var p7 = document.getElementById("7");
          p7.style.backgroundColor = "blue";
          n7.style.backgroundColor = "blue";
          m7.style.backgroundColor = "blue";
          b7.style.backgroundColor = "blue";
          r7.style.backgroundColor = "blue";
          document.getElementById("p1mhtml").innerHTML = "Money: $" + p1m;
          blue += 1;
        }
        buy.style.display = "block";
      });
    } else {
      p1b8.style.display = "block";
      cost = 800;
      if (n8.style.backgroundColor == "red") {
        p1m -= 80;
      }
      buy.addEventListener("click", function () {
        if (state8 == false) {
          buy.style.display = "none";
        } else if (p1m < 800) {
          buy.style.display = "none";
        } else {
          status += 1;
          state8 = false;
          p1m -= cost;
          var p8 = document.getElementById("8");
          p8.style.backgroundColor = "blue";
          n8.style.backgroundColor = "blue";
          m8.style.backgroundColor = "blue";
          b8.style.backgroundColor = "blue";
          r8.style.backgroundColor = "blue";
          document.getElementById("p1mhtml").innerHTML = "Money: $" + p1m;
          blue += 1;
        }
        buy.style.display = "block";
      });
    }
    document.getElementById("turntexthtml").innerHTML = "It is Player 2's turn";
    document.getElementById("p1mhtml").innerHTML = "Money: $" + p1m;
    if (p1m <= 0) {
      buy.style.display = "none";
      button.style.display = "none";
      document.getElementById("turntexthtml").innerHTML = "";

      document.getElementById("winnerhtml").innerHTML = "The winner is red!";
      document.getElementById("pt1").innerHTML = "";
      document.getElementById("pt2").innerHTML = "";
    } else if (p2m <= 0) {
      buy.style.display = "none";
      button.style.display = "none";
      document.getElementById("turntexthtml").innerHTML = "";
      document.getElementById("winnerhtml").innerHTML = "The winner is blue!";
      document.getElementById("pt1").innerHTML = "";
      document.getElementById("pt2").innerHTML = "";
    } else if (status == 7) {
      buy.style.display = "none";
      button.style.display = "none";
      document.getElementById("turntexthtml").innerHTML = "";
      if (red > blue) {
        document.getElementById("winnerhtml").innerHTML = "The winner is red!";
        document.getElementById("pt1").innerHTML = "";
        document.getElementById("pt2").innerHTML = "";
      } else if (blue > red) {
        document.getElementById("winnerhtml").innerHTML = "The winner is blue!";
        document.getElementById("pt1").innerHTML = "";
        document.getElementById("pt2").innerHTML = "";
      } else {
        document.getElementById("winnerhtml").innerHTML = "It was a tie!";
        document.getElementById("pt1").innerHTML = "";
        document.getElementById("pt2").innerHTML = "";
      }
    }
  } else {
    turn = "player1";
    if (1 == p2p) {
      p2b1.style.display = "none";
    } else if (2 == p2p) {
      p2b2.style.display = "none";
    } else if (3 == p2p) {
      p2b3.style.display = "none";
    } else if (4 == p2p) {
      p2b4.style.display = "none";
    } else if (5 == p2p) {
      p2b5.style.display = "none";
    } else if (6 == p2p) {
      p2b6.style.display = "none";
    } else if (7 == p2p) {
      p2b7.style.display = "none";
    } else {
      p2b8.style.display = "none";
    }
    p2p += randomNumber;
    if (p2p >= 9) {
      p2p -= 8;
      p2m += 200;
    }
    if (1 == p2p) {
      p2b1.style.display = "block";
    } else if (2 == p2p) {
      p2b2.style.display = "block";
      cost = 200;
      if (n2.style.backgroundColor == "blue") {
        p2m -= 20;
      }
      buy.addEventListener("click", function () {
        if (state2 == false) {
          buy.style.display = "none";
        } else if (p2m < 200) {
          buy.style.display = "none";
        } else {
          status += 1;
          state2 = false;
          p2m -= cost;
          var p2 = document.getElementById("2");
          p2.style.backgroundColor = "red";
          n2.style.backgroundColor = "red";
          m2.style.backgroundColor = "red";
          b2.style.backgroundColor = "red";
          r2.style.backgroundColor = "red";
          document.getElementById("p2mhtml").innerHTML = "Money: $" + p2m;
          red += 1;
        }
        buy.style.display = "block";
      });
    } else if (3 == p2p) {
      p2b3.style.display = "block";
      cost = 300;
      if (n3.style.backgroundColor == "blue") {
        p2m -= 30;
      }
      buy.addEventListener("click", function () {
        if (state3 == false) {
          buy.style.display = "none";
        } else if (p2m < 300) {
          buy.style.display = "none";
        } else {
          status += 1;
          state3 = false;
          p2m -= cost;
          var p3 = document.getElementById("3");
          p3.style.backgroundColor = "red";
          n3.style.backgroundColor = "red";
          m3.style.backgroundColor = "red";
          b3.style.backgroundColor = "red";
          r3.style.backgroundColor = "red";
          document.getElementById("p2mhtml").innerHTML = "Money: $" + p2m;
          red += 1;
        }
        buy.style.display = "block";
      });
    } else if (4 == p2p) {
      p2b4.style.display = "block";
      cost = 400;
      if (n4.style.backgroundColor == "blue") {
        p2m -= 40;
      }
      buy.addEventListener("click", function () {
        if (state4 == false) {
          buy.style.display = "none";
        } else if (p2m < 400) {
          buy.style.display = "none";
        } else {
          status += 1;
          state4 = false;
          p2m -= cost;
          var p4 = document.getElementById("4");
          p4.style.backgroundColor = "red";
          n4.style.backgroundColor = "red";
          m4.style.backgroundColor = "red";
          b4.style.backgroundColor = "red";
          r4.style.backgroundColor = "red";
          document.getElementById("p2mhtml").innerHTML = "Money: $" + p2m;
          red += 1;
        }
        buy.style.display = "block";
      });
    } else if (5 == p2p) {
      p2b5.style.display = "block";
      cost = 500;
      if (n5.style.backgroundColor == "blue") {
        p2m -= 50;
      }
      buy.addEventListener("click", function () {
        if (state5 == false) {
          buy.style.display = "none";
        } else if (p2m < 500) {
          buy.style.display = "none";
        } else {
          status += 1;
          state2 = false;
          p2m -= cost;
          var p5 = document.getElementById("5");
          p5.style.backgroundColor = "red";
          n5.style.backgroundColor = "red";
          m5.style.backgroundColor = "red";
          b5.style.backgroundColor = "red";
          r5.style.backgroundColor = "red";
          document.getElementById("p2mhtml").innerHTML = "Money: $" + p2m;
          red += 1;
        }
        buy.style.display = "block";
      });
    } else if (6 == p2p) {
      p2b6.style.display = "block";
      cost = 600;
      if (n6.style.backgroundColor == "blue") {
        p2m -= 60;
      }
      buy.addEventListener("click", function () {
        if (state6 == false) {
          buy.style.display = "none";
        } else if (p2m < 600) {
          buy.style.display = "none";
        } else {
          status += 1;
          state6 = false;
          p2m -= cost;
          var p6 = document.getElementById("6");
          p6.style.backgroundColor = "red";
          n6.style.backgroundColor = "red";
          m6.style.backgroundColor = "red";
          b6.style.backgroundColor = "red";
          r6.style.backgroundColor = "red";
          document.getElementById("p2mhtml").innerHTML = "Money: $" + p2m;
          red += 1;
        }
        buy.style.display = "block";
      });
    } else if (7 == p2p) {
      p2b7.style.display = "block";
      cost = 700;
      if (n7.style.backgroundColor == "blue") {
        p2m -= 70;
      }
      buy.addEventListener("click", function () {
        if (state7 == false) {
          buy.style.display = "none";
        } else if (p2m < 700) {
          buy.style.display = "none";
        } else {
          status += 1;
          state7 = false;
          p2m -= cost;
          var p7 = document.getElementById("7");
          p7.style.backgroundColor = "red";
          n7.style.backgroundColor = "red";
          m7.style.backgroundColor = "red";
          b7.style.backgroundColor = "red";
          r7.style.backgroundColor = "red";
          document.getElementById("p2mhtml").innerHTML = "Money: $" + p2m;
          red += 1;
        }
        buy.style.display = "block";
      });
    } else {
      p2b8.style.display = "block";
      cost = 800;
      if (n8.style.backgroundColor == "blue") {
        p2m -= 80;
      }
      buy.addEventListener("click", function () {
        if (state8 == false) {
          buy.style.display = "none";
        } else if (p2m < 800) {
          buy.style.display = "none";
        } else {
          status += 1;
          state8 = false;
          p2m -= cost;
          var p8 = document.getElementById("8");
          p8.style.backgroundColor = "red";
          n8.style.backgroundColor = "red";
          m8.style.backgroundColor = "red";
          b8.style.backgroundColor = "red";
          r8.style.backgroundColor = "red";
          document.getElementById("p2mhtml").innerHTML = "Money: $" + p2m;
          red += 1;
        }
        buy.style.display = "block";
      });
    }
    document.getElementById("turntexthtml").innerHTML = "It is Player 1's turn";
    document.getElementById("p2mhtml").innerHTML = "Money: $" + p2m;
    if (p1m <= 0) {
      buy.style.display = "none";
      button.style.display = "none";
      document.getElementById("turntexthtml").innerHTML = "";
      document.getElementById("winnerhtml").innerHTML = "The winner is red!";
      document.getElementById("pt1").innerHTML = "";
      document.getElementById("pt2").innerHTML = "";
    } else if (p2m <= 0) {
      buy.style.display = "none";
      button.style.display = "none";
      document.getElementById("turntexthtml").innerHTML = "";
      document.getElementById("winnerhtml").innerHTML = "The winner is blue!";
      document.getElementById("pt1").innerHTML = "";
      document.getElementById("pt2").innerHTML = "";
    } else if (status == 7) {
      buy.style.display = "none";
      button.style.display = "none";
      document.getElementById("turntexthtml").innerHTML = "";
      if (red > blue) {
        document.getElementById("winnerhtml").innerHTML = "The winner is red!";
        document.getElementById("pt1").innerHTML = "";
        document.getElementById("pt2").innerHTML = "";
      } else if (blue > red) {
        document.getElementById("winnerhtml").innerHTML = "The winner is blue!";
        document.getElementById("pt1").innerHTML = "";
        document.getElementById("pt2").innerHTML = "";
      } else {
        document.getElementById("winnerhtml").innerHTML = "It was a tie!";
        document.getElementById("pt1").innerHTML = "";
        document.getElementById("pt2").innerHTML = "";
      }
    }
  }
});

var p1b8 = document.getElementById("p1b8");
p1b8.src =
  "https://cdn.glitch.global/59ca867b-a3f6-4132-a860-a58523d45afb/player1.jpg?v=1680939593472";
var p1b2 = document.getElementById("p1b2");
p1b2.src =
  "https://cdn.glitch.global/59ca867b-a3f6-4132-a860-a58523d45afb/player1.jpg?v=1680939593472";
var p1b3 = document.getElementById("p1b3");
p1b3.src =
  "https://cdn.glitch.global/59ca867b-a3f6-4132-a860-a58523d45afb/player1.jpg?v=1680939593472";
var p1b4 = document.getElementById("p1b4");
p1b4.src =
  "https://cdn.glitch.global/59ca867b-a3f6-4132-a860-a58523d45afb/player1.jpg?v=1680939593472";
var p1b5 = document.getElementById("p1b5");
p1b5.src =
  "https://cdn.glitch.global/59ca867b-a3f6-4132-a860-a58523d45afb/player1.jpg?v=1680939593472";
var p1b6 = document.getElementById("p1b6");
p1b6.src =
  "https://cdn.glitch.global/59ca867b-a3f6-4132-a860-a58523d45afb/player1.jpg?v=1680939593472";
var p1b7 = document.getElementById("p1b7");
p1b7.src =
  "https://cdn.glitch.global/59ca867b-a3f6-4132-a860-a58523d45afb/player1.jpg?v=1680939593472";
var p1b1 = document.getElementById("p1b1");
p1b1.src =
  "https://cdn.glitch.global/59ca867b-a3f6-4132-a860-a58523d45afb/player1.jpg?v=1680939593472";

var p2b8 = document.getElementById("p2b8");
p2b8.src =
  "https://cdn.glitch.global/59ca867b-a3f6-4132-a860-a58523d45afb/yelowsheldon.png?v=1687064829575";
var p2b2 = document.getElementById("p2b2");
p2b2.src =
  "https://cdn.glitch.global/59ca867b-a3f6-4132-a860-a58523d45afb/yelowsheldon.png?v=1687064829575";
var p2b3 = document.getElementById("p2b3");
p2b3.src =
  "https://cdn.glitch.global/59ca867b-a3f6-4132-a860-a58523d45afb/yelowsheldon.png?v=1687064829575";
var p2b4 = document.getElementById("p2b4");
p2b4.src =
  "https://cdn.glitch.global/59ca867b-a3f6-4132-a860-a58523d45afb/yelowsheldon.png?v=1687064829575";
var p2b5 = document.getElementById("p2b5");
p2b5.src =
  "https://cdn.glitch.global/59ca867b-a3f6-4132-a860-a58523d45afb/yelowsheldon.png?v=1687064829575";
var p2b6 = document.getElementById("p2b6");
p2b6.src =
  "https://cdn.glitch.global/59ca867b-a3f6-4132-a860-a58523d45afb/yelowsheldon.png?v=1687064829575";
var p2b7 = document.getElementById("p2b7");
p2b7.src =
  "https://cdn.glitch.global/59ca867b-a3f6-4132-a860-a58523d45afb/yelowsheldon.png?v=1687064829575";
var p2b1 = document.getElementById("p2b1");
p2b1.src =
  "https://cdn.glitch.global/59ca867b-a3f6-4132-a860-a58523d45afb/yelowsheldon.png?v=1687064829575";

function closeAdvertisement() {
  var advertisement = document.getElementById("advertisement");
  advertisement.style.display = "none";
}

function closeAdvertisement2() {
  var advertisement = document.getElementById("guide");
  advertisement.style.display = "none";
}

p1b8.style.display = "none";
p1b2.style.display = "none";
p1b3.style.display = "none";
p1b4.style.display = "none";
p1b5.style.display = "none";
p1b6.style.display = "none";
p1b7.style.display = "none";

p2b8.style.display = "none";
p2b2.style.display = "none";
p2b3.style.display = "none";
p2b4.style.display = "none";
p2b5.style.display = "none";
p2b6.style.display = "none";
p2b7.style.display = "none";

var b1 = document.getElementById("box1");
var b2 = document.getElementById("box2");
var b3 = document.getElementById("box3");
var b4 = document.getElementById("box4");
var b5 = document.getElementById("box5");
var b6 = document.getElementById("box6");
var b7 = document.getElementById("box7");
var b8 = document.getElementById("box8");

var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var n3 = document.getElementById("n3");
var n4 = document.getElementById("n4");
var n5 = document.getElementById("n5");
var n6 = document.getElementById("n6");
var n7 = document.getElementById("n7");
var n8 = document.getElementById("n8");

var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");
var m3 = document.getElementById("m3");
var m4 = document.getElementById("m4");
var m5 = document.getElementById("m5");
var m6 = document.getElementById("m6");
var m7 = document.getElementById("m7");
var m8 = document.getElementById("m8");

var r1 = document.getElementById("r1");
var r2 = document.getElementById("r2");
var r3 = document.getElementById("r3");
var r4 = document.getElementById("r4");
var r5 = document.getElementById("r5");
var r6 = document.getElementById("r6");
var r7 = document.getElementById("r7");
var r8 = document.getElementById("r8");
