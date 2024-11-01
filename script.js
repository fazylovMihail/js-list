let formTask = document.querySelector('.form-task');
let btn = document.querySelector('.button');
let taskList = document.querySelector('.task-list');

btn.addEventListener('click',(e)=>{
    e.preventDefault()

    let task = formTask.value;

    if(!task) return;
    
    let Item = document.querySelector('#template').cloneNode(true).content;
    Item.querySelector('.task__text').value = task;
    Item.querySelector('.task__delete').addEventListener('click',DeleteItem);

    taskList.append(Item);
    console.log(template);
    
    formTask.value = '';
    formTask.focus();
})

function DeleteItem(e){
    target = e.target.parentElement;
    target.remove();
}