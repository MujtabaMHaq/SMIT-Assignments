

function Add(){
    var todoFather = document.getElementById("todoFather")
    var toDoInput = document.getElementById("toDoInput")

    if (toDoInput.value.length < 3){
        alert("Your Todo Add Item is too Short!")
        return
    }
   

    var li = document.createElement("li")
    li.innerHTML = toDoInput.value
    li.classList.add("List_ed")

    // Re-Edited btn
    var editBtn = document.createElement("button")
    editBtn.setAttribute("onclick" , "edit(this)")
    editBtn.innerHTML = "Edit"
    editBtn.classList.add("edBTN")

    // Del btn
    var delBtn = document.createElement("button")
    delBtn.setAttribute("onclick" , "del(this)")
    delBtn.innerHTML = "X"
    delBtn.classList.add("close")



    li.appendChild(editBtn)
    li.appendChild(delBtn)

    todoFather.appendChild(li)
    toDoInput.value = ""

}
// Del all 
function allDel(){
    var todoFather = document.getElementById("todoFather")
    todoFather.innerHTML = ""

}


// Del childs
function del(elm){
    elm.parentNode.remove()
}


// Re-edit func
function edit(elm) {
  

    var editBtn = prompt("Enter value", elm.previousSibling.nodeValue)
    elm.previousSibling.nodeValue = editBtn

}