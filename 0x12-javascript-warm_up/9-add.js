#!/usr/bin/node
function add (n, m) {
	console.log(parseInt(n) + parseInt(m));
}
add(process.argv[2], process.argv[3]);
