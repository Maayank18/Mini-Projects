const form = document.querySelector('form');
const answer = {
    Q1:"Virat Kohli",
    Q2:"West Indies",
    Q3:"Sachin Tendulkar",
    Q4:"264",
    Q5:"Muttiah Muralitharan"
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    const data = new FormData(form);
    let finalScore = 0;

    for(let[name,value] of data.entries() ){
        if(answer[name] == value){
            finalScore++;
        }
    }

    document.getElementById("out").textContent = `Your score is ${finalScore} out of 5`;
})