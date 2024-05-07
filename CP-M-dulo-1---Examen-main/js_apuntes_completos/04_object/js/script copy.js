const player = {
  name: "Nigthmare killer",
  energy: 100,
  lives: 2,
  x: 19,
  y: 100,
  "color primario": "blue",
  isjumping: false,
  enemy: {
    name: "Barbie",
    superpower: "Brush the hair",
  },
};

console.log(player);

console.log(player.name);
console.log(player["color primario"]);

player.energy = 20;
console.log(player);

player.friend = { name: "Pablo" };
console.log(player.friend.name);

player.weapon = "sword";
console.log(player);

console.log("El amigo del player se llama " + player.friend.name);
/* Crear un objeto coche*/
document.write("El amigo del player se llama " + player.friend.name);
