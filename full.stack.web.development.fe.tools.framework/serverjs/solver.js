/**
 * Author: Jenhau Chen
 */

var solver = require("./quadratic.roots");

solver(1, 4, 1, function(error, result) {
	if (error) {
		console.log("Error: ", error);
	} else {
		console.log("Roots are: " + result.root1() + " " + result.root2());
	}
});
