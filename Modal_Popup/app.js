var btnOpen = document.querySelector('.open-modal-btn')
var modal = document.querySelector('.modal')
var iconClose = document.querySelector('.modal-header i') 
var btnClose = document.querySelector('.modal-footer button')

function toggleModal() {
    modal.classList.toggle('hidden-modal')
}


btnOpen.addEventListener('click', toggleModal)


btnClose.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
modal.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModal();
    }
})