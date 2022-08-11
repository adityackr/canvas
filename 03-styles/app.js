// /* function draw() {
// 	const canvas = document.getElementById('canvas');
// 	const context = canvas.getContext('2d');
// 	for (let i = 0; i < 6; i++) {
// 		for (let j = 0; j < 6; j++) {
// 			context.strokeStyle = `rgb(0, ${Math.floor(255 - 42.5 * i)}, ${Math.floor(
// 				255 - 42.5 * j
// 			)})`;
// 			// context.fillRect(j * 25, i * 25, 25, 25);

// 			context.beginPath();
// 			context.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
// 			context.stroke();
// 		}
// 	}
// } */

// function draw() {
// 	const canvas = document.getElementById('canvas');
// 	const context = canvas.getContext('2d');
// 	// context.fillStyle = '#fd0';
// 	// context.fillRect(0, 0, 75, 75);
// 	// context.fillStyle = '#6c0';
// 	// context.fillRect(75, 0, 75, 75);
// 	// context.fillStyle = '#09f';
// 	// context.fillRect(0, 75, 75, 75);
// 	// context.fillStyle = '#f30';
// 	// context.fillRect(75, 75, 75, 75);
// 	// context.fillStyle = '#fff';

// 	// context.globalAlpha = 0.2;

// 	// for (let i = 0; i < 7; i++) {
// 	// 	context.beginPath();
// 	// 	context.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
// 	// 	context.fill();
// 	// }

// 	// context.fillStyle = 'rgb(255, 221, 0)';
// 	// context.fillRect(0, 0, 150, 37.5);
// 	// context.fillStyle = 'rgb(102, 204, 0)';
// 	// context.fillRect(0, 37.5, 150, 37.5);
// 	// context.fillStyle = 'rgb(0, 153, 255)';
// 	// context.fillRect(0, 75, 150, 37.5);
// 	// context.fillStyle = 'rgb(255, 51, 0)';
// 	// context.fillRect(0, 112.5, 150, 37.5);

// 	// for (let i = 0; i < 10; i++) {
// 	// 	context.fillStyle = `rgba(255, 255, 255, ${(i + 1) / 10}  )`;
// 	// 	for (let j = 0; j < 4; j++) {
// 	// 		context.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
// 	// 	}
// 	// }

// 	// for (let i = 0; i < 10; i++) {
// 	// 	context.lineWidth = 1 + i;
// 	// 	context.beginPath();
// 	// 	context.moveTo(5 + i * 14, 5);
// 	// 	context.lineTo(5 + i * 14, 140);
// 	// 	context.stroke();
// 	// }

// 	// const lineCap = ['butt', 'round', 'square'];

// 	// context.strokeStyle = '#09f';
// 	// context.beginPath();
// 	// context.moveTo(10, 10);
// 	// context.lineTo(140, 10);
// 	// context.moveTo(10, 140);
// 	// context.lineTo(140, 140);
// 	// context.stroke();

// 	// context.strokeStyle = '#000';
// 	// for (let i = 0; i < lineCap.length; i++) {
// 	// 	context.lineWidth = 15;
// 	// 	context.lineCap = lineCap[i];
// 	// 	context.beginPath();
// 	// 	context.moveTo(25 + i * 50, 10);
// 	// 	context.lineTo(25 + i * 50, 140);
// 	// 	context.stroke();
// 	// }

// 	const lineJoin = ['round', 'bevel', 'miter'];
// 	context.lineWidth = 10;
// 	for (let i = 0; i < lineJoin.length; i++) {
// 		context.lineJoin = lineJoin[i];
// 		context.beginPath();
// 		context.moveTo(-5, 5 + i * 40);
// 		context.lineTo(35, 45 + i * 40);
// 		context.lineTo(75, 5 + i * 40);
// 		context.lineTo(115, 45 + i * 40);
// 		context.lineTo(155, 5 + i * 40);
// 		context.stroke();
// 	}
// }

// window.onload = draw;

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let offset = 0;

function draw() {
	context.clearRect(0, 0, 200, 200);
	context.setLineDash([4, 2]);
	context.lineDashOffset = -offset;
	context.strokeRect(10, 10, 100, 100);
}

function march() {
	offset++;
	if (offset > 16) {
		offset = 0;
	}
	draw();
	setTimeout(march, 20);
}

window.onload = march;

// window.onload = draw;
