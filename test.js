// login handler
window.addEventListener("DOMContentLoaded", (e) => {
  LoginHandler();
  LoginAvoider();
});

function ReplaceSite() {
  var body = document.querySelector("body");
  body.style.backgroundColor = "#F5F5DC";
  var container = document.querySelector(".container");
  container.innerHTML = `
    <div style="display: flex; width: 80%; justify-content: space-around; justify-items: center; align-items: center; height: 100vh;">
    <div class="word-border">
      <table id="pzm_letter_grid"><tr><td id="hint1">T</td><td>R</td><td>T</td><td>L</td><td>O</td><td>L</td><td>A</td><td>K</td><td>E</td><td>T</td><td>S</td><td>B</td><td>I</td><td>A</td><td>N</td><td>G</td><td>M</td><td>P</td><td>L</td><td>E</td><td>T</td><td>T</td><td>R</td><td>X</td><td>N</td><td>G</td><td id="hint2">E</td></tr>
      <tr><td>F</td><td>M</td><td>H</td><td>R</td><td>U</td><td>U</td><td>Z</td><td>B</td><td>A</td><td>Y</td><td>U</td><td>C</td><td>V</td><td>K</td><td>W</td><td>E</td><td>A</td><td>A</td><td>E</td><td>I</td><td>C</td><td>X</td><td>H</td><td>S</td><td>U</td><td>I</td><td>O</td></tr>
      <tr><td>L</td><td>C</td><td>A</td><td>T</td><td>D</td><td>F</td><td>E</td><td>A</td><td>L</td><td>Z</td><td>W</td><td>R</td><td>V</td><td>M</td><td>B</td><td>O</td><td>R</td><td>N</td><td>Z</td><td>N</td><td>A</td><td>H</td><td>J</td><td>A</td><td>S</td><td>R</td><td>I</td></tr>
      <tr><td>Z</td><td>Y</td><td>I</td><td>N</td><td>D</td><td>Q</td><td>R</td><td>X</td><td>U</td><td>N</td><td>A</td><td>I</td><td>K</td><td>O</td><td>G</td><td>R</td><td>O</td><td>A</td><td>J</td><td>A</td><td>Q</td><td>F</td><td>T</td><td>E</td><td>G</td><td>T</td><td>T</td></tr>
      <tr><td>Y</td><td>Q</td><td>L</td><td>N</td><td>T</td><td>P</td><td>B</td><td>E</td><td>G</td><td>G</td><td>A</td><td>C</td><td>T</td><td>I</td><td>U</td><td>G</td><td>K</td><td>M</td><td>Y</td><td>B</td><td>I</td><td>E</td><td>N</td><td>E</td><td>C</td><td>C</td><td>E</td></tr>
      <tr><td>B</td><td>N</td><td>A</td><td>Y</td><td>X</td><td>E</td><td>E</td><td>A</td><td>Y</td><td>V</td><td>A</td><td>S</td><td>H</td><td>R</td><td>J</td><td>I</td><td>K</td><td>A</td><td>K</td><td>L</td><td>M</td><td>O</td><td>N</td><td>V</td><td>A</td><td>F</td><td>E</td></tr>
      <tr><td>H</td><td>D</td><td>N</td><td>A</td><td>I</td><td>V</td><td>I</td><td>Y</td><td>O</td><td>B</td><td>W</td><td>R</td><td>Z</td><td>S</td><td>J</td><td>E</td><td>O</td><td>L</td><td>A</td><td>A</td><td>D</td><td>E</td><td>D</td><td>J</td><td>Y</td><td>D</td><td>I</td></tr>
      <tr><td>R</td><td>N</td><td>D</td><td>B</td><td>E</td><td>L</td><td>D</td><td>V</td><td>U</td><td>A</td><td>N</td><td>E</td><td>A</td><td>F</td><td>T</td><td>D</td><td>B</td><td>Z</td><td>L</td><td>N</td><td>T</td><td>K</td><td>T</td><td>B</td><td>M</td><td>H</td><td>A</td></tr>
      <tr><td>X</td><td>A</td><td>A</td><td>L</td><td>H</td><td>Q</td><td>Z</td><td>C</td><td>N</td><td>R</td><td>H</td><td>R</td><td>U</td><td>C</td><td>U</td><td>A</td><td>C</td><td>A</td><td>I</td><td>N</td><td>W</td><td>D</td><td>I</td><td>U</td><td>C</td><td>X</td><td>J</td></tr>
      <tr><td>K</td><td>U</td><td>K</td><td>T</td><td>H</td><td>N</td><td>J</td><td>A</td><td>M</td><td>R</td><td>X</td><td>K</td><td>T</td><td>Z</td><td>I</td><td>U</td><td>N</td><td>B</td><td>O</td><td>G</td><td>O</td><td>T</td><td>I</td><td>A</td><td>A</td><td>M</td><td>Q</td></tr>
      <tr><td>J</td><td>V</td><td>F</td><td>S</td><td>S</td><td>W</td><td>A</td><td>M</td><td>R</td><td>N</td><td>A</td><td>M</td><td>O</td><td>K</td><td>D</td><td>N</td><td>E</td><td>M</td><td>A</td><td>G</td><td>Z</td><td>P</td><td>D</td><td>F</td><td>R</td><td>K</td><td>G</td></tr>
      <tr><td>M</td><td>Q</td><td>X</td><td>P</td><td>A</td><td>I</td><td>N</td><td>H</td><td>H</td><td>D</td><td>J</td><td>I</td><td>O</td><td>C</td><td>G</td><td>U</td><td>E</td><td>I</td><td>K</td><td>E</td><td>W</td><td>V</td><td>U</td><td>C</td><td>M</td><td>J</td><td>R</td></tr>
      <tr><td>O</td><td>D</td><td>N</td><td>G</td><td>D</td><td>G</td><td>K</td><td>E</td><td>I</td><td>L</td><td>B</td><td>U</td><td>P</td><td>E</td><td>R</td><td>E</td><td>S</td><td>N</td><td>A</td><td>A</td><td>C</td><td>I</td><td>N</td><td>I</td><td>M</td><td>O</td><td>D</td></tr>
      <tr><td>E</td><td>Q</td><td>J</td><td>I</td><td>E</td><td>M</td><td>A</td><td>E</td><td>H</td><td>Z</td><td>M</td><td>H</td><td>A</td><td>I</td><td>I</td><td>I</td><td>D</td><td>X</td><td>X</td><td>M</td><td>I</td><td>U</td><td>D</td><td>Z</td><td>J</td><td>P</td><td>T</td></tr>
      <tr><td>C</td><td>R</td><td>Z</td><td>M</td><td>I</td><td>W</td><td>L</td><td>D</td><td>B</td><td>L</td><td>K</td><td>H</td><td>K</td><td>B</td><td>O</td><td>L</td><td>K</td><td>Y</td><td>A</td><td>R</td><td>X</td><td>O</td><td>A</td><td>A</td><td>X</td><td>Q</td><td>C</td></tr>
      <tr><td>R</td><td>A</td><td>Q</td><td>H</td><td>P</td><td>O</td><td>C</td><td>M</td><td>A</td><td>Z</td><td>P</td><td>N</td><td>B</td><td>I</td><td>V</td><td>G</td><td>V</td><td>X</td><td>P</td><td>E</td><td>V</td><td>X</td><td>M</td><td>D</td><td>V</td><td>P</td><td>L</td></tr>
      <tr><td>S</td><td>A</td><td>Z</td><td>X</td><td>W</td><td>W</td><td>O</td><td>S</td><td>E</td><td>M</td><td>E</td><td>H</td><td>U</td><td>M</td><td>E</td><td>I</td><td>Y</td><td>X</td><td>G</td><td>Q</td><td>I</td><td>A</td><td>S</td><td>M</td><td>O</td><td>K</td><td>U</td></tr>
      <tr><td>L</td><td>D</td><td>J</td><td>N</td><td>P</td><td>E</td><td>X</td><td>I</td><td>I</td><td>G</td><td>X</td><td>O</td><td>L</td><td>A</td><td>M</td><td>K</td><td>L</td><td>Y</td><td>Y</td><td>X</td><td>I</td><td>P</td><td>O</td><td>F</td><td>E</td><td>R</td><td>U</td></tr>
      <tr><td>Q</td><td>R</td><td>M</td><td>W</td><td>E</td><td>X</td><td>N</td><td>R</td><td>C</td><td>U</td><td>S</td><td>S</td><td>D</td><td>N</td><td>R</td><td>R</td><td>F</td><td>E</td><td>L</td><td>C</td><td>U</td><td>F</td><td>F</td><td>F</td><td>F</td><td>F</td><td>W</td></tr>
      <tr><td>K</td><td>O</td><td>N</td><td>N</td><td>W</td><td>A</td><td>A</td><td>T</td><td>C</td><td>J</td><td>V</td><td>H</td><td>B</td><td>U</td><td>O</td><td>X</td><td>X</td><td>T</td><td>A</td><td>Q</td><td>W</td><td>U</td><td>D</td><td>I</td><td>W</td><td>O</td><td>B</td></tr>
      <tr><td>A</td><td>Z</td><td>C</td><td>T</td><td>D</td><td>X</td><td>O</td><td>C</td><td>I</td><td>X</td><td>E</td><td>M</td><td>Q</td><td>C</td><td>E</td><td>Z</td><td>M</td><td>U</td><td>N</td><td>I</td><td>E</td><td>J</td><td>N</td><td>D</td><td>M</td><td>E</td><td>W</td></tr>
      <tr><td>B</td><td>L</td><td>S</td><td>R</td><td>M</td><td>O</td><td>N</td><td>G</td><td>O</td><td>L</td><td>I</td><td>E</td><td>D</td><td>R</td><td>E</td><td>S</td><td>R</td><td>I</td><td>L</td><td>F</td><td>N</td><td>D</td><td>H</td><td>V</td><td>L</td><td>V</td><td>Q</td></tr>
      <tr><td>O</td><td>A</td><td>O</td><td>A</td><td>C</td><td>N</td><td>Y</td><td>G</td><td>S</td><td>J</td><td>J</td><td>Y</td><td>D</td><td>C</td><td>L</td><td>W</td><td>H</td><td>H</td><td>Z</td><td>B</td><td>I</td><td>Y</td><td>Z</td><td>I</td><td>P</td><td>S</td><td>O</td></tr>
      <tr><td>S</td><td>S</td><td>O</td><td>L</td><td>O</td><td>L</td><td>E</td><td>S</td><td>B</td><td>I</td><td>A</td><td>N</td><td>U</td><td>O</td><td>H</td><td>G</td><td>S</td><td>E</td><td>Y</td><td>A</td><td>N</td><td>H</td><td>Z</td><td>N</td><td>W</td><td>W</td><td>Q</td></tr>
      <tr><td>X</td><td>I</td><td>J</td><td>V</td><td>T</td><td>C</td><td>W</td><td>M</td><td>M</td><td>E</td><td>R</td><td>D</td><td>J</td><td>E</td><td>L</td><td>X</td><td>T</td><td>L</td><td>S</td><td>J</td><td>E</td><td>E</td><td>E</td><td>R</td><td>X</td><td>X</td><td>P</td></tr>
      <tr><td>W</td><td>J</td><td>G</td><td>F</td><td>I</td><td>A</td><td>Y</td><td>B</td><td>C</td><td>K</td><td>F</td><td>R</td><td>W</td><td>J</td><td>P</td><td>Z</td><td>K</td><td>F</td><td>E</td><td>I</td><td>F</td><td>K</td><td>T</td><td>K</td><td>H</td><td>Y</td><td>H</td></tr>
      <tr><td id="hint3">G</td><td>O</td><td>W</td><td>R</td><td>M</td><td>F</td><td>Z</td><td>A</td><td>Q</td><td>C</td><td>P</td><td>A</td><td>G</td><td>U</td><td>J</td><td>Z</td><td>T</td><td>I</td><td>F</td><td>G</td><td>Y</td><td>I</td><td>L</td><td>U</td><td>J</td><td>U</td><td id="hint4">X</td></tr>
      </table>
    </div>
    <div style="padding: 0px 24px; justify-content: center;">
      <p style="font-weight: bold;">Eindelijk eens werken voor je centen.</p>
      <p style="font-weight: bold;">Er zitten hier 27 landen in verstopt, in elke richting.</p>
      <p style="font-weight: bold;">De bestemming zit er ook tussen.</p>
        <p style="font-weight: bold;">Succes.</p>
    </div>
  </div>
      `;
}

function xHandler() {
  xHandlerImpl("hint1", "Hint 1!", "Van boven naar beneden...");
  xHandlerImpl("hint2", "Hint 2!", "Van links naar rechts...");
  xHandlerImpl("hint3", "Hint 7!", "Diagonaal van boven naar onder...");
  xHandlerImpl("hint4", "Hint 8!", "Diagonaal van onder naar boven...");
}

function xHandlerImpl(id, title, msg) {
  const el = document.getElementById(id);
  let hori = Math.random() < 0.5 ? "left" : "right";
  let vert = Math.random() < 0.5 ? "top" : "bottom";
  if (el) {
    el.addEventListener("click", function () {
      Swal.fire({
        title: title,
        text: msg,
        timer: 5000,
        showCloseButton: false,
        showCancelButton: false,
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://sweetalert2.github.io/images/nyan-cat.gif")
          left top
          no-repeat
        `,
      });
    });
  }
}

function LoginHandler() {
  function cba(str) {
    return str.split("").reverse().join("");
  }

  const form = document.getElementById("inloggen");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const data = new FormData(event.target);
      const name = data.get("name").toLowerCase();
      const email = data.get("pass");

      var abc = [
        "pissoG",
        "JE",
        "ynoT",
        "yniT",
        "arrajD",
        "kazsinliuV",
        "breK",
        "repoldnaL",
        "aterG",
        "okiN",
      ];

      let cbar = abc.map((s) => cba(s));
      if (cbar.map((el) => el.toLowerCase()).includes(name)) {
        var res = cbar.find((s) => s.toLowerCase() == name);

        if (email.toLowerCase() == "korenwijn") {
          Swal.fire({
            title: `Welkom ${res}! 🎉`,
            text: `Trek een lekker pijpie en geniet van wat er komen gaat.`,
            showCloseButton: false,
            showCancelButton: false,
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://sweetalert2.github.io/images/nyan-cat.gif")
              left top
              no-repeat
            `,
          }).then(() => {ReplaceSite(); xHandler();});
        } else {
          Swal.fire({
            title: "Hoe moeilijk kan het zijn?",
            text: `Jammer, ${res}... Onze zeiler houdt toch van iets lekkerders.`,
            icon: "question",
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          text: `"M'n huis uit, we kennen je niet."`,
        });
      }
    });
  }
}

function LoginAvoider() {
  var container = document.querySelector(".container");
  var login = document.getElementById("inloggen");
  var boundary = 128; // distance from edge of container
  var speed = 5;

  var totalDX = 0;
  var totalDY = 0;

  container.addEventListener("mousemove", function (e) {
    var mouseX = e.clientX - container.offsetLeft;
    var mouseY = e.clientY - container.offsetTop;

    var loginRect = login.getBoundingClientRect();

    var dx = 0;
    var dy = 0;

    // left
    if (
      mouseX < loginRect.left + boundary &&
      mouseX > loginRect.left - boundary
    ) {
      if (mouseY > loginRect.top && mouseY < loginRect.bottom) {
        dx = speed;
      }
    }

    // right
    if (
      mouseX < loginRect.right + boundary &&
      mouseX > loginRect.right - boundary
    ) {
      if (mouseY > loginRect.top && mouseY < loginRect.bottom) {
        var diff = mouseY - loginRect.top;
        if (diff < 112 && diff > 50) {
          return;
        } else {
          dx = -speed;
        }
      }
    }

    // top
    if (
      mouseY < loginRect.top + boundary &&
      mouseY > loginRect.top - boundary
    ) {
      if (mouseX > loginRect.left && mouseX < loginRect.right) {
        dy = speed;
      }
    }

    // bottom
    if (
      mouseY < loginRect.bottom + boundary &&
      mouseY > loginRect.bottom - boundary
    ) {
      if (mouseX > loginRect.left && mouseX < loginRect.right) {
        dy = -speed;
      }
    }

    totalDX += dx;
    totalDY += dy;

    login.style.transform = `translate(${totalDX}px, ${totalDY}px)`;
  });
}
