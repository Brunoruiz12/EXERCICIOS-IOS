let additem = document.getElementById("additem")


function MinhaFuncao()
{ 
let li = document.createElement("li")

let texto = document.createTextNode(additem.value)

li.appendChild(texto)

document.getElementById("minhalista").appendChild(li)

}
