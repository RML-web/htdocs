//Traer una referencia a la etiqueta canvas
const canvas = document.getElementById("myCanvas");

/**
 * @type {CanvasRenderingContext2D}
 */
const ctx = canvas.getContext("2d");

const GAME_W = 640;
const GAME_H = 360;

let gameLive = true;

const enemies = [
  {
    x: 100,
    y: 0,
    speedY: 2,
    speedX: 1,
    w: 40,
    h: 40,
    color: "#0ff",
  },
  {
    x: 250,
    y: 0,
    speedY: 2,
    speedX: 2,
    w: 40,
    h: 40,
    color: "#0ff",
  },
  {
    x: 400,
    y: 0,
    speedY: 2,
    speedX: 1,
    w: 40,
    h: 40,
    color: "#0ff",
  },
  {
    x: 550,
    y: 0,
    speedY: 2,
    speedX: 2,
    w: 40,
    h: 40,
    color: "#0ff",
  },
];

const player = {
  x: 10,
  y: GAME_H / 2 - 20,
  speedX: 2,
  w: 40,
  h: 40,
  color: "#0ff",
  isMoving: false,
};

const meta = {
  x: 639,
  y: GAME_H / 2 - 20,
  speedX: 2,
  w: 0,
  h: 40,
//   color: "blue",
  isMoving: false,
};

//Funciones para mover el player
function movePlayer() {
  console.log("mover el player");
  player.isMoving = true;
}

function stopPlayer() {
  console.log("stop player");
  player.isMoving = false;
}

//Eventos para mover el player
canvas.addEventListener("mousedown", movePlayer);
canvas.addEventListener("mouseup", stopPlayer);

function draw() {
  //Limppiar el canvas
  ctx.clearRect(0, 0, GAME_W, GAME_H);
  //Dibujar el player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);

  //Dibujar la meta
//   ctx.fillStyle = meta.color;
  ctx.fillRect(meta.x, meta.y, meta.w, meta.h);

  ctx.fillStyle = "red";
  //Dibujar los enemigos con bucle For
  for (let i = 0; i < enemies.length; i++) {
    const enemie = enemies[i];
    ctx.fillRect(enemie.x, enemie.y, enemie.w, enemie.h);
  }
}

function update() {
  //Mover el player
  //   player.y += player.speedX;
  // //   console.log(player.x);
  //   if (player.y + player.h >= GAME_H){
  //     player.speedX = player.speedX * -1;
  //   } else if (player.y <= 0) {
  //     player.speedX = player.speedX * -1;
  //   }

  //Actualizar la posición del player
  if (player.isMoving) {
    player.x = player.x + player.speedX;
  }

  //Mover el player
  if (checkCollision(player, meta)) {
    gameLive = false;
    alert("Has ganado!");
  //   gameLive = false;
    window.location = "";
  }

  //Mover los enemigos
  for (let i = 0; i < enemies.length; i++) {
    const enemie = enemies[i];
    if (checkCollision(player, enemie)) {
      gameLive = false;
      alert("Game Over");
      window.location = "";
    } 

    enemie.y += enemie.speedX;
    //   console.log(enemie.x);
    if (enemie.y + enemie.h >= GAME_H) {
      enemie.speedX = enemie.speedX * -1;
    } else if (enemie.y <= 0) {
      enemie.speedX = enemie.speedX * -1;
    }
  }
}

draw();
update();

function checkCollision(rect1, rect2) {
  const colx = rect1.x + rect1.w > rect2.x && rect1.x < rect2.x + rect2.w;
  const coly = rect1.y + rect1.h > rect2.y && rect1.y < rect2.y + rect2.h;

  return colx && coly;
}


// setInterval(() => {
//   if (gameLive) {
//     draw();
//     update();
//   }
// }, 10);

function step (){
    update();
    draw();
    if (gameLive) {
        window.requestAnimationFrame(step);
    }
}

step ()