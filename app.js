const imageList = [
'img/01.webp',
'img/02.webp',
'img/03.webp',
'img/04.webp',
'img/05.webp', ]

// stampare codice html con for ed inserire singola immagine
const itemContainerElement = document.querySelector(".item-container")
const nextElement = document.querySelector(".next") // element
const previewElement = document.querySelector(".prev") // element

let contents = "";
let currentItemIndex = 0;

//ciclo for prendere singola immagine
for(let i = 0; i < imageList.length; i++) {

    //prendere singola immagine dall'array
    const img = imageList[i];

    //codice per il dom
    if(i == currentItemIndex) {
        contents = `
        <div class="item active">
            <img src="${img}" alt="">
        </div>
        `
    } else {
        contents += `
        <div class="item">
            <img src="${img}" alt="">
        </div>
        `
    }
}
//inserire il codice sul dom
itemContainerElement.innerHTML += contents

//click avanti
nextElement.addEventListener("click", function(){
    const activeElement = document.querySelector(".active")
    activeElement.classList.remove("active")

    const allItem = document.querySelectorAll(".item")
    currentItemIndex = currentItemIndex + 1

    const currentItem = allItem[currentItemIndex]
    currentItem.classList.add("active")


})

//click indietro
previewElement.addEventListener("click", function(){
    const activeElement = document.querySelector(".active")
    activeElement.classList.remove("active")

    const allItem = document.querySelectorAll(".item")
    currentItemIndex = currentItemIndex - 1

    const currentItem = allItem[currentItemIndex]
    currentItem.classList.add("active")
    

})