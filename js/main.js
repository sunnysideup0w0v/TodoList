let btnSubmit = document.querySelector(".addList button");
let input = document.querySelector(".addList input");
// let deleteLi = document.querySelectorAll(".itemList li i");
let itemList = document.querySelector(".itemList ul");
let itemLi = document.querySelectorAll(".itemList ul li")
let clearAll = document.querySelector(".itemList button");

console.log(itemLi)
//console.log(deleteLi)

function addList(){
    let value = input.value;
    let node = document.createElement("li");
    let li = `${value} <i class="xi-trash" onclick="remove();"></i>`
    node.innerHTML = li;
    node.children[0].addEventListener("click",function(e){
        if(e.target.tagName.toLowerCase() === 'i'){
            node.children[0].parentElement.remove();
        }
    });
    itemList.appendChild(node);
    input.value = "";
}

input.addEventListener("keydown",function(){
    if(event.keyCode === 13){
        addList();
    }
})

function remove(){
    let deleteLi = document.querySelectorAll(".itemList li i");
    deleteLi.forEach(function(i){
        i.addEventListener("click",function(e){
           if(e.target.tagName.toLowerCase() === 'i'){
                i.parentElement.remove();
           }
        });
    })
}

remove();

// dynamic element cannot listen event.

clearAll.addEventListener("click",function(){
    itemLi = document.querySelectorAll(".itemList ul li")
    itemLi.forEach(function(li){
        li.remove();
    })
})