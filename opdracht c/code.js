var getalEen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

document.write("Tafel van 2:" + "<br>")

function tafel2() {
	for (i = 0; i < 10; i++) {
		document.write( getalEen[i] + " x " + " 2 " + " = " + (getalEen[i] * 2) + "<br>" )
	}
}

tafel2();

document.write("Tafel van 4:" + "<br>")

function tafel4() {
	for (i = 0; i < 10; i++) {
		document.write( getalEen[i] + " x " + " 4 " + " = " + (getalEen[i] * 4) + "<br>" )
	}
}

tafel4();

document.write("Tafel van 6:" + "<br>")

function tafel6() {
	for (i = 0; i < 10; i++) {
		document.write( getalEen[i] + " x " + " 6 " + " = " + (getalEen[i] * 6) + "<br>" )
	}
}

tafel6();

document.write("Tafel van 8:" + "<br>")

function tafel8() {
	for (i = 0; i < 10; i++) {
		document.write( getalEen[i] + " x " + " 8 " + " = " + (getalEen[i] * 8) + "<br>" )
	}
}

tafel8();