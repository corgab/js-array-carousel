const imageList = [
'img/01.webp',
'img/02.webp',
'img/03.webp',
'img/04.webp',
'img/05.webp', ]

// stampare codice html con for ed inserire singola immagine
const itemcontainerElement = document.querySelector(".item-container")

let contents = ""
let immagineSingola = ""

//ciclo for prendere singola immagine
for(let i = 0; i < imageList.length; i++) {
    
    //prendere singola immagine dall'array
    immagineSingola= imageList[i]
    
    //far ripetere il contents
    console.log(contents)


}
//inserire il codice sul dom

contents = itemcontainerElement.innerHTML = `
    <div class="item">
        <img src="${immagineSingola}" alt="">
    </div>
`

console.log(contents)

