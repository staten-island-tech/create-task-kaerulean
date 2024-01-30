import '/style.css'

const DOMSelectors = {
    button1: document.querySelector("#buttons-color1"),
    button2: document.querySelector("#buttons-color2"),
    button3: document.querySelector("#buttons-color3"),
    container: document.querySelector(".container"),
    color: document.querySelector(".color"),
    end: document.querySelector(".end")
}

const colorArr = []
const buttonArr = [DOMSelectors.button1, DOMSelectors.button2, DOMSelectors.button3]

function generateColor(){
      console.log("hi")
      const random1 = Math.floor(Math.random() * 256)
      const random2 = Math.floor(Math.random() * 256)
      const random3 = Math.floor(Math.random() * 256)
      const style1 = 'rgb(' + random1 + ',' + random2 + ',' + random3 + ')';
      const newBox = `<div class="box" style="background-color: ${style1}"></div>`
      console.log(style1)
      colorArr.push(style1)

      const random4 = Math.floor(Math.random() * 256)
      const random5 = Math.floor(Math.random() * 256)
      const random6 = Math.floor(Math.random() * 256)
      const style2 = 'rgb(' + random4 + ',' + random5 + ',' + random6 + ')';
      colorArr.push(style2)

      const random7 = Math.floor(Math.random() * 256)
      const random8 = Math.floor(Math.random() * 256)
      const random9 = Math.floor(Math.random() * 256)
      const style3 = 'rgb(' + random7 + ',' + random8 + ',' + random9 + ')';
      colorArr.push(style3)

      console.log(colorArr)
    
      DOMSelectors.container.insertAdjacentHTML("beforeend", `${newBox}`) 
}

function styleButton(){
  for (let i = 0; i < buttonArr.length; i++) {
    const x = Math.floor(Math.random() * buttonArr.length)
    const button = buttonArr[x]
    button.style.backgroundColor = colorArr[i]
    buttonArr.splice(x, 1)
    colorArr.splice(i, 1)
  }
  buttonArr[0].style.backgroundColor = colorArr[0]
}

function check(){
    const buttonArr = [DOMSelectors.button1, DOMSelectors.button2, DOMSelectors.button3]
    const box = document.querySelector(".box")
    const winText = `<h2>you won!</h2>`
    const loseText = `<h2>you lost!</h2>`
    const retryButton = `<button type="button" id="retry-button">play again</button>`

    buttonArr.forEach((el) => el.addEventListener("click", function(){
      if(el.style.backgroundColor === box.style.backgroundColor){
        console.log("right")
        DOMSelectors.end.insertAdjacentHTML("beforeend", winText);
        DOMSelectors.end.insertAdjacentHTML("beforeend", retryButton);
        document.querySelector("#retry-button").addEventListener("click", function(){
          location.reload()
        })
      } else {
        console.log("wrong")
        DOMSelectors.end.insertAdjacentHTML("beforeend", loseText);
        DOMSelectors.end.insertAdjacentHTML("beforeend", retryButton);
        document.querySelector("#retry-button").addEventListener("click", function(){
          location.reload()
        })
      }
    }))

    
}

generateColor()
styleButton()
//buttonArr.forEach((el) => styleButton(el))
check()