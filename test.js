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
    <div id="pzl" style="display:block">
      <table id="pzm_letter_grid"><tr><td>N</td><td>S</td><td>O</td><td>L</td><td>O</td><td>L</td><td>E</td><td>S</td><td>B</td><td>I</td><td>A</td><td>N</td><td>L</td><td>X</td><td>Q</td><td>L</td><td>X</td><td>A</td><td>I</td><td>J</td><td>E</td><td>C</td><td>U</td><td>A</td><td>P</td><td>V</td><td>R</td><td>I</td><td>X</td><td>D</td></tr>
      <tr><td>A</td><td>K</td><td>S</td><td>N</td><td>A</td><td>T</td><td>O</td><td>D</td><td>N</td><td>A</td><td>L</td><td>I</td><td>A</td><td>H</td><td>T</td><td>U</td><td>E</td><td>Z</td><td>U</td><td>A</td><td>U</td><td>I</td><td>B</td><td>J</td><td>X</td><td>E</td><td>C</td><td>N</td><td>G</td><td>T</td></tr>
      <tr><td>W</td><td>J</td><td>W</td><td>U</td><td>S</td><td>C</td><td>E</td><td>W</td><td>B</td><td>L</td><td>R</td><td>V</td><td>B</td><td>E</td><td>R</td><td>M</td><td>F</td><td>D</td><td>M</td><td>S</td><td>M</td><td>I</td><td>G</td><td>M</td><td>I</td><td>H</td><td>Q</td><td>D</td><td>A</td><td>B</td></tr>
      <tr><td>I</td><td>N</td><td>E</td><td>P</td><td>A</td><td>L</td><td>S</td><td>D</td><td>G</td><td>A</td><td>W</td><td>K</td><td>R</td><td>A</td><td>C</td><td>E</td><td>N</td><td>T</td><td>P</td><td>W</td><td>T</td><td>I</td><td>S</td><td>R</td><td>M</td><td>O</td><td>K</td><td>O</td><td>L</td><td>R</td></tr>
      <tr><td>A</td><td>B</td><td>C</td><td>T</td><td>H</td><td>Z</td><td>I</td><td>N</td><td>N</td><td>G</td><td>M</td><td>I</td><td>I</td><td>M</td><td>N</td><td>A</td><td>V</td><td>N</td><td>Q</td><td>D</td><td>S</td><td>R</td><td>N</td><td>K</td><td>O</td><td>O</td><td>Y</td><td>N</td><td>Z</td><td>U</td></tr>
      <tr><td>T</td><td>K</td><td>T</td><td>S</td><td>N</td><td>U</td><td>Z</td><td>F</td><td>C</td><td>U</td><td>F</td><td>Y</td><td>C</td><td>M</td><td>L</td><td>O</td><td>E</td><td>L</td><td>L</td><td>U</td><td>I</td><td>A</td><td>A</td><td>S</td><td>U</td><td>E</td><td>J</td><td>E</td><td>N</td><td>D</td></tr>
      <tr><td>D</td><td>J</td><td>V</td><td>Z</td><td>C</td><td>V</td><td>V</td><td>Q</td><td>Q</td><td>T</td><td>O</td><td>D</td><td>E</td><td>N</td><td>S</td><td>Z</td><td>N</td><td>Y</td><td>H</td><td>F</td><td>T</td><td>Y</td><td>J</td><td>L</td><td>S</td><td>R</td><td>G</td><td>S</td><td>F</td><td>K</td></tr>
      <tr><td>H</td><td>U</td><td>X</td><td>Q</td><td>Y</td><td>N</td><td>E</td><td>P</td><td>S</td><td>R</td><td>X</td><td>J</td><td>E</td><td>K</td><td>J</td><td>Y</td><td>Q</td><td>G</td><td>G</td><td>S</td><td>I</td><td>K</td><td>U</td><td>R</td><td>I</td><td>H</td><td>H</td><td>I</td><td>V</td><td>W</td></tr>
      <tr><td>T</td><td>A</td><td>B</td><td>K</td><td>X</td><td>L</td><td>L</td><td>A</td><td>I</td><td>O</td><td>H</td><td>K</td><td>J</td><td>T</td><td>K</td><td>P</td><td>P</td><td>B</td><td>I</td><td>G</td><td>M</td><td>A</td><td>Z</td><td>I</td><td>M</td><td>E</td><td>S</td><td>E</td><td>B</td><td>R</td></tr>
      <tr><td>I</td><td>F</td><td>V</td><td>A</td><td>V</td><td>Q</td><td>A</td><td>J</td><td>I</td><td>P</td><td>E</td><td>K</td><td>C</td><td>G</td><td>W</td><td>D</td><td>O</td><td>K</td><td>V</td><td>M</td><td>U</td><td>Z</td><td>B</td><td>F</td><td>E</td><td>G</td><td>R</td><td>L</td><td>K</td><td>Q</td></tr>
      <tr><td>V</td><td>W</td><td>Q</td><td>T</td><td>I</td><td>I</td><td>Y</td><td>L</td><td>J</td><td>I</td><td>A</td><td>K</td><td>S</td><td>A</td><td>L</td><td>A</td><td>E</td><td>E</td><td>E</td><td>I</td><td>J</td><td>A</td><td>I</td><td>U</td><td>H</td><td>E</td><td>P</td><td>I</td><td>O</td><td>H</td></tr>
      <tr><td>G</td><td>R</td><td>V</td><td>H</td><td>N</td><td>H</td><td>F</td><td>Q</td><td>R</td><td>H</td><td>F</td><td>F</td><td>R</td><td>K</td><td>E</td><td>B</td><td>R</td><td>I</td><td>I</td><td>D</td><td>V</td><td>C</td><td>T</td><td>L</td><td>C</td><td>J</td><td>L</td><td>R</td><td>H</td><td>L</td></tr>
      <tr><td>N</td><td>N</td><td>C</td><td>L</td><td>Y</td><td>S</td><td>N</td><td>G</td><td>H</td><td>Q</td><td>Q</td><td>Q</td><td>V</td><td>X</td><td>Z</td><td>E</td><td>G</td><td>U</td><td>N</td><td>I</td><td>X</td><td>H</td><td>J</td><td>E</td><td>K</td><td>V</td><td>X</td><td>E</td><td>D</td><td>F</td></tr>
      <tr><td>I</td><td>O</td><td>M</td><td>A</td><td>N</td><td>T</td><td>E</td><td>I</td><td>V</td><td>I</td><td>M</td><td>T</td><td>T</td><td>E</td><td>N</td><td>Q</td><td>O</td><td>P</td><td>A</td><td>G</td><td>D</td><td>S</td><td>F</td><td>Z</td><td>M</td><td>V</td><td>Q</td><td>N</td><td>H</td><td>P</td></tr>
      <tr><td>T</td><td>E</td><td>O</td><td>Y</td><td>K</td><td>C</td><td>I</td><td>A</td><td>L</td><td>D</td><td>G</td><td>S</td><td>O</td><td>I</td><td>B</td><td>X</td><td>X</td><td>K</td><td>D</td><td>D</td><td>C</td><td>T</td><td>O</td><td>R</td><td>B</td><td>A</td><td>P</td><td>H</td><td>A</td><td>P</td></tr>
      <tr><td>J</td><td>Y</td><td>Y</td><td>R</td><td>O</td><td>S</td><td>D</td><td>Z</td><td>W</td><td>S</td><td>R</td><td>V</td><td>G</td><td>G</td><td>S</td><td>W</td><td>S</td><td>L</td><td>R</td><td>E</td><td>O</td><td>A</td><td>T</td><td>D</td><td>I</td><td>J</td><td>L</td><td>H</td><td>W</td><td>H</td></tr>
      <tr><td>N</td><td>F</td><td>S</td><td>R</td><td>W</td><td>A</td><td>J</td><td>I</td><td>H</td><td>A</td><td>S</td><td>D</td><td>S</td><td>V</td><td>E</td><td>T</td><td>N</td><td>J</td><td>O</td><td>I</td><td>P</td><td>N</td><td>W</td><td>O</td><td>W</td><td>V</td><td>D</td><td>A</td><td>K</td><td>P</td></tr>
      <tr><td>S</td><td>A</td><td>Y</td><td>D</td><td>Y</td><td>E</td><td>J</td><td>I</td><td>Z</td><td>H</td><td>E</td><td>K</td><td>M</td><td>M</td><td>A</td><td>Q</td><td>E</td><td>L</td><td>J</td><td>N</td><td>E</td><td>I</td><td>L</td><td>O</td><td>G</td><td>N</td><td>O</td><td>M</td><td>A</td><td>E</td></tr>
      <tr><td>J</td><td>T</td><td>T</td><td>C</td><td>C</td><td>R</td><td>G</td><td>M</td><td>U</td><td>S</td><td>W</td><td>T</td><td>Y</td><td>B</td><td>W</td><td>O</td><td>W</td><td>J</td><td>B</td><td>E</td><td>K</td><td>Z</td><td>I</td><td>H</td><td>J</td><td>L</td><td>V</td><td>Z</td><td>L</td><td>L</td></tr>
      <tr><td>Z</td><td>A</td><td>L</td><td>S</td><td>E</td><td>D</td><td>W</td><td>E</td><td>T</td><td>E</td><td>Y</td><td>G</td><td>G</td><td>H</td><td>P</td><td>B</td><td>U</td><td>B</td><td>Q</td><td>M</td><td>U</td><td>Y</td><td>E</td><td>M</td><td>G</td><td>T</td><td>E</td><td>E</td><td>X</td><td>R</td></tr>
      <tr><td>W</td><td>K</td><td>M</td><td>C</td><td>I</td><td>H</td><td>Q</td><td>A</td><td>N</td><td>W</td><td>U</td><td>L</td><td>M</td><td>A</td><td>G</td><td>N</td><td>O</td><td>U</td><td>L</td><td>R</td><td>J</td><td>C</td><td>X</td><td>X</td><td>Q</td><td>M</td><td>N</td><td>P</td><td>Q</td><td>G</td></tr>
      <tr><td>Z</td><td>Z</td><td>G</td><td>A</td><td>W</td><td>K</td><td>T</td><td>N</td><td>K</td><td>D</td><td>A</td><td>V</td><td>D</td><td>H</td><td>C</td><td>J</td><td>T</td><td>W</td><td>I</td><td>A</td><td>J</td><td>F</td><td>H</td><td>D</td><td>B</td><td>N</td><td>O</td><td>T</td><td>I</td><td>D</td></tr>
      <tr><td>T</td><td>D</td><td>C</td><td>V</td><td>I</td><td>E</td><td>A</td><td>R</td><td>X</td><td>J</td><td>K</td><td>C</td><td>V</td><td>Q</td><td>N</td><td>Q</td><td>I</td><td>O</td><td>M</td><td>A</td><td>N</td><td>U</td><td>C</td><td>N</td><td>Z</td><td>W</td><td>L</td><td>L</td><td>P</td><td>J</td></tr>
      <tr><td>H</td><td>N</td><td>X</td><td>Q</td><td>N</td><td>C</td><td>C</td><td>P</td><td>W</td><td>B</td><td>E</td><td>U</td><td>M</td><td>B</td><td>I</td><td>K</td><td>L</td><td>Y</td><td>G</td><td>O</td><td>F</td><td>X</td><td>K</td><td>Y</td><td>C</td><td>E</td><td>G</td><td>L</td><td>Z</td><td>K</td></tr>
      <tr><td>E</td><td>Q</td><td>R</td><td>J</td><td>Z</td><td>U</td><td>A</td><td>R</td><td>C</td><td>Y</td><td>P</td><td>Y</td><td>B</td><td>A</td><td>O</td><td>J</td><td>E</td><td>V</td><td>M</td><td>G</td><td>E</td><td>S</td><td>T</td><td>L</td><td>A</td><td>N</td><td>D</td><td>N</td><td>F</td><td>Y</td></tr>
      <tr><td>S</td><td>A</td><td>E</td><td>I</td><td>K</td><td>K</td><td>V</td><td>C</td><td>S</td><td>S</td><td>I</td><td>E</td><td>D</td><td>R</td><td>S</td><td>D</td><td>D</td><td>S</td><td>F</td><td>N</td><td>H</td><td>D</td><td>C</td><td>S</td><td>T</td><td>D</td><td>O</td><td>R</td><td>K</td><td>O</td></tr>
      <tr><td>W</td><td>Q</td><td>U</td><td>K</td><td>I</td><td>Q</td><td>V</td><td>M</td><td>A</td><td>S</td><td>P</td><td>L</td><td>G</td><td>B</td><td>L</td><td>A</td><td>C</td><td>G</td><td>M</td><td>J</td><td>Y</td><td>P</td><td>N</td><td>C</td><td>E</td><td>A</td><td>J</td><td>D</td><td>C</td><td>Q</td></tr>
      <tr><td>M</td><td>B</td><td>Y</td><td>E</td><td>Q</td><td>K</td><td>K</td><td>P</td><td>I</td><td>H</td><td>E</td><td>N</td><td>Z</td><td>U</td><td>Z</td><td>L</td><td>B</td><td>D</td><td>D</td><td>J</td><td>N</td><td>S</td><td>J</td><td>T</td><td>F</td><td>T</td><td>H</td><td>V</td><td>D</td><td>B</td></tr>
      <tr><td>G</td><td>P</td><td>T</td><td>V</td><td>G</td><td>S</td><td>D</td><td>Y</td><td>K</td><td>U</td><td>R</td><td>C</td><td>P</td><td>N</td><td>B</td><td>B</td><td>J</td><td>C</td><td>M</td><td>Q</td><td>G</td><td>R</td><td>J</td><td>E</td><td>P</td><td>H</td><td>R</td><td>I</td><td>X</td><td>F</td></tr>
      <tr><td>K</td><td>L</td><td>M</td><td>R</td><td>A</td><td>T</td><td>E</td><td>R</td><td>O</td><td>R</td><td>L</td><td>D</td><td>Q</td><td>P</td><td>N</td><td>U</td><td>D</td><td>N</td><td>A</td><td>L</td><td>S</td><td>J</td><td>I</td><td>D</td><td>P</td><td>H</td><td>J</td><td>P</td><td>P</td><td>P</td></tr>
      </table>
    </div>
    <div style="padding: 0px 24px;">
      <p style="font-weight: bold;">Eindelijk eens werken voor je centen.</p>
      <p style="font-weight: bold;">Er zitten hier 27 landen in verstopt, in elke richting.</p>
      <p style="font-weight: bold;">De bestemming zit er ook tussen.</p>
        <p style="font-weight: bold;">Succes.</p>
    </div>
  </div>
      `;
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
          alert(
            `Welkom ${res}! Trek een lekker pijpie en geniet van wat er komen gaat.`
          );
          ReplaceSite();
        } else {
          alert(
            `Jammer, ${res}... Onze zeiler houdt toch van iets lekkerders.`
          );
        }
      } else {
        alert("M'n huis uit, we kennen je niet.");
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
        if (diff < 100 && diff > 42) {
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
