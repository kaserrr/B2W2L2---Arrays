var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

document.write("Array operatoren" + "<br>");

document.write("Optellen van de twee arrays zijn:" + "<br>");

function optellen(arrayEen, arrayTwee) {
	for (i = 0; i <= 9; i++){
		document.write(arrayEen[i] + " + " + arrayTwee[i] + " = " + (arrayEen[i] + arrayTwee[i]) + "<br>");
	}
}

optellen(arrayEen, arrayTwee);

document.write("Aftrekken van de twee arrays zijn:" + "<br>");

function aftrekken(arrayEen, arrayTwee) {
	for (i = 0; i <= 9; i++){
		document.write(arrayEen[i] + " - " + arrayTwee[i] + " = " + (arrayTwee[i] - arrayEen[i]) + "<br>");
	}
}

aftrekken(arrayEen, arrayTwee);

document.write("Vermenigvuldigen van de twee arrays zijn:" + "<br>");

function vermenigvuldigen(arrayEen, arrayTwee) {
	for (i = 0; i <= 9; i++){
		document.write(arrayEen[i] + " * " + arrayTwee[i] + " = " + (arrayEen[i] * arrayTwee[i]) + "<br>");
	}
}

vermenigvuldigen(arrayEen, arrayTwee);

document.write("Delen van de twee arrays zijn:" + "<br>");

function delen(arrayEen, arrayTwee) {
	for (i = 0; i <= 9; i++){
		document.write(arrayEen[i] + " / " + arrayTwee[i] + " = " + (arrayTwee[i] / arrayEen[i]) + "<br>");
	}
}

delen(arrayEen, arrayTwee);