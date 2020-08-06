var boxElement = document.querySelector('.box');

console.log(boxElement.classList);

boxElement.classList.add('greenBackground', 'oval');

console.log(boxElement.classList.length);


console.log(boxElement.classList.contains('oval'));

setTimeout(() => {
	boxElement.classList.remove('oval');
}, 2000)


var btn = document.getElementById('btn');


btn.addEventListener('click', () => {
	boxElement.classList.toggle('oval');
})