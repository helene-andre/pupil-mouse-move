function movePupilOnMouseMove (e) {
  let result_x = document.getElementsByClassName('x')[0]
  let result_y = document.getElementsByClassName('y')[0]
  


  let eyePupil = document.getElementsByClassName("eye__pupil")
  let widthMax = document.documentElement.clientWidth
  let heightMax = document.documentElement.clientHeight
  let position_x = result_x.innerHTML = Math.max(15, Math.min(Math.round(e.clientX/widthMax*100), 85))
  let position_y = result_y.innerHTML = Math.max(15, Math.min(Math.round(e.clientY/heightMax*100), 85))
  
//   let eyePositionLeft = $('.eye').position().left/heightMax*100
//   let eyePositionTop = $('.eye').position().top/widthMax*100

  
  eyePupil[0].style.left = position_x + "%"
  eyePupil[0].style.top = position_y + "%"
}


document.onmousemove = movePupilOnMouseMove