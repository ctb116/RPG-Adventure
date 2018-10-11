import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Character, fighter, caster, rogue, today, goblin } from './rpg.js';
// import { fighter } from './rpg.js';


$(document).ready(function() {

  document.getElementById("date").innerHTML = today;
  var escapeButton = document.getElementById("escape");
  var attackButton = document.getElementById("fightMain");
          var diceRoll = Math.floor((Math.random() * 20) + 1);

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

    $("#grad").click(function() {
      $("#graduate").hide();
      $("#encounterOne").show();
      escapeButton.disabled = true;

      $(".encounter").click(function(){
        if(this.id === 'fight') {
          $("#fightScene").show();
          $(".encounter").hide();
        } else if (this.id === 'talk') {
          $("#talkScene").show();
        } else if (this.id === 'escape') {
          $("#escapeScene").show();
        }
      });
    });
    $("#goblin-health").text(" " + goblin.stats[0]);
    $("#character-health").text(" " + role.stats[0]);
    $("#character-str").text(" " + role.attributes[0]);
    $("#character-dex").text(" " + role.attributes[1]);
    $("#character-agi").text(" " + role.attributes[2]);
    $("#character-chr").text(" " + role.attributes[3]);
    $("#character-wis").text(" " + role.attributes[4]);
    $("#character-ac").text(" " + role.attributes[5]);

    function goblinAttack() {
      $("#gameMessage1").show();
      $("#gameMessage2").hide();
      // var attackMes = "The goblin is about to attack";
      // document.getElementById("gameMessage").innerHTML = attackMes;
      var goblinAttack = 4;
      role.stats[0] -= goblinAttack;
      $("#character-health").text(" " + role.stats[0]);
      attackButton.disabled = false;
    }

    $(".attack").click(function() {
      if(this.id === 'fightMain') {
        $("#gameMessage2").show();
        $("#gameMessage1").hide();
        $("#message").hide();
        // 1d6
        // var diceRoll = Math.floor((Math.random() * 20) + 1);
        console.log(diceRoll);

          if(diceRoll === 20) {
            var playerAttack = role.attributes[0]
            console.log("critical attack");
          } else {
            var playerAttack = Math.floor(Math.random() * role.attributes[0]-1);
            console.log("normal attack");
          }

        goblin.stats[0] -= playerAttack;
        $("#goblin-health").text(" " + goblin.stats[0]);
        attackButton.disabled = true;
        setTimeout(goblinAttack, 1000);
      }
      // } else if (this.id === 'fightSpecial') {
      //
      // } else if (this.id === 'fightTalk') {
      //
      // } else if (this.id === 'fightEscape') {
      //
      // }


      if(role.stats[0] === 0) {
        alert("you died. Please be kind enough to reset the page to start over");
      }

      if(goblin.stats[0] <= 0) {
        $("#fightScene").hide();
        $("#gameMessage3").show();
        role.level = 2;
        console.log(role.level);
        var loot = goblin.inventory[0];
        (role.inventory).push(loot);
        console.log(role.inventory);
        document.getElementById("loot").innerHTML = loot;
      }

      if(role.level === 2) {
        role.attributes[0] += 2;
        role.attributes[1] += 2;
        role.attributes[2] += 2;
        role.attributes[3] += 2;
        role.attributes[4] += 2;

        $("#character-str").text(" " + role.attributes[0]);
        $("#character-dex").text(" " + role.attributes[1]);
        $("#character-agi").text(" " + role.attributes[2]);
        $("#character-chr").text(" " + role.attributes[3]);
        $("#character-wis").text(" " + role.attributes[4]);
      }
    });
    //
    // if(role.stats[0] === 0) {
    //   alert("you died. Please be kind enough to reset the page to start over");
    // }
    //
    // if(goblin.stats[0] <= 0) {
    //   $("#fightScene").hide();
    //   $("#gameMessage3").show();
    //   role.level = 2;
    //   console.log(role.level);
    //   var loot = goblin.inventory;
    //   (role.inventory).push(loot);
    //   console.log(role.inventory);
    // }


  });
});
