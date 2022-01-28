var content = document.querySelector('.form-content');
var btnRemove = document.querySelector('.btn-remove');
var input = document.querySelector('.form-content input');

var tags = ['Ruby', 'Image']

function display(){
    content.innerHTML = '';
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML +=`
            <li>
                ${tag}
                <i class="fas fa-times" onclick='removeTag(${i})'></i>
            </li> 
        `;
    }

    content.appendChild(input);
    input.focus();
}

function addTag(){
    input.addEventListener('keydown',function(e) {
        if(e.keyCode === 13){
            tags.push(input.value.trim())
            display();
            input.value = '';
        }
    })
}

function removeTag(index){
    tags.splice(index, 1);
    display();
}

btnRemove.addEventListener('click', function(){
    tags = [];
    display();
})

display();

addTag();



