let inputE = document.querySelector('input[type="text"]');

let chexBoxE = document.querySelector('input[type="checkbox"]');
// change input keyup
let inputValue;
inputE.addEventListener('input', (e) => {
	inputValue = e.target.value;
})

//

chexBoxE.addEventListener('change', (e) => {
	console.log(e.target.checked);
})

//

let selectE = document.querySelector('select')

selectE.addEventListener('change', (e) => {
	console.log(e.target.value);
})

// keup

document.addEventListener('keypress', (e) => {
	console.log(e.which);
})