// let doc = document
// let url1 = 'https://www.1zoom.ru/big2/541/255095-Sepik.jpg'
// let img = doc.querySelector('img')
// for(let item of img){
//     item.style.width  = '100px'
// }
// img.setAttribute('src', url1)

// img.alt = 'Картинка кода'


// console.log(img.getAttribute('src'));

let doc = document
// поиск
let btn_white = doc.querySelector('.blue')
let btn_grey = doc.querySelector('.space-grey')
let img = doc.querySelector('.imeg')
let but_str = doc.querySelector('butt_storage')
let but_str1 = doc.querySelector('butt_storage1')
let cnp = doc.querySelector('butt_storage')
let cnp2 = doc.querySelector("butt_storage2")
let cnp3 = doc.querySelector("butt_storage3")
let cnp4 = doc.querySelector("butt_storage4")
let money = doc.querySelector('section2-text h3')
// переменные
let img1 = './img/macbook pro.jpg.jpg'
let img2 = './img/mbp14-silver-select-202110 1.jpg'

let bacground = (btn1, btn2) => {
    btn1.classList.add('blue')
    btn1.classList.remove('space-grey')
    btn2.classList.add('space-grey')
    btn2.classList.remove('blue')
}
let bacground1 = (btn1, btn2,btn3,btn4) => {
    btn1.classList.remove('butt_storage2,butt_storage3,butt_storage4')
    btn1.classList.add('butt_storage')
    btn2.classList.remove('butt_storage,butt_storage3,butt_storage4')
    btn2.classList.add('butt_storage2 ')
    btn3.classList.remove('butt_storage,butt_storage2,butt_storage4')
    btn3.classList.add('butt_storage3 ')
    btn4.classList.remove('butt_storage2,butt_storage3,butt_storage')
    btn4.classList.add('butt_storage4 ')
}


// функция клика
let mac_text = doc.querySelector('.section2-text p')

btn_grey.addEventListener('click', () => {
    mac_text.textContent = 'Space grey'
    img.setAttribute('src', img1)
    bacground(btn_grey, btn_white)
})
btn_white.addEventListener('click', () => {
    img.src = img2
    mac_text.textContent = 'White'
    bacground(btn_white, btn_grey)
})

cnp.onclick=('click',() => {
    money.innerHTML = '$1999'
    bacground1(cnp,cnp2,cnp3,cnp4)
})
cnp2.onclick=('click',() => {
    money.innerHTML = '$2199'
    bacground1(cnp2,cnp,cnp3,cnp4)
})

cnp3.onclick=('click',() => {
    money.innerHTML = "$2599"
    bacground1(cnp3,cnp,cnp2,cnp4)
})

cnp4.onclick=('click',() => {
    money.innerHTML = '$3299'
    bacground1(cnp4,cnp,cnp2,cnp3)
})


// откладка




