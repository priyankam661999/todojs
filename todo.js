 // selector
document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click',handleDeleteorCheck);
document.getElementById('clearall').addEventListener('click',handleClearall);


// event handler
function handleSubmitForm(e){
    e.preventDefault();
    let input=document.querySelector('input');
    if(input.value!='')
        addTodo(input.value);
    // input.value='';
    input.value='';
}

function handleDeleteorCheck(e){
if(e.target.name=='checkbutton')
    checkTodo(e);
if(e.target.name=='deletebutton')
    deleteTodo(e);
}

function handleClearall(e){
    document.querySelector('ul').innerHTML='';
}

// helpers
function addTodo(todo){
     let ul=document.querySelector('ul');
     let li= document.createElement('li');
     li.innerHTML=`
<span class='todo-item'>${todo}</span>
<button name='checkbutton' class='check'><i class="fas fa-check-square"></i></button>&nbsp;
<button name='deletebutton'><i class="fas fa-trash"></i></button>
     `;
li.classList.add('todo-list-item');
ul.appendChild(li);
}

function checkTodo(e){
    let item=e.target.parentNode;
    if(item.style.textDecoration=='line-through')
        item.style.textDecoration='none';
    else
        item.style.textDecoration='line-through';

}
function deleteTodo(e){
  let item= e.target.parentNode;

  item.addEventListener('transitionend', function(){
    item.remove();
  })
  
  item.classList.add('todo-list-item-fall');
  
}

