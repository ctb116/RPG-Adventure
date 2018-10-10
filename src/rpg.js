export function Character(name, role, level, attributes, stats, inventory) {
  this.name = name;
  this.role = role;
  this.level = level;
  this.attributes = attributes;
  this.stats = stats;
  this.inventory = inventory;
}


Character.prototype.characterFighter = function () {
  return this.name;
};

Character.prototype.characterSpellCaster = function () {
  return this.name;
};

Character.prototype.characterRogue = function () {
  return this.name;
};

// Character.prototype.characterInventory = function () {
//   return this.inventory[1];
//
// };
