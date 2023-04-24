function add(a, b) {
  debugger;
  return mul(a * b);
}
function mul(c) {
  return c * c;
}
console.log(add(2, 3));

// Once you gave this command i.e., "node inspect filename.js" adding debugger
// The debugger starts listening
// Now we can open chrome and type chrome://inspect
// There you can see the file in which you have put in a debugger under Remote Target

// NOTE: The important reason why the node application can be debugged in only chrome is because
// BOTH USE THE V8 ENGINE.
/* 
Lets say we have imported files like chalk, yargs and filesystem.
When we open the js file in the browser to debug we will notice that the entire js file is wrapped in a function.
This function is the entry to the program just like in JAVA.

Now this can be removed by adding folder in the browser by clicking "+" under Filesystem.
This imports the node_modules and other packages and sets us free from the function wrap.

By mistake if you close the file in browser, we can still open it again by using command "restart" while it is debugging.
*/
