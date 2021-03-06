function draw_hierarchy(drawingFrame){
  let x = 13
  let y = 5
  let width = 16
  let height = 10
  let boldnest = 2
  // the three boxes
  rect(drawingFrame, x, y, width, height, boldnest)
  y = 25
  x = 0
  rect(drawingFrame, x, y, width, height, boldnest)
  x = 25
  rect(drawingFrame, x, y, width, height, boldnest)

  x = 8
  y = 19
  width = 27
  height = 2
  line(drawingFrame, x, y, width, height)
  width = 2
  height = 7
  line(drawingFrame, x, y, width, height)
  x = x + 27
  line(drawingFrame, x, y, width, height)

  x = 8 + 13
  y = 15
  height -= 1
  line(drawingFrame, x, y, width, height)

}


function line(drawingFrame, x, y, width, height) {
  let line = document.createElement("div")
  line.style.float = "left"
  line.style.position = "absolute"
  line.style.top = y + "px"
  line.style.left = x + "px"
  line.style.width = width + "px"
  line.style.height = height + "px"
  line.style.backgroundColor = "white"

  drawingFrame.appendChild(line)
}

function rect(drawingFrame, x, y, width, height, boldnest){
  let left_edge = document.createElement("div")
  left_edge.style.float = "left"
  left_edge.style.position = "absolute"
  left_edge.style.top = y + "px"
  left_edge.style.left = x + "px"
  left_edge.style.width = boldnest + "px"
  left_edge.style.height = height + "px"
  left_edge.style.backgroundColor = "white"

  let right_edge = document.createElement("div")
  right_edge.style.position = "absolute"
  right_edge.style.float = "left"
  right_edge.style.top = y + "px"
  right_edge.style.left = (16+x) + "px"
  right_edge.style.width = boldnest + "px"
  right_edge.style.height = height + "px"
  right_edge.style.backgroundColor = "white"

  let top_edge = document.createElement("div")
  top_edge.style.position = "absolute"
  top_edge.style.float = "left"
  top_edge.style.top = y + "px"
  top_edge.style.left = x + "px"
  top_edge.style.width = width + "px"
  top_edge.style.height = boldnest + "px"
  top_edge.style.backgroundColor = "white"


  let buttom_edge = document.createElement("div")
  buttom_edge.style.position = "absolute"
  buttom_edge.style.float = "left"
  buttom_edge.style.left = x + "px"
  buttom_edge.style.top = (8 + y) + "px"
  buttom_edge.style.width = width + "px"
  buttom_edge.style.height = boldnest + "px"
  buttom_edge.style.backgroundColor = "white"

  drawingFrame.appendChild(left_edge)
  drawingFrame.appendChild(right_edge)
  drawingFrame.appendChild(top_edge)
  drawingFrame.appendChild(buttom_edge)
}