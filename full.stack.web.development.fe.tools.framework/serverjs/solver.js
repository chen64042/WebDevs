/**
 * Author: Jenhau Chen
 */

var solver = require("./quadratic.roots");
var prompt = require("prompt");

prompt.get([ 'a', 'b', 'c' ], function(error, result) {
	if (error) {
		return onErr(error);
	}
	console.log("Command-line input received: ");
	console.log("a: " + result.a);
	console.log("b: " + result.b);
	console.log("c: " + result.c);

	solver(result.a, result.b, result.c, function(error, result) {
		if (error) {
			console.log("Error: ", error);
		} else {
			console.log("Roots are: " + result.root1() + " " + result.root2());
		}
	});
});