function showGreetingOnload() {
	alert("Morning!");	
}

function tellMeFibonacci() {
	var value;
	
	do {
		value = prompt("Which fibonacci number do you want? ");
		
		console.log("value is: "+value)
	} while (badInput(value))

	document.write("It will be: "+fib(value));
	
}

function badInput(value) {
	var badValue = false;
	
	if (isNaN(value)){
		badValue = true;
	} else {	
		value = parseFloat(value);
		
		if ((value <= 0) || ((value - Math.floor(value)) >= 0.00001))  {
			badValue = true;
		}
	}
	
	if (badValue) {
		alert("You must enter a positive whole number!");
	}
	
	return badValue;
}

function fib(ordinal) {
	var fib1 = 1, fib2 = 1;
	var fib3 = 1;
	
	if (ordinal <= 2) {
		return fib3;
	}
	
	for(i=3; i<ordinal; i++) {
		fib3 = fib1 + fib2;
		fib1 = fib2;
		fib2 = fib3;
	}
	
	return fib3;
}