const player = {
    name: "Nightmare Killer",
    energy: 100,
    lives: 2,
    x: 19,
    y: 100,
    color: "blue",
    isjumping: false,
    enemy: {
        name:"Barbie",
        superpower: "Brush the air",
    },

};
console.log(player);
console.log(player.name);

player.energy = 20;
console.log(player);

player.friend = {name:"Pablo"}
console.log(player.friend.name);

player.weapon = "sword";
console.log()




