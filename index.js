document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)
  const ul = document.getElementById("moves-container");
  const moveButton = document.getElementById("move-button")
  // ADD CODE HERE!
  document.addEventListener("keydown", function(e){
    switch (e.key){
      case "ArrowLeft":
        let liLeft = document.createElement("li");
        liLeft.innerText = "left";
        ul.appendChild(liLeft);
        break;
      case "ArrowRight":
        let liRight = document.createElement("li");
        liRight.innerText = "right";
        ul.appendChild(liRight);
        break;
      case "ArrowDown":
        let liDown = document.createElement("li");
        liDown.innerText = "down";
        ul.appendChild(liDown);
        break;
      case "ArrowUp":
        let liUp = document.createElement("li");
        liUp.innerText = "up";
        ul.appendChild(liUp);
        break;
      case "Backspace":
        ul.removeChild(ul.lastChild)
        //ul.lastChild.remove()
      break;
    }

  })

  moveButton.addEventListener("click", function(e){
    let direction = ul.firstChild.innerText;
    move(direction);
    ul.firstChild.remove()
  })

})
