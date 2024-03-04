// 1.код svg элемента должен находиться в html
// Находим path в нужном svg элементе и записываем в переменную
const line = document.querySelector('.svg-anim-line path')

// Встроенный метод getTotalLength() показывает длинну обводки path у svg элмемента.

function getPathLength (figure){
	// Math.trunc - удаляет дробную часть у числа (все после запятой), без округления.
	console.log(Math.trunc(figure.getTotalLength()))
	// Переопределяем значения strokeDasharray и strokeDashoffset, вычисленными с помощью js метода.
	line.style.strokeDasharray=figure.getTotalLength()
	line.style.strokeDashoffset=figure.getTotalLength()
}

getPathLength(line)

