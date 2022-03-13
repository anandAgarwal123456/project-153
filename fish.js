AFRAME.registerComponent("fishes",{
    init: function() {
        for(var i=1; i<=14;i++) {
         const id = 'fish${1}';
 
         const posX = Math.random()*100 + -10
         const posY = Math.random()*5+ 8
         const posZ = Math.random()*60 + -15
 
         const position = {x:posX, y:posY, z:posZ}
         this.createFish(id,position)
        }
    },
 
    createFish: function(id,position) {
     var treasureEntity = document.querySelector("#fish");
     var fish1 = document.createElement("a-entity");
 
     fish1.setAttribute("id",id);
     fish1.setAttribute("position",position);
     fish1.setAttribute("geometry",{ primitive: "torus",radius: 6 });   
     fish1.setAttribute("game-play",{elementId:'#${id}'})
 
     fish1.setAttribute("animation",{
       property:"moving",
       to:"0 360 0",
       dur:"1000",
       loop:"true"
     })
         
     treasureEntity.appendChild(fish1);
   }
 })