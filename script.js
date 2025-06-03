// Hero animation
window.addEventListener('load', () => {
  gsap.from('.hero-content h1', { y: 50, opacity: 0, duration: 1 });
  gsap.from('.cta-buttons button', { y: 20, opacity: 0, duration: 0.5, stagger: 0.2, delay: 0.5 });
});

// Simple placeholder chart animation using canvas
const canvas = document.getElementById('chart');
if (canvas) {
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = 300;

  const data = [50, 80, 65, 90, 70, 100, 85];

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeStyle = '#5c7cfa';
    ctx.lineWidth = 3;
    ctx.moveTo(0, canvas.height - data[0]);
    data.forEach((d, i) => {
      const x = (i / (data.length - 1)) * canvas.width;
      const y = canvas.height - d;
      ctx.lineTo(x, y);
    });
    ctx.stroke();
  }

  draw();
}
