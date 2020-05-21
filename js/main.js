let btnSubmit = document.querySelector(".addList button");
let input = document.querySelector(".addList input");
let itemList = document.querySelector(".itemList ul");
let itemLi = document.querySelectorAll(".itemList ul li")
let clearWillBuy = document.querySelector(".itemList button");
let basketList = document.querySelector(".inBasket ul");
let clearAllList = document.querySelector(".bg button");
let novalue = document.getElementsByClassName("noValue");
let noItem = document.getElementsByClassName("noItem");

// function remove(){
//     let deleteLi = document.querySelectorAll(".itemList li i");
//     deleteLi.forEach(function(i){
//         i.addEventListener("click",function(e){
//             console.log(i)
//            if(e.target.tagName.toLowerCase() === 'i'){
//                 i.parentElement.remove();
//            }
//         });
//     })
// }
// remove();

function check(){
    itemLi = document.querySelectorAll(".itemList ul li");
    if(itemLi.length === 0){
        clearWillBuy.classList.add("none");
    } else {
        clearWillBuy.classList.remove("none");
    }
}

check();

function addList(){
    let value = input.value;
    let node = document.createElement("li");
    let li = `${value} <i class="xi-trash""></i>`
    if(value ===""){
        novalue[0].classList.add("off")
        setTimeout(function(){
            novalue[0].classList.remove("off")
        },2500)
    } else {
        node.innerHTML = li;
        node.children[0].addEventListener("click",function(e){
            if(e.target.tagName.toLowerCase() === 'i'){
                node.children[0].parentElement.remove();
                node.children[0].remove();
                basketList.appendChild(node);
            }
            check();
        });
        itemList.appendChild(node);
        input.value = "";
    }
    check();
}

input.addEventListener("keydown",function(){
    if(event.keyCode === 13){
        addList();
    }
})

clearWillBuy.addEventListener("click",function(){
    itemLi.forEach(function(li){
        li.remove();
    });
    check();
})

clearAllList.addEventListener("click",function(){
    itemLi = document.querySelectorAll(".itemList ul li");
    let basketLi = document.querySelectorAll(".inBasket ul li");
    if(itemLi.length === 0 && basketLi.length === 0){
        noItem[0].classList.add("off");
        setTimeout(function(){
            noItem[0].classList.remove("off")
        },2500)
    } else {
        itemLi.forEach(function(li){
            li.remove();
        });
        basketLi.forEach(function(li){
            li.remove();
        });
    }
    check();
})