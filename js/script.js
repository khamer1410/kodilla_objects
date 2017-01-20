//Klasa (funkcja konstruująca)
function Telefon(marka, cena, kolor) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
}

//metody
Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", kolor " + this.kolor + ", a cena to " + this.cena + ".");
	return("Marka telefonu to " + this.marka + ", kolor " + this.kolor + ", a cena to " + this.cena + ".");
}

Telefon.prototype.sumPrice = function(number) {
	var number = number;
	console.log("Cena wszystkich produktów to " + this.cena * number);
}


//obiekty
var SamsungGalaxyS6 = new Telefon('Samsung', 1600, 'czarny');
var iPhone6s = new Telefon('Apple', 2600, 'biały');
var iOnePlus = new Telefon('One', 600, 'srebrny');
