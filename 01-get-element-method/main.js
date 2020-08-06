var paragraphNode = document.getElementById('paragraph-1');
console.log(paragraphNode);

var headingNode = document.getElementsByClassName('heading');
// getElementsByClassName return HTML collection like array
console.log(headingNode[0]);

var menuNode = document.getElementsByTagName('ul');
// getElementsByTagName return HTML collection like array
console.log(menuNode[0]);


//querySelector return one element (first element)
var itemNode = document.querySelector('.list-item');
console.log(itemNode);

// querySelectorAll return NodeList like array
var itemNodes = document.querySelectorAll('.list-item');
console.log(itemNodes);

for(var itemNode of itemNodes) {
	console.log(itemNode);
}