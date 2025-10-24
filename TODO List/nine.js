const form = document.querySelector('form');
const alltask = document.querySelector('#alltask');
const input = document.querySelector('input');

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    const text = input.value.trim();
    if(text == ""){
        return;
    }

    const parent = document.createElement('div');
    const task = document.createElement('span');
    task.textContent = text;

    task.style.marginRight = "20px";

    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';
    deletebtn.style.width = "60px";

    const donebtn = document.createElement('button');
    donebtn.textContent = 'Done';
    donebtn.style.width = "60px";

    donebtn.style.marginRight = "10px";

    parent.append(task,donebtn,deletebtn);
    alltask.append(parent);

    deletebtn.addEventListener('click', ()=> {
        parent.remove();
    })

    donebtn.addEventListener('click',()=>{
        task.style.textDecoration = 'line-through';
        task.style.color = 'yellow';
    })
})