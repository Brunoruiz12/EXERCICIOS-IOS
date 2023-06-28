//document.getElementById(titulo).style.property = new style
let titulo = document.getElementById("titulo")
titulo.style.backgroundColor = '#ccc'
titulo.style.textAlign = 'center'
titulo.style.borderBottom = 'solid 3px #000'
titulo.style.margin = '20px '

let item = document.getElementsByClassName('item')
console.log (item)
item[0].innerHTML = 'hello' 
item[0].style.fontWeight = 'bold'

