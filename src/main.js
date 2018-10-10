import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Character, fighter, caster, rogue } from './rpg.js';
// import { fighter } from './rpg.js';

console.log(fighter);

$(document).ready(function() {
  console.log(fighter.stats[0]);
  console.log(caster.name);
  console.log(rogue.name);

  $("#character-health").text(" " + fighter.stats[0]);
  $("#character-str").text(" " + fighter.attributes[0]);

  $("#fight-button").click(function(){
    if(fighter.attributes[0] >= 16) {
      alert("YOU STRONG YOU WIN!!!!!");
    } else {
      alert("you are are weak you lose");
    }
  })


});
