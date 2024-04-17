// login handler
window.addEventListener("DOMContentLoaded", (e) => {
  LoginHandler();
  LoginAvoider();
});

function ReplaceSite() {
  var body = document.querySelector("body");
  body.style.backgroundColor = "white";
  var container = document.querySelector(".container");
  container.innerHTML = `
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
    <div id="pzl" style="display:block">
      <div>
      <div id="sol" >
        <table id="pzm_letter_grid"><tr><td>N</td><td style="color: red">S</td><td style="color: red">O</td><td style="color: red">L</td><td style="color: red">O</td><td style="color: red">L</td><td style="color: red">E</td><td style="color: red">S</td><td style="color: red">B</td><td style="color: red">I</td><td>L</td><td style="color: red">A</td><td style="color: red">N</td><td style="color: green">X</td><td style="color: green">Q</td><td style="color: green">L</td><td style="color: green">X</td><td>A</td><td style="color: green">I</td><td style="color: green">J</td><td>E</td><td style="color: green">C</td><td style="color: green">U</td><td style="color: green">A</td><td style="color: green">P</td><td style="color: green">V</td><td style="color: green">R</td><td>I</td><td style="color: green">X</td><td style="color: green">D</td></tr>
        <tr><td>A</td><td style="color: green">K</td><td style="color: green">S</td><td style="color: green">N</td><td style="color: green">A</td><td style="color: green">T</td><td style="color: green">O</td><td>D</td><td>N</td><td>A</td><td>L</td><td>I</td><td>A</td><td>H</td><td>T</td><td style="color: green">U</td><td style="color: green">E</td><td style="color: green">Z</td><td>U</td><td style="color: green">A</td><td style="color: green">U</td><td>I</td><td style="color: green">B</td><td style="color: green">J</td><td style="color: green">X</td><td style="color: green">E</td><td style="color: green">C</td><td>N</td><td style="color: green">G</td><td style="color: green">T</td></tr>
        <tr><td>W</td><td style="color: green">J</td><td style="color: green">W</td><td style="color: green">U</td><td style="color: green">S</td><td style="color: green">C</td><td style="color: green">E</td><td style="color: green">W</td><td style="color: green">B</td><td>L</td><td style="color: green">R</td><td style="color: green">V</td><td>B</td><td style="color: green">E</td><td style="color: green">R</td><td style="color: green">M</td><td style="color: green">F</td><td>D</td><td style="color: green">M</td><td>S</td><td style="color: green">M</td><td style="color: green">I</td><td>G</td><td style="color: green">M</td><td style="color: green">I</td><td style="color: green">H</td><td style="color: green">Q</td><td>D</td><td style="color: green">A</td><td style="color: green">B</td></tr>
        <tr><td>I</td><td>N</td><td>E</td><td>P</td><td>A</td><td>L</td><td style="color: green">S</td><td style="color: green">D</td><td style="color: green">G</td><td>A</td><td style="color: green">W</td><td style="color: green">K</td><td style="color: green">R</td><td>A</td><td style="color: green">C</td><td style="color: green">E</td><td>N</td><td style="color: green">T</td><td style="color: green">P</td><td style="color: green">W</td><td>T</td><td style="color: green">I</td><td style="color: green">S</td><td>R</td><td style="color: green">M</td><td style="color: green">O</td><td style="color: green">K</td><td>O</td><td style="color: green">L</td><td style="color: green">R</td></tr>
        <tr><td>A</td><td style="color: green">B</td><td style="color: green">C</td><td style="color: green">T</td><td style="color: green">H</td><td style="color: green">Z</td><td style="color: green">I</td><td style="color: green">N</td><td style="color: green">N</td><td>G</td><td style="color: green">M</td><td style="color: green">I</td><td style="color: green">I</td><td style="color: green">M</td><td>N</td><td>A</td><td style="color: green">V</td><td style="color: green">N</td><td style="color: green">Q</td><td style="color: green">D</td><td style="color: green">S</td><td>R</td><td>N</td><td style="color: green">K</td><td>O</td><td style="color: green">O</td><td style="color: green">Y</td><td>N</td><td style="color: green">Z</td><td style="color: green">U</td></tr>
        <tr><td>T</td><td style="color: green">K</td><td style="color: green">T</td><td style="color: green">S</td><td style="color: green">N</td><td style="color: green">U</td><td style="color: green">Z</td><td style="color: green">F</td><td style="color: green">C</td><td>U</td><td style="color: green">F</td><td style="color: green">Y</td><td style="color: green">C</td><td style="color: green">M</td><td>L</td><td>O</td><td style="color: green">E</td><td style="color: green">L</td><td style="color: green">L</td><td style="color: green">U</td><td style="color: green">I</td><td>A</td><td>A</td><td style="color: green">S</td><td style="color: green">U</td><td>E</td><td style="color: green">J</td><td>E</td><td style="color: green">N</td><td style="color: green">D</td></tr>
        <tr><td>D</td><td style="color: green">J</td><td style="color: green">V</td><td style="color: green">Z</td><td style="color: green">C</td><td style="color: green">V</td><td style="color: green">V</td><td style="color: green">Q</td><td style="color: green">Q</td><td>T</td><td style="color: green">O</td><td style="color: green">D</td><td style="color: green">E</td><td>N</td><td style="color: green">S</td><td style="color: green">Z</td><td>N</td><td style="color: green">Y</td><td style="color: green">H</td><td style="color: green">F</td><td>T</td><td style="color: green">Y</td><td style="color: green">J</td><td>L</td><td style="color: green">S</td><td style="color: green">R</td><td>G</td><td>S</td><td style="color: green">F</td><td style="color: green">K</td></tr>
        <tr><td style="color: green">H</td><td>U</td><td style="color: green">X</td><td style="color: green">Q</td><td style="color: green">Y</td><td style="color: green">N</td><td style="color: green">E</td><td style="color: green">P</td><td style="color: green">S</td><td>R</td><td style="color: green">X</td><td style="color: green">J</td><td>E</td><td style="color: green">K</td><td style="color: green">J</td><td style="color: green">Y</td><td style="color: green">Q</td><td style="color: green">G</td><td style="color: green">G</td><td>S</td><td style="color: green">I</td><td>K</td><td style="color: green">U</td><td style="color: green">R</td><td>I</td><td style="color: green">H</td><td style="color: green">H</td><td>I</td><td style="color: green">V</td><td style="color: green">W</td></tr>
        <tr><td style="color: green">T</td><td style="color: green">A</td><td>B</td><td style="color: green">K</td><td style="color: green">X</td><td style="color: green">L</td><td style="color: green">L</td><td style="color: green">A</td><td style="color: green">I</td><td>O</td><td style="color: green">H</td><td>K</td><td style="color: green">J</td><td style="color: green">T</td><td style="color: green">K</td><td style="color: green">P</td><td style="color: green">P</td><td style="color: green">B</td><td>I</td><td>G</td><td style="color: green">M</td><td>A</td><td style="color: green">Z</td><td style="color: green">I</td><td style="color: green">M</td><td>E</td><td style="color: green">S</td><td>E</td><td style="color: green">B</td><td style="color: green">R</td></tr>
        <tr><td style="color: green">I</td><td style="color: green">F</td><td style="color: green">V</td><td>A</td><td style="color: green">V</td><td style="color: green">Q</td><td style="color: green">A</td><td style="color: green">J</td><td style="color: green">I</td><td>P</td><td>E</td><td style="color: green">K</td><td style="color: green">C</td><td style="color: green">G</td><td style="color: green">W</td><td style="color: green">D</td><td style="color: green">O</td><td>K</td><td>V</td><td style="color: green">M</td><td>U</td><td>Z</td><td>B</td><td style="color: green">F</td><td style="color: green">E</td><td style="color: green">G</td><td style="color: green">R</td><td style="color: green">L</td><td style="color: green">K</td><td style="color: green">Q</td></tr>
        <tr><td style="color: green">V</td><td style="color: green">W</td><td style="color: green">Q</td><td style="color: green">T</td><td>I</td><td style="color: green">I</td><td style="color: green">Y</td><td style="color: green">L</td><td style="color: green">J</td><td>I</td><td>A</td><td>K</td><td>S</td><td>A</td><td>L</td><td>A</td><td>E</td><td>E</td><td>E</td><td style="color: green">I</td><td style="color: green">J</td><td>A</td><td style="color: green">I</td><td>U</td><td style="color: green">H</td><td style="color: green">E</td><td style="color: green">P</td><td style="color: green">I</td><td style="color: green">O</td><td style="color: green">H</td></tr>
        <tr><td style="color: green">G</td><td style="color: green">R</td><td style="color: green">V</td><td style="color: green">H</td><td style="color: green">N</td><td style="color: green">H</td><td style="color: green">F</td><td style="color: green">Q</td><td>R</td><td style="color: green">H</td><td style="color: green">F</td><td style="color: green">F</td><td style="color: green">R</td><td style="color: green">K</td><td style="color: green">E</td><td>B</td><td>R</td><td style="color: green">I</td><td>I</td><td style="color: green">D</td><td style="color: green">V</td><td>C</td><td>T</td><td style="color: green">L</td><td>C</td><td style="color: green">J</td><td style="color: green">L</td><td style="color: green">R</td><td style="color: green">H</td><td style="color: green">L</td></tr>
        <tr><td>N</td><td style="color: green">N</td><td style="color: green">C</td><td style="color: green">L</td><td style="color: green">Y</td><td style="color: green">S</td><td style="color: green">N</td><td>G</td><td style="color: green">H</td><td style="color: green">Q</td><td style="color: green">Q</td><td style="color: green">Q</td><td style="color: green">V</td><td style="color: green">X</td><td>Z</td><td>E</td><td style="color: green">G</td><td style="color: green">U</td><td>N</td><td style="color: green">I</td><td style="color: green">X</td><td>H</td><td style="color: green">J</td><td>E</td><td style="color: green">K</td><td style="color: green">V</td><td style="color: green">X</td><td style="color: green">E</td><td style="color: green">D</td><td style="color: green">F</td></tr>
        <tr><td style="color: green">I</td><td>O</td><td>M</td><td>A</td><td>N</td><td>T</td><td>E</td><td>I</td><td>V</td><td style="color: green">I</td><td style="color: green">M</td><td style="color: green">T</td><td style="color: green">T</td><td>E</td><td>N</td><td style="color: green">Q</td><td style="color: green">O</td><td style="color: green">P</td><td>A</td><td style="color: green">G</td><td style="color: green">D</td><td>S</td><td style="color: green">F</td><td style="color: green">Z</td><td>M</td><td style="color: green">V</td><td style="color: green">Q</td><td style="color: green">N</td><td style="color: green">H</td><td style="color: green">P</td></tr>
        <tr><td style="color: green">T</td><td style="color: green">E</td><td>O</td><td style="color: green">Y</td><td style="color: green">K</td><td style="color: green">C</td><td style="color: green">I</td><td style="color: green">A</td><td style="color: green">L</td><td style="color: green">D</td><td style="color: green">G</td><td style="color: green">S</td><td>O</td><td>I</td><td style="color: green">B</td><td style="color: green">X</td><td style="color: green">X</td><td style="color: green">K</td><td>D</td><td style="color: green">D</td><td style="color: green">C</td><td>T</td><td style="color: green">O</td><td style="color: green">R</td><td style="color: green">B</td><td>A</td><td style="color: green">P</td><td style="color: green">H</td><td style="color: green">A</td><td style="color: green">P</td></tr>
        <tr><td style="color: green">J</td><td style="color: green">Y</td><td style="color: green">Y</td><td>R</td><td style="color: green">O</td><td style="color: green">S</td><td style="color: green">D</td><td style="color: green">Z</td><td style="color: green">W</td><td style="color: green">S</td><td style="color: green">R</td><td style="color: green">V</td><td>G</td><td style="color: green">G</td><td style="color: green">S</td><td style="color: green">W</td><td style="color: green">S</td><td style="color: green">L</td><td>R</td><td>E</td><td style="color: green">O</td><td>A</td><td style="color: green">T</td><td style="color: green">D</td><td style="color: green">I</td><td style="color: green">J</td><td>L</td><td style="color: green">H</td><td style="color: green">W</td><td style="color: green">H</td></tr>
        <tr><td>N</td><td style="color: green">F</td><td style="color: green">S</td><td style="color: green">R</td><td>W</td><td style="color: green">A</td><td style="color: green">J</td><td style="color: green">I</td><td style="color: green">H</td><td style="color: green">A</td><td style="color: green">S</td><td>D</td><td style="color: green">S</td><td style="color: green">V</td><td style="color: green">E</td><td style="color: green">T</td><td>N</td><td style="color: green">J</td><td>O</td><td>I</td><td style="color: green">P</td><td>N</td><td style="color: green">W</td><td style="color: green">O</td><td style="color: green">W</td><td style="color: green">V</td><td style="color: green">D</td><td>A</td><td style="color: green">K</td><td style="color: green">P</td></tr>
        <tr><td style="color: green">S</td><td>A</td><td style="color: green">Y</td><td style="color: green">D</td><td style="color: green">Y</td><td>E</td><td style="color: green">J</td><td style="color: green">I</td><td style="color: green">Z</td><td style="color: green">H</td><td>E</td><td style="color: green">K</td><td style="color: green">M</td><td style="color: green">M</td><td style="color: green">A</td><td style="color: green">Q</td><td>E</td><td style="color: green">L</td><td>J</td><td>N</td><td>E</td><td>I</td><td>L</td><td>O</td><td>G</td><td>N</td><td>O</td><td>M</td><td style="color: green">A</td><td style="color: green">E</td></tr>
        <tr><td>J</td><td style="color: green">T</td><td>T</td><td style="color: green">C</td><td style="color: green">C</td><td style="color: green">R</td><td>G</td><td style="color: green">M</td><td style="color: green">U</td><td>S</td><td style="color: green">W</td><td style="color: green">T</td><td style="color: green">Y</td><td style="color: green">B</td><td style="color: green">W</td><td style="color: green">O</td><td>W</td><td style="color: green">J</td><td style="color: green">B</td><td>E</td><td style="color: green">K</td><td style="color: green">Z</td><td style="color: green">I</td><td style="color: green">H</td><td style="color: green">J</td><td style="color: green">L</td><td style="color: green">V</td><td style="color: green">Z</td><td style="color: green">L</td><td style="color: green">L</td></tr>
        <tr><td style="color: green">Z</td><td>A</td><td style="color: green">L</td><td>S</td><td style="color: green">E</td><td style="color: green">D</td><td style="color: green">W</td><td>E</td><td>T</td><td style="color: green">E</td><td style="color: green">Y</td><td style="color: green">G</td><td style="color: green">G</td><td style="color: green">H</td><td style="color: green">P</td><td style="color: green">B</td><td>U</td><td style="color: green">B</td><td style="color: green">Q</td><td>M</td><td style="color: green">U</td><td style="color: green">Y</td><td style="color: green">E</td><td style="color: green">M</td><td style="color: green">G</td><td style="color: green">T</td><td style="color: green">E</td><td style="color: green">E</td><td style="color: green">X</td><td style="color: green">R</td></tr>
        <tr><td style="color: green">W</td><td style="color: green">K</td><td>M</td><td style="color: green">C</td><td>I</td><td style="color: green">H</td><td style="color: green">Q</td><td>A</td><td>N</td><td style="color: green">W</td><td style="color: green">U</td><td style="color: green">L</td><td style="color: green">M</td><td style="color: green">A</td><td style="color: green">G</td><td style="color: green">N</td><td>O</td><td style="color: green">U</td><td style="color: green">L</td><td>R</td><td style="color: green">J</td><td style="color: green">C</td><td style="color: green">X</td><td style="color: green">X</td><td style="color: green">Q</td><td style="color: green">M</td><td style="color: green">N</td><td style="color: green">P</td><td style="color: green">Q</td><td style="color: green">G</td></tr>
        <tr><td style="color: green">Z</td><td style="color: green">Z</td><td style="color: green">G</td><td>A</td><td style="color: green">W</td><td>K</td><td>T</td><td style="color: green">N</td><td style="color: green">K</td><td style="color: green">D</td><td style="color: green">A</td><td style="color: green">V</td><td style="color: green">D</td><td style="color: green">H</td><td style="color: green">C</td><td style="color: green">J</td><td>T</td><td style="color: green">W</td><td style="color: green">I</td><td>A</td><td style="color: green">J</td><td style="color: green">F</td><td style="color: green">H</td><td style="color: green">D</td><td style="color: green">B</td><td style="color: green">N</td><td style="color: green">O</td><td style="color: green">T</td><td style="color: green">I</td><td style="color: green">D</td></tr>
        <tr><td style="color: green">T</td><td style="color: green">D</td><td style="color: green">C</td><td style="color: green">V</td><td>I</td><td>E</td><td>A</td><td style="color: green">R</td><td style="color: green">X</td><td style="color: green">J</td><td style="color: green">K</td><td style="color: green">C</td><td style="color: green">V</td><td style="color: green">Q</td><td style="color: green">N</td><td style="color: green">Q</td><td>I</td><td>O</td><td>M</td><td>A</td><td>N</td><td style="color: green">U</td><td style="color: green">C</td><td style="color: green">N</td><td style="color: green">Z</td><td style="color: green">W</td><td style="color: green">L</td><td style="color: green">L</td><td style="color: green">P</td><td style="color: green">J</td></tr>
        <tr><td style="color: green">H</td><td style="color: green">N</td><td style="color: green">X</td><td style="color: green">Q</td><td>N</td><td>C</td><td style="color: green">C</td><td>P</td><td style="color: green">W</td><td style="color: green">B</td><td style="color: green">E</td><td style="color: green">U</td><td style="color: green">M</td><td style="color: green">B</td><td style="color: green">I</td><td style="color: green">K</td><td>L</td><td style="color: green">Y</td><td style="color: green">G</td><td style="color: green">O</td><td style="color: green">F</td><td style="color: green">X</td><td style="color: green">K</td><td style="color: green">Y</td><td style="color: green">C</td><td style="color: green">E</td><td style="color: green">G</td><td style="color: green">L</td><td style="color: green">Z</td><td style="color: green">K</td></tr>
        <tr><td style="color: green">E</td><td style="color: green">Q</td><td style="color: green">R</td><td style="color: green">J</td><td style="color: green">Z</td><td style="color: green">U</td><td>A</td><td style="color: green">R</td><td style="color: green">C</td><td style="color: green">Y</td><td style="color: green">P</td><td style="color: green">Y</td><td style="color: green">B</td><td style="color: green">A</td><td style="color: green">O</td><td style="color: green">J</td><td style="color: green">E</td><td style="color: green">V</td><td style="color: green">M</td><td style="color: green">G</td><td>E</td><td>S</td><td>T</td><td>L</td><td>A</td><td>N</td><td>D</td><td style="color: green">N</td><td style="color: green">F</td><td style="color: green">Y</td></tr>
        <tr><td style="color: green">S</td><td style="color: green">A</td><td style="color: green">E</td><td style="color: green">I</td><td style="color: green">K</td><td style="color: green">K</td><td style="color: green">V</td><td style="color: green">C</td><td style="color: green">S</td><td style="color: green">S</td><td style="color: green">I</td><td style="color: green">E</td><td style="color: green">D</td><td style="color: green">R</td><td style="color: green">S</td><td style="color: green">D</td><td style="color: green">D</td><td style="color: green">S</td><td style="color: green">F</td><td style="color: green">N</td><td style="color: green">H</td><td style="color: green">D</td><td style="color: green">C</td><td style="color: green">S</td><td style="color: green">T</td><td style="color: green">D</td><td style="color: green">O</td><td style="color: green">R</td><td style="color: green">K</td><td style="color: green">O</td></tr>
        <tr><td style="color: green">W</td><td style="color: green">Q</td><td style="color: green">U</td><td style="color: green">K</td><td style="color: green">I</td><td style="color: green">Q</td><td style="color: green">V</td><td style="color: green">M</td><td style="color: green">A</td><td style="color: green">S</td><td style="color: green">P</td><td style="color: green">L</td><td style="color: green">G</td><td style="color: green">B</td><td style="color: green">L</td><td style="color: green">A</td><td style="color: green">C</td><td style="color: green">G</td><td style="color: green">M</td><td style="color: green">J</td><td style="color: green">Y</td><td style="color: green">P</td><td style="color: green">N</td><td style="color: green">C</td><td style="color: green">E</td><td style="color: green">A</td><td style="color: green">J</td><td style="color: green">D</td><td style="color: green">C</td><td style="color: green">Q</td></tr>
        <tr><td style="color: green">M</td><td style="color: green">B</td><td style="color: green">Y</td><td style="color: green">E</td><td style="color: green">Q</td><td style="color: green">K</td><td style="color: green">K</td><td style="color: green">P</td><td style="color: green">I</td><td style="color: green">H</td><td style="color: green">E</td><td style="color: green">N</td><td style="color: green">Z</td><td style="color: green">U</td><td style="color: green">Z</td><td style="color: green">L</td><td style="color: green">B</td><td style="color: green">D</td><td style="color: green">D</td><td style="color: green">J</td><td style="color: green">N</td><td style="color: green">S</td><td style="color: green">J</td><td style="color: green">T</td><td style="color: green">F</td><td style="color: green">T</td><td style="color: green">H</td><td style="color: green">V</td><td style="color: green">D</td><td style="color: green">B</td></tr>
        <tr><td style="color: green">G</td><td style="color: green">P</td><td style="color: green">T</td><td style="color: green">V</td><td style="color: green">G</td><td style="color: green">S</td><td style="color: green">D</td><td style="color: green">Y</td><td style="color: green">K</td><td style="color: green">U</td><td style="color: green">R</td><td style="color: green">C</td><td style="color: green">P</td><td style="color: green">N</td><td style="color: green">B</td><td style="color: green">B</td><td style="color: green">J</td><td style="color: green">C</td><td style="color: green">M</td><td style="color: green">Q</td><td style="color: green">G</td><td style="color: green">R</td><td style="color: green">J</td><td style="color: green">E</td><td style="color: green">P</td><td style="color: green">H</td><td style="color: green">R</td><td style="color: green">I</td><td style="color: green">X</td><td style="color: green">F</td></tr>
        <tr><td style="color: green">K</td><td style="color: green">L</td><td style="color: green">M</td><td style="color: green">R</td><td style="color: green">A</td><td style="color: green">T</td><td style="color: green">E</td><td style="color: green">R</td><td style="color: green">O</td><td style="color: green">R</td><td style="color: green">L</td><td style="color: green">D</td><td style="color: green">Q</td><td style="color: green">P</td><td style="color: green">N</td><td style="color: green">U</td><td>D</td><td>N</td><td>A</td><td>L</td><td>S</td><td>J</td><td>I</td><td style="color: green">D</td><td style="color: green">P</td><td style="color: green">H</td><td style="color: green">J</td><td style="color: green">P</td><td style="color: green">P</td><td style="color: green">P</td></tr>
        </table></div>
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
