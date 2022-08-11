function draw() {
	const canvas = document.getElementById('canvas');
	const context = canvas.getContext('2d');

	// const grd = context.createLinearGradient(0, 0, 200, 0);
	const grd = context.createRadialGradient(75, 50, 5, 90, 60, 100);

	grd.addColorStop(0, '#f00');
	grd.addColorStop(1, '#fff');

	context.fillStyle = grd;
	context.fillRect(10, 10, 150, 80);
}

window.onload = draw;
