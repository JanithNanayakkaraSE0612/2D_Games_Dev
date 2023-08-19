// Player movement
const player = document.querySelector('.player');
let playerX = 50;

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' && playerX > 0) {
    playerX -= 5;
  } else if (e.key === 'ArrowRight' && playerX < 100) {
    playerX += 5;
  }
  player.style.left = playerX + '%';
});

// Shooting
const bullet = document.querySelector('.bullet');
let isBulletVisible = false;
let bulletY = 100;
let bulletInterval;

function shootBullet() {
  if (!isBulletVisible) {
    bullet.style.display = 'block';
    bullet.style.left = playerX + '%';
    bulletY = 100;
    isBulletVisible = true;
    bulletInterval = setInterval(moveBullet, 20);
  }
}

function moveBullet() {
  bulletY += 5;
  bullet.style.bottom = bulletY + 'px';

  // Check for collision with enemy
  const enemy = document.querySelector('.enemy');
  const enemyRect = enemy.getBoundingClientRect();
  const bulletRect = bullet.getBoundingClientRect();

  if (
    bulletRect.bottom >= enemyRect.top &&
    bulletRect.left >= enemyRect.left &&
    bulletRect.right <= enemyRect.right
  ) {
    clearInterval(bulletInterval);
    bullet.style.display = 'none';
    isBulletVisible = false;
    enemy.style.display = 'none';
    alert('You win!');
  }

  // Check if bullet is off the screen
  if (bulletY >= 400) {
    clearInterval(bulletInterval);
    bullet.style.display = 'none';
    isBulletVisible = false;
  }
}

// Enemy spawn
function spawnEnemy() {
  const enemy = document.querySelector('.enemy');
  enemy.style.display = 'block';
}

setInterval(spawnEnemy, 2000);

document.addEventListener('keydown', (e) => {
  if (e.key === ' ' || e.key === 'Spacebar') {
    shootBullet();
  }
});
