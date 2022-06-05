const plansButtons = document.querySelectorAll('button.btn-plan')
const bars = document.querySelector('.bar')

bars.addEventListener('click', function(){
    this.classList.toggle("change")
})


for(let b = 0;b < plansButtons.length; ++b) {
    plansButtons[b].addEventListener('click', function() {
        changeColorClick(plansButtons[b])
    })
}

function changeColorClick(button) {
    const buttonContainer = document.querySelectorAll('.box-plan')
    const buttonFather = button.parentNode
    
    buttonFather.classList.add('clicked')

    for(let btn = 0;btn < buttonContainer.length; ++btn) {
       const el = buttonContainer[btn]

       if(el.classList.contains('clicked') && buttonFather.id != el.id) {   
           el.classList.remove('clicked')
       }
    }
}

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    breakpoints:{
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 30
        },

        768: {
            slidesPerView: 2,
            slidesPerGroup:1,
            spaceBetween: 30
        },

        1024: {
            slidesPerView: 3,
            slidesPerGroup:1,
            spaceBetween: 50
        }
    },
    slidesPerGroup: 1,
    spaceBetween: 50,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
     },
     direction: "horizontal",
     navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
})

let boxSwiper = new Swiper(".plan-swiper", {
    slidesPerView: 3,
    breakpoints:{
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 30
        },

        768: {
            slidesPerView: 2,
            slidesPerGroup:1,
            spaceBetween: 70
        },
        
        1024: {
            slidesPerView: 3,
            slidesPerGroup:1,
            spaceBetween: 30
        }
    },
    slidesPerGroup: 1,
    spaceBetween: 30,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
     },
})

let infoSwiper = new Swiper(".info-swiper", {
    slidesPerView: 3,
    breakpoints:{
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 30
        },

        768: {
            slidesPerView:  2,
            slidesPerGroup: 1,
            spaceBetween:60
        },
        
        1024: {
            slidesPerView: 3,
            slidesPerGroup:1,
            spaceBetween: 30
        }
    },
    slidesPerGroup: 1,
    spaceBetween: 30,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
     },
})

const list = document.querySelectorAll('.footer-list')

for(let l = 0;l < list.length; ++l) {
   list[l].addEventListener('click', function() {
       listShow(list[l])
   })
}

function listShow(event) {
    event.classList.toggle('footer-list--show')
    const dropDownIcon = event.childNodes[1].childNodes[3]
    dropDownIcon.classList.toggle('drop-down--show')
}

const bar = document.querySelector('.bar')

bar.addEventListener('click', function() {
    const active = document.querySelector('.menu')
    const logo = document.querySelector('.logo')
    const menuContainer = document.querySelector('.menu__container')
    document.body.style.overflow = 'hidden'
    
    menuContainer.classList.toggle('menu-fixed')
    logo.classList.toggle('header-fixed')
    menuContainer.classList.toggle('active')
})