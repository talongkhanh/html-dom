var paragraphNode = document.getElementById('paragraph-1');
console.log(paragraphNode);

var headingNode = document.getElementsByClassName('heading');
// getElementsByClassName return HTML collection like array
console.log(headingNode[0]);

var menuNode = document.getElementsByTagName('ul');
// getElementsByTagName return HTML collection like array
console.log(menuNode);