//Klasa (funkcja konstruująca)
function Telefon(marka, cena, kolor) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
}

//metody
Telefon.prototype.printInfo = function() {
	return "Marka telefonu to " + this.marka + ", kolor " + this.kolor + ", a cena to " + this.cena + ".\n" + "Koszt przedłużonej gwarancji: " + this.getWarranyCost() +"\n\n";
}

Telefon.prototype.sumPrice = function(number) {
	return "Cena wszystkich produktów to " + this.cena * number;
}

Telefon.prototype.getWarranyCost = function() {
	return this.cena * 0.1;
};

//obiekty
var SamsungGalaxyS6 = new Telefon('Samsung', 1600, 'czarny');
var iPhone6s = new Telefon('Apple', 2600, 'biały');
var OnePlus = new Telefon('One', 600, 'srebrny');

console.log(iPhone6s.printInfo() +" " + OnePlus.printInfo() + " " + SamsungGalaxyS6.printInfo());

//BUTTONS
$(function() {
	var orderIphone = $('button');

	orderIphone.click(function() {
		var howMany = prompt('Ile sztuk?');
		console.log(iPhone6s.sumPrice(howMany));
	})
});
