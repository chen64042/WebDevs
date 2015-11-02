function power(order) {
	return function(base) { return Math.pow(base, order);}
}

var cube = power(3);
cube(5)
squar(10)