var btnSearch = document.querySelector('.searchBoxBtn')

btnSearch.addEventListener('click',function() {
    this.parentElement.classList.toggle('open');
})