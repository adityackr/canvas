function draw() {
	const canvas = document.getElementById('canvas');
	const context = canvas.getContext('2d');

	// context.font = '30px Arial';
	// context.fillText('Hello World', 10, 50);
	// context.strokeText('Hello World', 10, 50);

	context.font = '30px Comic Sans MS';
	context.fillStyle = 'red';
	context.textAlign = 'center';
	context.fillText('Hello World', canvas.width / 2, canvas.height / 2);
}

window.onload = draw;
