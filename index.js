class Pianoroll {
  constructor(tipo) {
    this.tipo = tipo;
  }

  reproducirDo() {
    document.getElementById("doN").play();
  }

  reproducirRe() {
    var Re = document.getElementById("doA").onkeydown;
    return Re;
  }
  reproducirMi() {
    var Mi = this.notas[2];
    return;
  }
  reproducirFa() {
    var Fa = this.notas[3];
    return;
  }
  reproducirSol() {
    var Sol = this.notas[4];
    return;
  }
  reproducirLa() {
    var La = this.notas[5];
    return;
  }
  reproducirSi() {
    var Si = this.notas[6];
    return;
  }
}

const piano = new Pianoroll();

document.addEventListener("keydown", function(event) {
  let tecla = event.keyCode;
  tecla;
  console.log(tecla);

  switch (tecla) {
    case 65:
      console.log("Do");
      break;

    case 83:
      console.log("Re");
      break;
    case 68:
      console.log("Mi");
      break;
    case 70:
      console.log("FA");
      break;
    case 71:
      console.log("SOL");
      break;
    case 72:
      console.log("LA");
      break;
    case 74:
      console.log("SI");
      break;
  }
});
