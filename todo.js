const form = document.forms["myform"]
const input = form["task"]
const ul = document.getElementById("tasklist")
// form.addEventListener("submit",(e) =>{
//     e.preventDefault()
//     const val = input.value
//     const newli = document.createElement("li")
//     newli.innerHTML = val + "<i class=\"fa-solid fa-xmark\" style=\"float:right; margin-top: -7px;\"></i>"
//     ul.appendChild(newli)

// })
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    // console.log(input.value)
    const val = input.value
    const newli = document.createElement("li")
    newli.innerHTML = val + "<i onclick=\"deletetask(this)\" class=\"fa-solid fa-xmark\" style=\"float:right; margin-top: -0.5px;\"></i>" 
    ul.appendChild(newli)
    document.getElementsByName("myForm").reset();
})

function deletetask(element){
    element.parentElement.remove()
}