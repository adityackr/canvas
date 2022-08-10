function draw() {
	const canvas = document.getElementById('canvas');
	const context = canvas.getContext('2d');

	for (let i = 0; i < 6; i++) {
		for (let j = 0; j < 6; j++) {
			context.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)}, ${Math.floor(
				255 - 42.5 * j
			)}, 0)`;
			context.fillRect(j * 25, i * 25, 25, 25);
		}
	}
}

window.onload = draw;
