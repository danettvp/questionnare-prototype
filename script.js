let blobData = {};

function next(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function generateBlob() {
  blobData.size = 40 + Math.random() * 60;
  blobData.radiusA = Math.random() * 100;
  blobData.radiusB = Math.random() * 100;

  const blob = createBlob();
  blob.style.position = 'relative';

  const preview = document.getElementById('blobPreview');
  preview.innerHTML = '';
  preview.appendChild(blob);

  next('result');
}

function createBlob() {
  const blob = document.createElement('div');
  blob.className = 'blob';

  blob.style.width = blobData.size + 'px';
  blob.style.height = blobData.size + 'px';

  blob.style.borderRadius = `${blobData.radiusA}% ${100 - blobData.radiusA}% ${blobData.radiusB}% ${100 - blobData.radiusB}%`;

  return blob;
}

function sendToTank() {
  next('tankScreen');

  const tank = document.getElementById('tank');
  const blob = createBlob();

  let x = window.innerWidth / 2 - blobData.size / 2;
  let y = window.innerHeight / 2 - blobData.size / 2;

  let dx = (Math.random() - 0.5) * 1;
  let dy = (Math.random() - 0.5) * 1;

  tank.appendChild(blob);

  function animate() {
    x += dx;
    y += dy;

    if (x <= 0 || x >= window.innerWidth - blobData.size) dx *= -1;
    if (y <= 0 || y >= window.innerHeight - blobData.size) dy *= -1;

    blob.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(animate);
  }

  animate();
}