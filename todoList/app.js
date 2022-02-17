var input = document.querySelector('input')
var button = document.querySelector('.btnAdd')
var buttonRemove = document.querySelector('.btnRemove')
var form = document.querySelector('form');
var todos = document.querySelector('.todos');

form.addEventListener('submit', function(event) {
    //chống load lại trang
    event.preventDefault();

    // xử lý các dấu cách bị thừa trong chuỗi
    let val = input.value.trim();
   
    if(val){
        addElement({
            text: val,
        })
    }
    input.value = '';

   
})

function addElement(todo){
    var li = document.createElement('li');
    li.innerHTML = `
        <span>${todo.text}</span>
        <i class="far fa-trash-alt"></i>
    `
    if(todo.status === 'done'){
        li.setAttribute('class', 'done')
    }

    li.addEventListener('click', function(){
        this.classList.toggle('done')
    })

    li.querySelector('i').addEventListener('click', function(){
        this.parentElement.remove();    
    })

    todos.appendChild(li);
}

buttonRemove.addEventListener('click', function(){
})
