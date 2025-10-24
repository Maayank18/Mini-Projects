// const body = document.querySelector('body');

// body.addEventListener('click', (e) => {
//     const circleEle = document.createElement('div');
//     circleEle.classList.add('circle');
//     circleEle.textContent = "Wooww!!"

//     const color = ['red','blue','pink','orange','yellow','brown'];
//     circleEle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];
//     circleEle.style.top = `${e.clientY}px`;
//     circleEle.style.left = `${e.clientX}px`;

//     body.append(circleEle);
// })

console.log("JS Loaded!");


document.addEventListener('DOMContentLoaded',()=>{
    const body = document.querySelector('body');

    body.addEventListener('click', (e) => {
        console.log(e.clientX,e.clientY);
        const circleEle = document.createElement('div');
        circleEle.classList.add('circle');
        circleEle.textContent = "Wooww!!";

        const colors = ['red','blue','pink','orange','yellow','brown'];
        circleEle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        circleEle.style.top = `${e.clientY - 25}px`;
        circleEle.style.left = `${e.clientX - 25}px`;

        body.append(circleEle);

        setTimeout(() => circleEle.remove(), 5000);
    });
});

