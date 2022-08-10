// function rect() {
// 	const canvas = document.getElementById('canvas');

// 	if (canvas.getContext) {
// 		const ctx = canvas.getContext('2d');

// 		ctx.fillRect(25, 25, 100, 100);
// 		ctx.clearRect(45, 45, 60, 60);
// 		ctx.strokeRect(50, 50, 50, 50);
// 	}
// }

// function path() {
// 	const canvas = document.getElementById('canvas');

// 	if (canvas.getContext) {
// 		const context = canvas.getContext('2d');

// 		context.beginPath();
// 		context.moveTo(5, 5);
// 		context.lineTo(105, 5);
// 		context.lineTo(5, 105);
// 		context.fill();

// 		context.beginPath();
// 		context.moveTo(125, 125);
// 		context.lineTo(125, 25);
// 		context.lineTo(25, 125);
// 		context.closePath();
// 		context.stroke();
// 	}
// }

// function arc() {
// 	const canvas = document.getElementById('canvas');

// 	if (canvas.getContext) {
// 		const context = canvas.getContext('2d');

// 		for (let i = 0; i < 4; i++) {
// 			for (let j = 0; j < 3; j++) {
// 				context.beginPath();

// 				const x = 25 + j * 50;
// 				const y = 25 + i * 50;
// 				const radius = 20;
// 				const startAngle = 0;
// 				const endAngle = Math.PI + (Math.PI * j) / 2;
// 				const counterClockWise = i % 2 !== 0;

// 				context.arc(x, y, radius, startAngle, endAngle, counterClockWise);

// 				if (i > 1) {
// 					context.fill();
// 				} else {
// 					context.stroke();
// 				}
// 			}
// 		}
// 	}
// }

// function smiley() {
// 	const canvas = document.getElementById('canvas');

// 	if (canvas.getContext) {
// 		const context = canvas.getContext('2d');

// 		context.beginPath();
// 		context.arc(75, 75, 50, 0, Math.PI * 2, true);
// 		context.moveTo(110, 75);
// 		context.arc(75, 75, 35, 0, Math.PI, false);
// 		context.moveTo(65, 60);
// 		context.arc(60, 60, 5, 0, Math.PI * 2, true);
// 		context.moveTo(95, 60);
// 		context.arc(90, 60, 5, 0, Math.PI * 2, true);
// 		context.stroke();
// 	}
// }

// function qCurves() {
// 	const canvas = document.getElementById('canvas');

// 	if (canvas.getContext) {
// 		const context = canvas.getContext('2d');

// 		context.beginPath();
// 		context.moveTo(75, 25);
// 		context.quadraticCurveTo(25, 25, 25, 62.5);
// 		context.quadraticCurveTo(25, 100, 50, 100);
// 		context.quadraticCurveTo(50, 120, 30, 125);
// 		context.quadraticCurveTo(60, 120, 65, 100);
// 		context.quadraticCurveTo(125, 100, 125, 62.5);
// 		context.quadraticCurveTo(125, 25, 75, 25);
// 		context.stroke();
// 	}
// }

// function cubicCurves() {
// 	const canvas = document.getElementById('canvas');

// 	if (canvas.getContext) {
// 		const context = canvas.getContext('2d');

// 		context.beginPath();
// 		context.moveTo(75, 40);
// 		context.bezierCurveTo(75, 37, 70, 25, 50, 25);
// 		context.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
// 		context.bezierCurveTo(20, 80, 40, 102, 75, 120);
// 		context.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
// 		context.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
// 		context.bezierCurveTo(85, 25, 75, 37, 75, 40);

// 		context.fill();
// 	}
// }

// function rect() {
// 	const canvas = document.getElementById('canvas');

// 	if (canvas.getContext) {
// 		const context = canvas.getContext('2d');

// 		context.beginPath();
// 		context.rect(50, 50, 150, 150);

// 		context.fill();
// 	}
// }

function combination() {
	const canvas = document.getElementById('canvas');

	if (canvas.getContext) {
		const context = canvas.getContext('2d');

		roundedRect(context, 12, 12, 150, 150, 15);
		roundedRect(context, 19, 19, 150, 150, 9);
		roundedRect(context, 53, 53, 49, 33, 10);
		roundedRect(context, 53, 119, 49, 16, 6);
		roundedRect(context, 135, 53, 49, 33, 10);
		roundedRect(context, 135, 119, 25, 49, 10);

		context.beginPath();
		context.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
		context.lineTo(31, 37);
		context.fill();

		for (let i = 0; i < 8; i++) {
			context.fillRect(51 + i * 16, 35, 4, 4);
		}

		for (let i = 0; i < 6; i++) {
			context.fillRect(115, 51 + i * 16, 4, 4);
		}

		for (let i = 0; i < 8; i++) {
			context.fillRect(51 + i * 16, 99, 4, 4);
		}

		context.beginPath();
		context.moveTo(83, 116);
		context.lineTo(83, 102);
		context.bezierCurveTo(83, 94, 89, 88, 97, 88);
		context.bezierCurveTo(105, 88, 111, 94, 111, 102);
		context.lineTo(111, 116);
		context.lineTo(106.333, 111.333);
		context.lineTo(101.666, 116);
		context.lineTo(97, 111.333);
		context.lineTo(92.333, 116);
		context.lineTo(87.666, 111.333);
		context.lineTo(83, 116);
		context.fill();

		context.fillStyle = 'white';
		context.beginPath();
		context.moveTo(91, 96);
		context.bezierCurveTo(88, 96, 87, 99, 87, 101);
		context.bezierCurveTo(87, 103, 88, 106, 91, 106);
		context.bezierCurveTo(94, 106, 95, 103, 95, 101);
		context.bezierCurveTo(95, 99, 94, 96, 91, 96);
		context.moveTo(103, 96);
		context.bezierCurveTo(100, 96, 99, 99, 99, 101);
		context.bezierCurveTo(99, 103, 100, 106, 103, 106);
		context.bezierCurveTo(106, 106, 107, 103, 107, 101);
		context.bezierCurveTo(107, 99, 106, 96, 103, 96);
		context.fill();

		context.fillStyle = 'black';
		context.beginPath();
		context.arc(101, 102, 2, 0, Math.PI * 2, true);
		context.fill();

		context.beginPath();
		context.arc(89, 102, 2, 0, Math.PI * 2, true);
		context.fill();
	}
}

function roundedRect(context, x, y, width, height, radius) {
	context.beginPath();
	context.moveTo(x, y + radius);
	context.arcTo(x, y + height, x + radius, y + height, radius);
	context.arcTo(x + width, y + height, x + width, y + height - radius, radius);
	context.arcTo(x + width, y, x + width - radius, y, radius);
	context.arcTo(x, y, x, y + radius, radius);
	context.stroke();
}

window.onload = combination;
