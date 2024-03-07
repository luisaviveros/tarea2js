const valor1 = prompt("Digite el primer valor");
const valor2 = prompt("Digite el segundo valor");
const valor3 = prompt("Digite el el tercer valor");

const conversion1 = parseInt(valor1);
const conversion2 = parseInt(valor2);
const conversion3 = parseInt(valor3);

const parrafo = document.querySelector("#parrafo");

if (valor1 > valor2 && valor1 > valor3) {
    parrafo.innerHTML = "el valor mas grande es " + valor1;
}
else if (valor2 > valor1 && valor2 > valor3) {
    parrafo.innerHTML = "el valor mas grande es " + valor2;
}
else if {
    parrafo.innerHTML = "el valor mas grande es " + valor3;
