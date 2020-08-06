var headingNode = document.querySelector('.heading');

var innerText = headingNode.innerText;

var textContent = headingNode.textContent;

console.log(innerText);
// diff
console.log(textContent);

headingNode.innerText = `

		New Content

`;
// diff


// headingNode.textContent = `

// 		New Content

// `;