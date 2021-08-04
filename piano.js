
// get input from clicking
for(var i=0;i<document.querySelectorAll(".key").length;i++){
  document.querySelectorAll(".key")[i].addEventListener("click",function(){
    var letter= this.innerHTML;
    playSound(letter);
    highlightKey(letter);
  });
}


// Get input from keyboard
document.addEventListener("keypress",function(event){
  playSound(event.key);
  highlightKey(event.key);
})

// Create function to play sounds
function playSound(key){
  switch (key) {
    case "s":
      var doh = new Audio("do.wav");
      doh.play();
      break;
    case "d":
      var re = new Audio("re.wav");
        re.play();
      break;
    case "f":
        var mi = new Audio("mi.wav");
        mi.play();
      break;
    case "g":
        var fa = new Audio("fa.wav");
        fa.play();
      break;
    case "h":
        var sol = new Audio("sol.wav");
        sol.play();
      break;
    case "j":
        var la= new Audio("la.wav");
        la.play();
      break;
    case "k":
        var ti = new Audio("ti.wav");
        ti.play();
      break;
    case "l":
        var do2 = new Audio("do(octave).wav");
        do2.play();
      break;
    default:console.log(innerHTML);

  }
}

// Create function to simulate highlighting key
function highlightKey(currentKey){
  var activeKey=document.querySelector("."+currentKey);
  activeKey.classList.add("pressed");
  setTimeout(function(){
  activeKey.classList.remove("pressed");
  },100);
}
