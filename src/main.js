import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Character, fighter, caster, rogue, today } from './rpg.js';
// import { fighter } from './rpg.js';


$(document).ready(function() {

  $("#character-health").text(" " + fighter.stats[0]);
  $("#character-str").text(" " + fighter.attributes[0]);

  // var role;
  // console.log(role);

  //
  // $("#fighter").click(function() {
  // var role = this.id
  // });
  //
  // $("#caster").click(function() {
  // var role = this.id
  // });

  // $("#fighter").click(function() {
  // role = this.id;
  // console.log(role);
  // return role;
  // });


document.getElementById("date").innerHTML = today;


  $(".choice").click(function() {
    if (this.id === 'fighter') {
      var role = fighter;
      console.log(role);
    } else if (this.id === 'caster') {
      var role = caster;
      console.log(role);
    } else if (this.id === 'rogue') {
      var role = rogue
      console.log(rogue);
    }

    $("#selectChoice").hide();
    $("#graduate").show();


    $("#fight-button").click(function(){
      if(role.attributes[0] >= 16) {
        alert("YOU STRONG YOU WIN!!!!!");
      } else {
        alert("you are are weak you lose");
      }
    });




  });
});
