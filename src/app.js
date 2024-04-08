/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let quien = ["mi perro", "mi abuela", "el mensajero", "mi pajaro"];
  let accion = ["comio", "orino", "aplasto", "rompio"];
  let que = ["mi tarea", "mi telefono", "mi auto"];
  let cuando = [
    "antes de la clase",
    "cuando estaba durmiendo",
    "mientras me estaba ejercitando",
    "cuando almorzaba",
    "mientras estaba rezando"
  ];
  let randomquien = Math.floor(Math.random() * quien.length);
  let randomaccion = Math.floor(Math.random() * accion.length);
  let randomque = Math.floor(Math.random() * que.length);
  let randomcuando = Math.floor(Math.random() * cuando.length);
  let str = document.write(
    "<h1>" +
      " " +
      quien[randomquien] +
      " " +
      accion[randomaccion] +
      " " +
      que[randomque] +
      " " +
      cuando[randomcuando] +
      "<h1>"
  );
};
