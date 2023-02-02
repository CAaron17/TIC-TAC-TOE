const cuad1 = document.getElementById("cuad1");
const cuad2 = document.getElementById("cuad2");
const cuad3 = document.getElementById("cuad3");
const cuad4 = document.getElementById("cuad4");
const cuad5 = document.getElementById("cuad5");
const cuad6 = document.getElementById("cuad6");
const cuad7 = document.getElementById("cuad7");
const cuad8 = document.getElementById("cuad8");
const cuad9 = document.getElementById("cuad9");

let array1 = [];
let array2 = [];
let array3 = [];
let array4 = [];
let array5 = [];
let array6 = [];
let array7 = [];
let array8 = [];
let array9 = [];

const cant_o = document.getElementById("cant_o");
const cant_x = document.getElementById("cant_x");
const container_cuadrado = document.getElementById("container_cuadrado");
const btn_clean = document.getElementById("btn_clean");
const btn_score = document.getElementById("btn_score");

let cont = 1;
let cont_o = 0;
let cont_x = 0;

// ****************************************************************

function agregarCirculos(n) {
  const icons = document.getElementById(`icons${n}`);

  const icon_circulo = document.createElement("i");
  icon_circulo.setAttribute("class", "fa-regular fa-circle active");
  icon_circulo.setAttribute("id", `circle${n}`);

  icons.appendChild(icon_circulo);
}

function agregarX(n) {
  const icons = document.getElementById(`icons${n}`);

  const icon_x = document.createElement("i");
  icon_x.setAttribute("class", "fa-solid fa-x active");
  icon_x.setAttribute("id", `x${n}`);

  icons.appendChild(icon_x);
}

// ****************************************************************
cuad1.addEventListener("click", agregarCuad1);

function agregarCuad1() {
  if (cont == 1) {
    icons1.innerHTML = "";
    agregarCirculos(1);
    array1.push("circulo");

    agregarLinea1();
    agregarLinea4();
    agregarLinea6();
    todosCuadradosLlenos();
    cont++;
    cuad1.removeEventListener("click", agregarCuad1);
  } else {
    icons1.innerHTML = "";
    agregarX(1);
    array1.push("x");

    agregarLinea1();
    agregarLinea4();
    agregarLinea6();
    todosCuadradosLlenos();
    cont = 1;
    cuad1.removeEventListener("click", agregarCuad1);
  }
}

// ***************************************************************
cuad2.addEventListener("click", agregarCuad2);

function agregarCuad2() {
  if (cont == 1) {
    icons2.innerHTML = "";
    agregarCirculos(2);
    array2.push("circulo");

    agregarLinea1();
    agregarLinea7();
    todosCuadradosLlenos();
    cont++;
    cuad2.removeEventListener("click", agregarCuad2);
  } else {
    icons2.innerHTML = "";
    agregarX(2);
    array2.push("x");

    agregarLinea1();
    agregarLinea7();
    todosCuadradosLlenos();
    cont = 1;
    cuad2.removeEventListener("click", agregarCuad2);
  }
}
// ***************************************************************
cuad3.addEventListener("click", agregarCuad3);

function agregarCuad3() {
  const icons3 = document.getElementById("icons3");

  if (cont == 1) {
    icons3.innerHTML = "";
    agregarCirculos(3);
    array3.push("circulo");

    agregarLinea1();
    agregarLinea5();
    agregarLinea8();
    todosCuadradosLlenos();
    cont++;
    cuad3.removeEventListener("click", agregarCuad3);
  } else {
    icons3.innerHTML = "";
    agregarX(3);
    array3.push("x");

    agregarLinea1();
    agregarLinea5();
    agregarLinea8();
    todosCuadradosLlenos();
    cont = 1;
    cuad3.removeEventListener("click", agregarCuad3);
  }
}
// ***************************************************************
cuad4.addEventListener("click", agregarCuad4);

function agregarCuad4() {
  const icons4 = document.getElementById("icons4");

  if (cont == 1) {
    icons4.innerHTML = "";
    agregarCirculos(4);
    array4.push("circulo");

    agregarLinea2();
    agregarLinea6();
    todosCuadradosLlenos();
    cont++;
    cuad4.removeEventListener("click", agregarCuad4);
  } else {
    icons4.innerHTML = "";
    agregarX(4);
    array4.push("x");

    agregarLinea2();
    agregarLinea6();
    todosCuadradosLlenos();
    cont = 1;
    cuad4.removeEventListener("click", agregarCuad4);
  }
}
// ***************************************************************
cuad5.addEventListener("click", agregarCuad5);

function agregarCuad5() {
  const icons5 = document.getElementById("icons5");

  if (cont == 1) {
    icons5.innerHTML = "";
    agregarCirculos(5);
    array5.push("circulo");

    agregarLinea2();
    agregarLinea4();
    agregarLinea5();
    agregarLinea7();
    todosCuadradosLlenos();
    cont++;
    cuad5.removeEventListener("click", agregarCuad5);
  } else {
    icons5.innerHTML = "";
    agregarX(5);
    array5.push("x");

    agregarLinea2();
    agregarLinea4();
    agregarLinea5();
    agregarLinea7();
    todosCuadradosLlenos();
    cont = 1;
    cuad5.removeEventListener("click", agregarCuad5);
  }
}
// ***************************************************************
cuad6.addEventListener("click", agregarCuad6);

function agregarCuad6() {
  const icons6 = document.getElementById("icons6");

  if (cont == 1) {
    icons6.innerHTML = "";
    agregarCirculos(6);
    array6.push("circulo");

    agregarLinea2();
    agregarLinea8();
    todosCuadradosLlenos();
    cont++;
    cuad6.removeEventListener("click", agregarCuad6);
  } else {
    icons6.innerHTML = "";
    agregarX(6);
    array6.push("x");

    agregarLinea2();
    agregarLinea8();
    todosCuadradosLlenos();
    cont = 1;
    cuad6.removeEventListener("click", agregarCuad6);
  }
}
// ***************************************************************
cuad7.addEventListener("click", agregarCuad7);

function agregarCuad7() {
  const icons7 = document.getElementById("icons7");

  if (cont == 1) {
    icons7.innerHTML = "";
    agregarCirculos(7);
    array7.push("circulo");

    agregarLinea3();
    agregarLinea5();
    agregarLinea6();
    todosCuadradosLlenos();
    cont++;
    cuad7.removeEventListener("click", agregarCuad7);
  } else {
    icons7.innerHTML = "";
    agregarX(7);
    array7.push("x");

    agregarLinea3();
    agregarLinea5();
    agregarLinea6();
    todosCuadradosLlenos();
    cont = 1;
    cuad7.removeEventListener("click", agregarCuad7);
  }
}
// ***************************************************************
cuad8.addEventListener("click", agregarCuad8);

function agregarCuad8() {
  const icons8 = document.getElementById("icons8");

  if (cont == 1) {
    icons8.innerHTML = "";
    agregarCirculos(8);
    array8.push("circulo");

    agregarLinea3();
    agregarLinea7();
    todosCuadradosLlenos();
    cont++;
    cuad8.removeEventListener("click", agregarCuad8);
  } else {
    icons8.innerHTML = "";
    agregarX(8);
    agregarLinea3();
    array8.push("x");

    agregarLinea7();
    todosCuadradosLlenos();
    cont = 1;
    cuad8.removeEventListener("click", agregarCuad8);
  }
}
// ***************************************************************
cuad9.addEventListener("click", agregarCuad9);

function agregarCuad9() {
  const icons9 = document.getElementById("icons9");

  if (cont == 1) {
    icons9.innerHTML = "";
    agregarCirculos(9);
    array9.push("circulo");

    agregarLinea3();
    agregarLinea4();
    agregarLinea8();
    todosCuadradosLlenos();
    cont++;
    cuad9.removeEventListener("click", agregarCuad9);
  } else {
    icons9.innerHTML = "";
    agregarX(9);
    array9.push("x");

    agregarLinea3();
    agregarLinea4();
    agregarLinea8();
    todosCuadradosLlenos();
    cont = 1;
    cuad9.removeEventListener("click", agregarCuad9);
  }
}
// ****************************************************************

function insertarLineas(n) {
  const contenedor_lineas = document.getElementById("contenedor_lineas");

  const p = document.createElement("p");
  p.setAttribute("class", `linea${n} active`);
  p.setAttribute("id", `linea${n}`);
  contenedor_lineas.appendChild(p);
}

// ****************************************************************

function agregarLinea1() {
  if (
    array1[0] == "circulo" &&
    array2[0] == "circulo" &&
    array3[0] == "circulo"
  ) {
    insertarLineas(1);
    cont_o++;
    cant_o.textContent = cont_o;
    desabilitarTodosLosCuads();
  }
  if (array1[0] == "x" && array2[0] == "x" && array3[0] == "x") {
    insertarLineas(1);
    cont_x++;
    cant_x.textContent = cont_x;
    desabilitarTodosLosCuads();
  }
}
// *************************************************************************
function agregarLinea2() {
  if (
    array4[0] == "circulo" &&
    array5[0] == "circulo" &&
    array6[0] == "circulo"
  ) {
    insertarLineas(2);
    cont_o++;
    cant_o.textContent = cont_o;
    desabilitarTodosLosCuads();
  }
  if (array4[0] == "x" && array5[0] == "x" && array6[0] == "x") {
    insertarLineas(2);
    cont_x++;
    cant_x.textContent = cont_x;
    desabilitarTodosLosCuads();
  }
}
// *************************************************************************
function agregarLinea3() {
  if (
    array7[0] == "circulo" &&
    array8[0] == "circulo" &&
    array9[0] == "circulo"
  ) {
    insertarLineas(3);
    cont_o++;
    cant_o.textContent = cont_o;
    desabilitarTodosLosCuads();
  }
  if (array7[0] == "x" && array8[0] == "x" && array9[0] == "x") {
    insertarLineas(3);
    cont_x++;
    cant_x.textContent = cont_x;
    desabilitarTodosLosCuads();
  }
}
// *************************************************************************
function agregarLinea4() {
  if (
    array1[0] == "circulo" &&
    array5[0] == "circulo" &&
    array9[0] == "circulo"
  ) {
    insertarLineas(4);
    cont_o++;
    cant_o.textContent = cont_o;
    desabilitarTodosLosCuads();
  }
  if (array1[0] == "x" && array5[0] == "x" && array9[0] == "x") {
    insertarLineas(4);
    cont_x++;
    cant_x.textContent = cont_x;
    desabilitarTodosLosCuads();
  }
}
// *************************************************************************
function agregarLinea5() {
  if (
    array3[0] == "circulo" &&
    array5[0] == "circulo" &&
    array7[0] == "circulo"
  ) {
    insertarLineas(5);
    cont_o++;
    cant_o.textContent = cont_o;
    desabilitarTodosLosCuads();
  }
  if (array3[0] == "x" && array5[0] == "x" && array7[0] == "x") {
    insertarLineas(5);
    cont_x++;
    cant_x.textContent = cont_x;
    desabilitarTodosLosCuads();
  }
}
// *************************************************************************
function agregarLinea6() {
  if (
    array1[0] == "circulo" &&
    array4[0] == "circulo" &&
    array7[0] == "circulo"
  ) {
    insertarLineas(6);
    cont_o++;
    cant_o.textContent = cont_o;
    desabilitarTodosLosCuads();
  }
  if (array1[0] == "x" && array4[0] == "x" && array7[0] == "x") {
    insertarLineas(6);
    cont_x++;
    cant_x.textContent = cont_x;
    desabilitarTodosLosCuads();
  }
}
// *************************************************************************
function agregarLinea7() {
  if (
    array2[0] == "circulo" &&
    array5[0] == "circulo" &&
    array8[0] == "circulo"
  ) {
    insertarLineas(7);
    cont_o++;
    cant_o.textContent = cont_o;
    desabilitarTodosLosCuads();
  }
  if (array2[0] == "x" && array5[0] == "x" && array8[0] == "x") {
    insertarLineas(7);
    cont_x++;
    cant_x.textContent = cont_x;
    desabilitarTodosLosCuads();
  }
}
// *************************************************************************
function agregarLinea8() {
  if (
    array3[0] == "circulo" &&
    array6[0] == "circulo" &&
    array9[0] == "circulo"
  ) {
    insertarLineas(8);
    cont_o++;
    cant_o.textContent = cont_o;
    linea8.classList.add("active");
    desabilitarTodosLosCuads();
  }
  if (array3[0] == "x" && array6[0] == "x" && array9[0] == "x") {
    insertarLineas(8);
    cont_x++;
    cant_x.textContent = cont_x;
    desabilitarTodosLosCuads();
  }
}

// *****************************************************************

function todosCuadradosLlenos() {
  if (
    (array1[0] == "circulo" || array1[0] == "x") &&
    (array2[0] == "circulo" || array2[0] == "x") &&
    (array3[0] == "circulo" || array3[0] == "x") &&
    (array4[0] == "circulo" || array4[0] == "x") &&
    (array5[0] == "circulo" || array5[0] == "x") &&
    (array6[0] == "circulo" || array6[0] == "x") &&
    (array7[0] == "circulo" || array7[0] == "x") &&
    (array8[0] == "circulo" || array8[0] == "x") &&
    (array9[0] == "circulo" || array9[0] == "x")
  ) {
    location.reload();
  }
}

// *****************************************************************

function desabilitarTodosLosCuads() {
  cuad1.removeEventListener("click", agregarCuad1);
  cuad2.removeEventListener("click", agregarCuad2);
  cuad3.removeEventListener("click", agregarCuad3);
  cuad4.removeEventListener("click", agregarCuad4);
  cuad5.removeEventListener("click", agregarCuad5);
  cuad6.removeEventListener("click", agregarCuad6);
  cuad7.removeEventListener("click", agregarCuad7);
  cuad8.removeEventListener("click", agregarCuad8);
  cuad9.removeEventListener("click", agregarCuad9);
}

// ************************ BOTONES ********************************

function limpiarTabla() {
  document.getElementById("icons1").innerHTML = "";
  document.getElementById("icons2").innerHTML = "";
  document.getElementById("icons3").innerHTML = "";
  document.getElementById("icons4").innerHTML = "";
  document.getElementById("icons5").innerHTML = "";
  document.getElementById("icons6").innerHTML = "";
  document.getElementById("icons7").innerHTML = "";
  document.getElementById("icons8").innerHTML = "";
  document.getElementById("icons9").innerHTML = "";

  contenedor_lineas.innerHTML = "";

  array1.pop();
  array2.pop();
  array3.pop();
  array4.pop();
  array5.pop();
  array6.pop();
  array7.pop();
  array8.pop();
  array9.pop();

  cuad1.addEventListener("click", agregarCuad1);
  cuad2.addEventListener("click", agregarCuad2);
  cuad3.addEventListener("click", agregarCuad3);
  cuad4.addEventListener("click", agregarCuad4);
  cuad5.addEventListener("click", agregarCuad5);
  cuad6.addEventListener("click", agregarCuad6);
  cuad7.addEventListener("click", agregarCuad7);
  cuad8.addEventListener("click", agregarCuad8);
  cuad9.addEventListener("click", agregarCuad9);

  cont = 1;
}

btn_clean.addEventListener("click", (e) => {
  e.preventDefault();

  limpiarTabla();
});

btn_score.addEventListener("click", (e) => {
  e.preventDefault();

  cant_o.textContent = 0;
  cant_x.textContent = 0;

  cont_o = 0;
  cont_x = 0;
});
