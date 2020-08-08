var h1Elements = document.querySelectorAll('.heading');

// console.log(h1Element);
for(let h1Element of h1Elements ) {
	h1Element.onclick = (e) => {
	console.log(e.target);
}
}
