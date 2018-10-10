import { Character } from './../src/rpg.js';

describe('Character', function() {
  var fighter;
  var spellcaster;
  var rogue;

// THE FIGHTER
  beforeEach(function() {
    var name = "Duff";
    var role = "Fighter";
    var level = 1;
    var inventory = ["sword", "heal potion"];

    // attributes = [Str, Dex, Agi, Chr, Wis, AC] attributes constant
    var attributes = [16, 10, 12, 17, 5, 17];
    // stats = [HP, AP] stats deplete
    var stats = [20, 2];

    fighter = new Character (name, role, level, attributes, stats, inventory);
  });

// THE SPELLCASTER
  beforeEach(function() {
    var name = "Balthazar";
    var role = "Spellcaster";
    var level = 1;
    var inventory = ["potion", "fat book"];

    // attributes = [Str, Dex, Agi, Chr, Wis, AC] attributes constant
    var attributes = [5, 6, 6, 10, 16, 12];
    // stats = [HP, AP] stats deplete
    var stats = [10, 2];

    spellcaster = new Character (name, role, level, attributes, stats, inventory);
  });

// THE ROGUE
  beforeEach(function() {
    var name = "Tarence";
    var role = "Rogue";
    var level = 1;
    var inventory = ["lockpick", "poison"];

    // attributes = [Str, Dex, Agi, Chr, Wis, AC] attributes constant
    var attributes = [5, 16, 13, 14, 10, 14];
    // stats = [HP, AP] stats deplete
    var stats = [14, 2];

    rogue = new Character (name, role, level, attributes, stats, inventory);
  });

// SPEC TESTING
  it('should return the fighter profile', function() {
    expect(fighter.characterFighter()).toEqual(fighter.name);
  });

  it('should return the spellcaster profile', function() {
    expect(spellcaster.characterSpellCaster()).toEqual(spellcaster.name);
  });

  it('should return the rogue profile', function() {
    expect(rogue.characterRogue()).toEqual(rogue.name);
  });

});
