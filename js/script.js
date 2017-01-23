function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		})
		this.$element.appendTo($('body'));
	}
}

//jak mamy klasy i prototypy  kodzie to gdzie zamieszczać var ? Co powinno być deklarowane pierwsze?

var btn1 = new Button();
var btn2 = new Button('Siema');

btn1.create();
btn2.create();

