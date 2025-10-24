const parent = document.getElementById('parent');

parent.addEventListener('click', (e)=>{
    // console.log(e.target);
    const child = e.target;
    // document.body.style.backgroundColor = child.id;
    const body = document.querySelector('body');
    body.style.backgroundColor = child.id;
})