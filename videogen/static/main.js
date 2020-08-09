function hide() {
  gen = document.getElementById("generate")
  gen.style.opacity = 0

  title = document.getElementById("stitle")
  title.style.animationName = "title2"
  title.innerHTML = "Choose A Theme!"
  title.setAttribute("style", "margin-top: 50px")

  head = document.getElementById("head")
  head.style.animationPlayState = "running"
  head.style.opacity = 1
  
  sadButton = document.getElementById("sadButton")
  sadButton.style.opacity = 1
  sadButton.style.animationPlayState = "running"
  
  happyButton = document.getElementById("happyButton")
  happyButton.style.opacity = 1
  happyButton.style.animationPlayState = "running"
}

function sadbg() {
  bg = document.getElementById("whole")
  bg.style.animationPlayState = "running"
  bg.style.background = 'url("/static/sadPic.jpeg")'
  bg.style.backgroundRepeat = "no-repeat"
  bg.style.backgroundSize = "cover"
  
  head = document.getElementById("head")
  head.style.opacity = 0
}

function sadbgout() {
  bg = document.getElementById("whole");
  bg.style.background = 'url("/static/images.jpeg")'
  bg.style.backgroundRepeat = "no-repeat"
  bg.style.backgroundSize = "cover"
  
  head = document.getElementById("head")
  head.style.opacity = 1
}