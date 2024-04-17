// login handler
window.addEventListener("DOMContentLoaded", (e) => {
  LoginHandler();
  LoginAvoider();
});

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
        "saB",
        "noeC",
        "okiN",
      ];

      let cbar = abc.map((s) => cba(s));
      if (cbar.map((el) => el.toLowerCase()).includes(name)) {
        var res = cbar.find((s) => s.toLowerCase() == name);

        if (email.toLowerCase() == "corenwijn") {
          alert(
            `Welkom ${res}! Trek een lekker pijpie en geniet van wat er komen gaat.`
          );
        } else {
            alert(`Jammer, ${res}... Onze zeiler houdt toch van iets lekkerders.`);
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
        if (diff < 100 && diff > 50) {
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
