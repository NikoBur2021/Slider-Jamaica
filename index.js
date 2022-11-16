const numberElm = document.querySelector('.number')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const pictures = document.querySelector('.pictures')
const miniatures = document.querySelector('.miniatures')




for(let i = 0; i<pictures.children.length; i++){
    let url = pictures.children[i].src
    // miniatures.innerHTML = miniatures.innerHTML+`<img data-index="${i}" src="${url}">`
    miniatures.insertAdjacentHTML('beforeend',`<img data-index="${i}" src="${url}">`)
    console.log(url)
}

miniatures.onclick=(event)=>{
    miniatures.children[num].classList.remove('current')
    pictures.children[num].style.display = 'none'
    num = +event.target.dataset.index
    pictures.children[num].style.display = 'block'
    miniatures.children[num].classList.add('current')
}

pictures.children[0].style.display = 'block'
miniatures.children[0].classList.add('current')


let num = 0
const lastIndex = pictures.children.length-1
numberElm.textContent = num
next.onclick=()=>{
    miniatures.children[num].classList.remove('current')
    pictures.children[num].style.display = 'none'
    if(num === lastIndex){
        num = 0
    }else{
        num++
    }
    pictures.children[num].style.display = 'block'
    miniatures.children[num].classList.add('current')
    numberElm.textContent = num
}

prev.onclick=()=>{
    miniatures.children[num].classList.remove('current')
    pictures.children[num].style.display = 'none'

    if(num === 0){
        num = lastIndex
    }else{
        num--
    }
    pictures.children[num].style.display = 'block'
    miniatures.children[num].classList.add('current')
    numberElm.textContent = num
}

