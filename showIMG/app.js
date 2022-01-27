var image = document.querySelectorAll('.image img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery-inner img')
var gallery = document.querySelector('.gallery')

var currentIndex = 0;

function showGallery(){
    
    if(currentIndex == 0){
        prev.classList.add('hidden')
    }else{
        prev.classList.remove('hidden')
    }
    
    if(currentIndex == 7){
        next.classList.add('hidden')
    }else{
        next.classList.remove('hidden')
    }
    //display
    galleryImg.src = image[currentIndex].src
    gallery.classList.add('show');
}

image.forEach((item, index) => {
    item.addEventListener('click',function(){
        currentIndex = index ;
        showGallery();
    })
})

close.addEventListener('click',function(){
    gallery.classList.remove('show');
})

document.addEventListener('keydown', function(e) {
    if(e.keyCode == 27){
        gallery.classList.remove('show');
    }
})

prev.addEventListener('click', function(){
    if(currentIndex > 0){
        currentIndex--;
        showGallery();
    }
})

next.addEventListener('click', function(){
    if(currentIndex < 8){
        currentIndex++;
        showGallery();
    }
})

// document.addEventListener('keydown', function(e) {
//     if(e.keyCode == 39){
//         currentIndex--;
//         showGallery();
//     }
// })

// document.addEventListener('keydown', function(e) {
//     if(e.keyCode == 37){
//         currentIndex++;
//         showGallery();
//     }
// })