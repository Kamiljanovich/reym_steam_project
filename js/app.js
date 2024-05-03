

const headerBtnMenu = document.querySelector('.header__btn-menu');
const headerModal = document.querySelector('.header__modal');

headerBtnMenu.addEventListener('click', function(){
    if(headerModal.classList.contains('active')){
        headerModal.classList.remove('active')
        headerBtnMenu.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>'
    }
        for(const el of headerLinks){
            el.querySelector('.header__popup').classList.remove('active');
            el.classList.remove('active');
            modalBg.classList.remove('active');
        }  
})

//

const headerLinks = document.querySelectorAll('.header__nav-link');
const modalBg  = document.querySelector('.modal-bg');

for (const item of headerLinks) {
    item.addEventListener('click', function(){

        let headrePopup = item.querySelector('.header__popup');
        if(headrePopup.classList.contains('active')){
            headrePopup.classList.remove('active');
            item.classList.remove('active')
            modalBg.classList.remove('active')
        }else{
            for(const el of headerLinks){
                el.querySelector('.header__popup').classList.remove('active');
                el.classList.remove('active');
            }
            headerModal.classList.remove('active');
            headrePopup.classList.add('active');
            item.classList.add('active');
            modalBg.classList.add('active')
            headerBtnMenu.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>'
        }
    })
}

//

modalBg.addEventListener('click', function(){
    if(modalBg.classList.contains('active')){
        for(const el of headerLinks){
            el.querySelector('.header__popup').classList.remove('active');
            el.classList.remove('active');
            modalBg.classList.remove('active');
        }
    }    
})

//

const elements = document.querySelectorAll('.element');

for(let element of elements){
    element.addEventListener('mouseover', function(){
        console.log(element.querySelectorAll('.element__list-item'));
        const elementList = element.querySelectorAll('.element__list-item');
        const elementimg =  element.querySelector('.element-img');

        for (const item of elementList) {
            item.addEventListener('mouseover', function(){
                elementimg.setAttribute('src',item.getAttribute('data-src'))
            })
            item.addEventListener('mouseout', function(){
                elementimg.setAttribute('src', elementList[0].getAttribute('data-src'))
            })
        }
    })
}

const swiper = new Swiper('.slider', {
    pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
})






