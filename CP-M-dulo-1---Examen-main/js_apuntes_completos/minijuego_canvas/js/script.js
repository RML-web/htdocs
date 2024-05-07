//traer una referéncia a la eitqueta canvas
const canvas = document.getElementById("myCanvas");
/**
 * @type {CanvasRenderingContext2D}
 *
 * */
const ctx = canvas.getContext("2d");

const GAME_W = 640;
const GAME_H = 360;

let gameLive = true;

const enemies = [
  {
    x: 100,
    y: 100,
    speedY: 2,
    w: 40,
    h: 40,
  },
  {
    x: 200,
    y: 0,
    speedY: 2,
    w: 40,
    h: 40,
  },
  {
    x: 330,
    y: 100,
    speedY: 3,
    w: 40,
    h: 40,
  },
  {
    x: 450,
    y: 100,
    speedY: 5,
    w: 40,
    h: 40,
  },
];

const player = {
  x: 10,
  y: GAME_H / 2 - 20,
  speedX: 2,
  w: 40,
  h: 40,
  color: "#00f",
  isMoving: false,
};

const meta = {
  x: GAME_W - 20,
  y: GAME_H / 2 - 20,
  w: 40,
  h: 40,
  color: "#0f0",
};

//funciones para mover el player
function movePlayer() {
  player.isMoving = true;
}
function stopPlayer() {
  player.isMoving = false;
}
//Eventos para mover el player
canvas.addEventListener("mousedown", movePlayer);
canvas.addEventListener("mouseup", stopPlayer);

function draw() {
  //Limpiar el canvas
  ctx.clearRect(0, 0, GAME_W, GAME_H);
  //Dibujar el player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);

  //Dibujaer la meta
  ctx.fillStyle = meta.color;
  ctx.fillRect(meta.x, meta.y, meta.w, meta.h);

  //Selecciona el color de los enemigos
  ctx.fillStyle = "#f00";
  //Dibujar los enemigos con un for
  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    ctx.fillRect(enemy.x, enemy.y, enemy.w, enemy.h);
  }
}

function update() {
  //Actualizar la posicion del player
  if (player.isMoving) {
    player.x = player.x + player.speedX;
  }
  //Mirar si llegamos a la meta
  if (checkCollision(player, meta)) {
    gameLive = false;
    alert("Has Ganado!!");
    window.location = "";
  }

  //Mover los enemigos
  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    if (checkCollision(player, enemy)) {
      gameLive = false;
      alert("Game Over!!");
      window.location = "";
    }
    enemy.y += enemy.speedY;
    if (enemy.y + enemy.h >= GAME_H) {
      enemy.speedY = enemy.speedY * -1;
    } else if (enemy.y <= 0) {
      enemy.speedY = enemy.speedY * -1;
    }
  }
}

function checkCollision(rect1, rect2) {
  const colX = rect1.x + rect1.w > rect2.x && rect1.x < rect2.x + rect2.w;
  const colY = rect1.y + rect1.h > rect2.y && rect1.y < rect2.y + rect2.h;
  return colX && colY;
}
// setInterval(() => {
//   if (gameLive) {
//     draw();
//     update();
//   }
// }, 20);

function step() {
  update();
  draw();
  if (gameLive) {
    window.requestAnimationFrame(step);
  }
}

//paso inicial
step();
