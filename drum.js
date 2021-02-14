

window.addEventListener("keydown", play)

function play(e) {
 
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    console.log(e)
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

   key.classList.add("style")


   if(!audio) return;
   audio.play()
   audio.currentTime = 0
}





    function removeStyle(e){
        
    this.classList.remove("style")
    console.log(e)
}
    let keys= document.querySelectorAll(".key") 
    
    keys.forEach(key => {key.addEventListener("transitionend" , removeStyle)
        
    });







