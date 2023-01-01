var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 15,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// const list = document.querySelector('.list-carosel')
// const li = Array.from(document.querySelectorAll('li'))
// const listItems = list.getBoundingClientRect().height

// console.log(listItems);

// console.log(listItems);

// li.forEach((img, i) => {
//     img.style.left = listItems * i + 'px'
// })

// const slider = () => {
//     const carosel = document.querySelector('.carosel')
//     const caroselNextSibling = carosel.nextElementSibling
//     const range = caroselNextSibling.style.left
//     list.style.transform = 'translateX(-'+ range +')'
//     carosel.classList.remove('carosel')
//     caroselNextSibling.classList.add('carosel')
// }

// list.addEventListener('click', () => {
//     const carosel = document.querySelector('.carosel')
//     const caroselNextSibling = carosel.nextElementSibling
//     const range = caroselNextSibling.style.left
//     list.style.transform = 'translateX(-'+ range +')'
//     carosel.classList.remove('carosel')
//     caroselNextSibling.classList.add('carosel')
// })

const listCarosel =  document.querySelector('.list')
const itemsList = Array.from(document.querySelectorAll('li'))
const btn = document.querySelectorAll('.btn')


const listItems = itemsList[0].getBoundingClientRect().width
const listItemsHeight = itemsList[0].getBoundingClientRect().height

listCarosel.style.height = listItemsHeight + 'px'

   itemsList.forEach((img, i) => {
    img.style.left = listItems * i + 'px'
})

btn[1].addEventListener('click', () => {
    const carosel = document.querySelector('.carosel')
    const caroselNextSibling = carosel.nextElementSibling
    const range = caroselNextSibling.style.left
    listCarosel.style.transform = 'translateX(-'+ range +')'
    carosel.classList.remove('carosel')
    caroselNextSibling.classList.add('carosel')
})

btn[0].addEventListener('click', () => {
    const carosel = document.querySelector('.carosel')
    const caroselPrevSibling = carosel.previousElementSibling
    const range = caroselPrevSibling.style.left
    listCarosel.style.transform = 'translateX(-'+ range +')'
    carosel.classList.remove('carosel')
    caroselPrevSibling.classList.add('carosel')
})

const imgKategoriWidth = document.querySelector('.imgKategori').getBoundingClientRect().width
const imgKategoriHeight = document.querySelector('.imgKategori').getBoundingClientRect().height
const hover = document.querySelector('.hover')

hover.style.width = imgKategoriWidth + 'px'
hover.style.height = imgKategoriHeight + 'px'

const btnLihat = document.querySelector('.btnLihat')

btnLihat.style.width = imgKategoriWidth + 'px'
btnLihat.style.height = imgKategoriHeight + 'px'


// Discount

const containerCard = document.querySelector('.getHeight')
const getHeight = containerCard.getBoundingClientRect().height
const containerCarosel = document.querySelector('.containerCarosel')
const containerDiscountScroll = document.querySelector('.containerDiscountScroll').getBoundingClientRect().width
const discountList = Array.from(document.querySelectorAll('.discountList'))
const discountListWidth = discountList[0].getBoundingClientRect().width
const btnDiscount = document.querySelectorAll('.btnDiscount')
const discountScroll2 = document.querySelector('.discountScroll2')

containerCarosel.style.height = getHeight + 'px'
console.log(getHeight);

if(window.innerWidth > 1024){
  discountList.forEach((discList, i) => {
    discList.style.left = discountListWidth * i + 'px'
})

// Btn next
btnDiscount[0].addEventListener('click', () => {
  
  const discCarosel = document.querySelector('.discCarosel')
  const NextDiscCaroselSibling = discCarosel.nextElementSibling
  const rangeLeft = NextDiscCaroselSibling.style.left
  containerCarosel.style.transform = 'translateX(-'+ rangeLeft +')'
  discCarosel.classList.remove('discCarosel')
  NextDiscCaroselSibling.classList.add('discCarosel')
})
btnDiscount[1].addEventListener('click', () => {
  
  const discCarosel = document.querySelector('.discCarosel')
  const PrevDiscCaroselSibling = discCarosel.previousElementSibling
  const rangeLeft = PrevDiscCaroselSibling.style.left
  containerCarosel.style.transform = 'translateX(-'+ rangeLeft +')'
  discCarosel.classList.remove('discCarosel')
  PrevDiscCaroselSibling.classList.add('discCarosel')
})
}


// daftar & login

