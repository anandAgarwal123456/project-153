AFRAME.registerComponent("coins",{
   init: function() {
       for(var i=1; i<=12;i++) {
        const id = 'coin${1}';

        const posX = Math.random()*100 + -50
        const posY = Math.random()*5+5
        const posZ = Math.random()*60 + -10

        const position = {x:posX, y:posY, z:posZ}
        this.createCoins(id,position)
       }
   },

   createCoins: function(id,position) {
    var treasureEntity = document.querySelector("#treasure");
    var coinE1 = document.createElement("a-entity");

    coinE1.setAttribute("id",id);
    coinE1.setAttribute("material","color","#ff9100");
    coinE1.setAttribute("position",position);
    coinE1.setAttribute("geometry",{ primitive: "torus",radius: 8 });   
    coinE1.setAttribute("static-body", {shape:"sphere", sphereRadius:2})
    coinE1.setAttribute("game-play",{elementId:'#${id}'})
        
    treasureEntity.appendChild(coinE1);
  }
})