export function Character(name, role, level, attributes, stats, inventory) {
  this.name = name;
  this.role = role;
  this.level = level;
  this.attributes = attributes;
  this.stats = stats;
  this.inventory = inventory;
}


// attributes = [Str, Dex, Agi, Chr, Wis, AC] attributes constant
// stats = [HP, AP] stats deplete

export var fighter = new Character ("Duff", "Fighter", 1, [16, 10, 12, 17, 5, 17], [20, 2], ["sword", "heal potion"]);

export var caster = new Character ("Balthazar", "Spellcaster", 1, [5, 6, 6, 10, 16, 12], [10, 2], ["potion", "fat book"]);

export var rogue = new Character ("Tarence", "Rogue", 1, [5, 16, 13, 14, 10, 14], [14, 2], ["lockpick", "poison"]);


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
