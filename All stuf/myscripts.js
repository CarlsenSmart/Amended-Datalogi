let d = document;

d.onload = start()

function start(){
  body = d.getElementById("bod")
  body.style.margin = "0"
  body.style.marginTop = "10px"
  body.style.backgroundColor = "rgb(0,0,0)"//"rgb(0,18,58)"
  body.style.overflow = "hidden"
  body.style.userSelect = "none"
  // noterne skal hedde amended Datalogi/alleviated Datalogi
  //top nav
  top_nav = d.createElement("div")
  top_nav.style.width = "450px"
  top_nav.style.margin = "auto"
  top_nav.style.marginLeft = "550px"
  top_nav.style.marginTop = "20px"
  
  // title
  title = d.createElement("h1")
  textNode = d.createTextNode("Amended Datalogi")
  title.appendChild(textNode)
  title.style.color = "#eaeaea"
  title.style.textAlign = "center"
  title.style.float = "left"
  title.style.marginTop = "10px"
  title.style.fontFamily = "Montserrat"
  title.style.letterSpacing = "1px"
  
  hierarchy = d.createElement("div")
  hierarchy.style.width = "45px"
  hierarchy.style.height = "45px"
  hierarchy.style.backgroundColor = "black"
  hierarchy.style.display = "inline-flex"
  hierarchy.style.position = "relative"
  hierarchy.style.float = "right"
  hierarchy.style.marginTop = "15px"
  hierarchy.style.opacity = "0.9"
  hierarchy.title = "Hierarchy"
  hierarchy.onmouseover = function(){
    hierarchy.style.cursor = "pointer"
  }
  hierarchy.onclick = function() {
    //screen_slide("aquamarine", "left")
    //screen_slide("rgb(76, 114, 145)", "right")
    let hierarchy_background = screen_slide("rgb(38, 55, 69)", "right")
    hierarchy_page(hierarchy_background)
    
  }
  
  draw_hierarchy(hierarchy)
  
  
  top_nav.appendChild(title)
  top_nav.appendChild(hierarchy)
  body.appendChild(top_nav)
  
  
  
  // menu subjects
  let subjects = [
    "ALGORITMER", 
    "Calculus", 
    "Berlog",
    "hejsa",
    "hejeeje",
    "Sandsynlighed og stats",
    "Sands og stats",
    "Sandsynlighetats",
    "Sand stats",
    "Sants",
    "Sandnlighed og stats",
    "Sandts",
    "Sandsynlighed og ts",
  ]
  
  // trykker man på et emne, kommer man ny oversigt, hvor 
  // man har 'Generelt forståelse' og 'det som bliver brugt senere'
  
  
  // kunne være fucking dope at lave en note tagnings mekanisme
  // og tegne mekanisme imens man læser !! 
  // noget gennemsigtet måske ? :I
  // - bliver nød til at lave en chrome plugin
  make_menu_elements(subjects)
}

function hierarchy_page(hierarchy_background) {
  hierarchy_background.style.opacity = "1.0"
  
  let back = document.createElement("div")
  back.style.width = "40px"
  back.style.height = "40px"
  back.style.opacity = "0.0"
  back.style.position = "relative"
  back.style.cursor = "pointer"
  back.onclick = function() {
    setInterval(function(){ 
      if (hierarchy_background.style.opacity == 0){
        clearInterval(this)
        hierarchy_background.remove()
      } else {
        hierarchy_background.style.opacity = (parseFloat(hierarchy_background.style.opacity) - 0.2)
      }
    }, 50)
  }
  line(back, 20, 20, 20, 3)
  hierarchy_background.appendChild(back)

  setTimeout(function() {
    setInterval(function(){ 
      if (back.style.opacity == 1){
        clearInterval(this)
      } else {
        back.style.opacity = (parseFloat(back.style.opacity) + 0.2)
      }
    }, 100)
  }, 400)
  
}

function make_menu_elements(subjects){
  subjects.forEach(function(elem){
    let e = add_subject_to_menu(elem)
    
    setTimeout(function(){ 
      slideDownSubject(e, e.style.top)
    }, 160*subjects.indexOf(elem))
    
  })
}

function add_subject_to_menu(name){
  let subject = d.createElement("h1")
  let textNode = d.createTextNode(name)
  subject.style.clear ="both"
  subject.appendChild(textNode)
  subject.style.color = "rgb(76, 114, 145)"
  subject.style.padding = "7px"
  subject.style.margin ="0"
  subject.style.marginLeft = "50px"
  subject.style.display = "table"
  //subject.style.border = "1px solid grey"
  subject.onmouseover = function(){
    subject.style.color = "rgb(92, 160, 217)"
    subject.style.cursor = "pointer"
  }
  subject.onmouseout = function(){
    subject.style.color = "rgb(76, 114, 145)"
  }
  subject.style.position = "relative"
  subject.style.top = "-25px"
  subject.style.left = "20px"
  subject.style.opacity = "0.0"
  body.appendChild(subject)
  return subject
}

function slideDownSubject(obj, startPos) {
  let offset = parseInt(startPos.substring(0, startPos.length-2))
  
  setInterval(frame, 10);
  function frame() {
    if (offset == 0) {
      clearInterval(this);
    } else {
      offset++; 
      obj.style.top = offset + 'px';
      if(offset%5 == 0){
        obj.style.opacity = (parseFloat(obj.style.opacity) + 0.2) 
      }
    }
  }
}

function screen_slide(color, slide_dir){
  let slider = d.createElement("div")
  slider.style.backgroundColor = color
  slider.style.position = "absolute"
  slider.style.top = "0"
  slider.style.left = "0"
  body.appendChild(slider)
  
  
  slider.style.width = window.innerWidth + "px"
  slider.style.height = window.innerHeight + "px"
  speed = 40
  let offset
  
  slide(slider, "left", speed, offset)
  /*switch(slide_dir){
    case "right":
      //slider.style.left = (-1*window.innerWidth/2) + "px"
      slider.style.down = (-1*window.innerHeight/2) + "px"
  }*/
  return slider
}

function slide(slider, dir, speed, offset){
  switch(dir){
    case "left": 
      console.log("ko")
      offset = window.innerWidth
      slider.style.left = window.innerWidth + "px"
      break
    case "right":
      console.log("r")
      offset = window.innerWidth
      slider.style.right = window.innerWidth + "px"
      break
      
  }
  let interval = setInterval(slider_func, 10);
  function slider_func(){
    console.log("hej")
    if(offset < 0 ) {
      clearInterval(interval)
      //slider.remove()
    } else {
      switch(dir){
        case "left":
          slider.style.left = offset + "px"
          offset -= speed
          break
        case "right":
          console.log("yos", slider.style.right)
          slider.style.right = -offset + "px"
          offset -= speed
      } 
    }
  }
}