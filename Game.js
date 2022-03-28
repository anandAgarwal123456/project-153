AFRAME.registerComponent("game-play",{
    schema:{
        elementId:{type:"string",default:"#treasure1"},
        elementId:{type:"string",default:"#fish"}
    },

    init:function() {
        var duration =120
        var timerE1 = document.querySelector("#timer")
        this.startTimer(duration,timerE1)

    },

    startTimer: function(duration,timerE1) {
         var minutes, seconds
          
         setInterval(() => {

            if(duration>=0) {
                minutes = parseInt(duration/60)
                seconds = parseInt(duration%60)
   
                if(minutes<10) {
                   minutes = "0" + minutes
                }
                if(seconds<10) {
                   seconds = "0" + minutes
                }
   
                timerE1.setAttribute("text",{value: minutes+":"+seconds})
                duration = duration-1
            }
            else {
                this.gameOver()
            }
         }, 1000);
    },

    updateTarget: function() {
        var element = document.querySelector("#targets")
        var count = element.getAttribute("text").value()
        var currentTarget = parseInt(count)
        currentTarget = currentTarget-1
        element.setAttribute("text",{value:currentTarget})
    },

    updateScore: function() {
        var element = document.querySelector("#score")
        var count = element.getAttribute("text").value()
        var currentTarget = parseInt(count)
        currentScore = currentScore+50
        element.setAttribute("text",{value:currentScore})
    },

    gameOver: function() {
        var planeE1 = document.querySelector("#island")
        var element = document.querySelector("#game_over_text")
        
        element.setAttribute("visible",true)
        planeE1.setAttribute("dynamic",{mass:1})
    },


    update: function() {
        this.isCollided(this.data.elementId)
    },

    isCollided: function(elementId){
        const element = document.querySelector(elementId)
        element.addEventlistner("collide", e => {
            if(elementId.includes("#treasure")) {
                element.setAttribute("visible",false)
                this.updateScore()
                this.updateTarget()
            }
            else if(elementId.includes("#fish")) {
                this.gameOver()
            }
        })
    }
})
