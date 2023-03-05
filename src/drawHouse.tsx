export function drawHouse(ctx: CanvasRenderingContext2D) {
  ctx.lineWidth = 10;

  ctx.strokeRect(75, 140, 150, 110); // wall
  ctx.fillRect(130, 190, 40, 60); // Door

  ctx.beginPath(); // Roof
  ctx.moveTo(50, 140);
  ctx.lineTo(150, 60);
  ctx.lineTo(250, 140);
  ctx.closePath();
  ctx.stroke();
}
