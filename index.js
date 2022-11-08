let form=document.querySelector('.to-do-list')
let input=document.querySelector('#input');
let list=document.querySelector('.orderedList');
let todo=document.querySelector('.list')
let sortIcon=document.querySelector("#sort")
let plus=document.querySelector("#plus")
let cancel=document.querySelector('#cancel')
eventListener();
function eventListener(){
form.addEventListener('submit',addElement)
plus.addEventListener('click',addElement)
todo.addEventListener('click',deleteElements)
cancel.addEventListener('click',()=>{ input.value=""})
}
function addElement(element){
const newElement=parseInt(input.value.trim());
addElementToList(newElement)
element.preventDefault();
}
function addElementToList(newElement){
    todo.style.display = "flex";
    const listItem=document.createElement('li')
    const cancelIcon=document.createElement('a')
    cancelIcon.href="#"
    cancelIcon.innerHTML='<i id="element-remove-icon" class="fa-regular fa-circle-xmark"></i>'
    listItem.appendChild(document.createTextNode(newElement))
    listItem.appendChild(cancelIcon)
    list.appendChild(listItem)
    input.value=" "
}
function deleteElements(element){
    console.log(element.target)
    if (element.target.className ==="fa-regular fa-circle-xmark"){
        element.target.parentElement.parentElement.remove()
    }
}
let sorter=true
function sortElement(){
    let element=document.querySelectorAll('li')
if (sorter==true){
    sortIcon.style.transform="rotate(180deg)"
    let arr=[]
    element.forEach((item) => {
        arr.push(item)
    })
    console.log(arr)
    let newarr=arr.sort((rowA,rowB) => rowA.innerText-rowB.innerText);
    list.append(...newarr);
    sorter=false
}
else if(sorter==false){
    sortIcon.style.transform="rotate(0deg)"
    let arr=[]
    element.forEach((item) => {
        arr.push(item)
    })
    console.log(arr)
    let newarr=arr.sort((rowA,rowB) => rowB.innerText-rowA.innerText);
    list.append(...newarr)
    sorter=true
}}
sortIcon.addEventListener('click',sortElement)
new Sortable(list,{ animation:500})