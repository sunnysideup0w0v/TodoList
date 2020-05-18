let btnSubmit = document.querySelector(".addList button");
let input = document.querySelector(".addList input");
let deleteLi = document.querySelectorAll(".itemList li i");
let itemList = document.querySelector(".itemList ul");
let itemArray = Array.from(itemList)

function addList(){
    let value = input.value;
    let li = `<li>${value} <i class="xi-trash"></i></li>`
    
    console.log(li)
    
}

deleteLi.forEach(function(i){
    i.addEventListener("click",function(){
        i.parentElement.remove();
    })
})