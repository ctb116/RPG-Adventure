export function Character(name, role, level, attributes, stats, inventory) {
  this.name = name;
  this.role = role;
  this.level = level;
  this.attributes = attributes;
  this.stats = stats;
  this.inventory = inventory;
}




// var dayName = days[date.getDay()];
var date = new Date();


var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December"];

export var today = (dayNames[date.getDay()] + ", " + date.getUTCDate() + "th of " + monthNames[date.getMonth()] + ", " + date.getFullYear());



// attributes = [Str, Dex, Agi, Chr, Wis, AC] attributes constant
// stats = [HP, AP] stats deplete
export var fighter = new Character ("Duff", "Fighter", 1, [16, 10, 12, 17, 5, 17], [20, 2], ["sword", "heal potion"]);

export var caster = new Character ("Balthazar", "Spellcaster", 1, [5, 6, 6, 10, 16, 12], [10, 2], ["potion", "fat book"]);

export var rogue = new Character ("Tarence", "Rogue", 1, [5, 16, 13, 14, 10, 14], [14, 2], ["lockpick", "poison"]);

export var goblin = new Character ("Goblin Man", "Monster", 1, [5, 16, 13, 14, 10, 14], [14, 2], ["chicken leg", "coin"])

Character.prototype.characterFighter = function () {
  return this.name;
};

Character.prototype.characterSpellCaster = function () {
  return this.name;
};

Character.prototype.characterRogue = function () {
  return this.name;
};


// const fight = () => {
//
//   document.getElementById('character-health').innerText = fighter.stats[0];
//   console.log("fighter.stats[0]");
//
// }


// }


// Character.prototype.characterInventory = function () {
//   return this.inventory[1];
//
// };
