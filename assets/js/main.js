
const info = document.querySelector('.header__info')
const modal = document.querySelector('.modal')

info.addEventListener('click',(e)=>{

    modal.classList.toggle('modal-open')
    console.log('click')
})

modal.addEventListener('click', (e)=>{
    modal.classList.remove('modal-open')

})

