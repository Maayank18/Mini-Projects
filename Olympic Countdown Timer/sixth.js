setInterval(()=>{
    const result = document.getElementById('result');
const current = Date.now();
const olympictime = new Date(2028,6,14).getTime();

// diffrence of olympic and current will give us the countdown time 
let timer = olympictime - current;

// finding exact things
const day = Math.floor((timer)/(1000*60*60*24));
timer = timer % (1000*60*60*24); // remainder after calculating the days 

const hour = Math.floor((timer)/(1000*60*60));
timer = timer % (1000*60*60);

const minute = Math.floor((timer)/(1000*60));
timer = timer % (1000*60);

const second = Math.floor((timer)/(1000));
timer = timer % (1000);

result.textContent = `Days ${day} Hour:${hour} Minutes:${minute} Seconds:${second}`;
},1000);