//Counter Website

// Below are DOM nodes stored in variables
let counter = document.querySelector('#counter')
let minusB = document.querySelector('#minus')
let plusB = document.querySelector('#plus')
let heartB = document.querySelector('#heart')
let pauseB = document.querySelector('#pause')
let likesHeart = document.querySelector('.likes')
let commentList = document.querySelector('.comments')
let submitB = document.querySelector('#submit')

// console.log(pauseB.innerText)
// console.log(heartB.innerText)
// console.log(counter.innerText)
//Ticker
let num = 0;
let tuck;
let tick = callback => {tuck = callback(countertick,1000) }

function countertick()
{
    num += 1;
    setInterval(fastText,100)  ///This inner interval counter calls the fastText() function which displays text at a faster rate than 1 per sec
}

function fastText () {        
    counter.innerText = num.toString() ;   
}

document.addEventListener('DOMContentLoaded', function() {
    tick(setInterval)
}); 

//Pause Button Press
let pauz = 2;

//Pressing the pause button increments the pauz variable
pauseB.addEventListener('click', function() {
    pauz += 1;
    pauzDeci(pauz);
}); 

//pause decider
function pauzDeci (x){
    if (x % 2 == 0) //resume tickerfunction and initial state
    {
        tick(setInterval)
        pauseB.innerText = "pause";
        console.log(pauz)
    }
    else if (x % 1 == 0 ) // stop the ticker function
    {
        clearInterval(tuck);
        pauseB.innerText = "resume";
        //console.log("hahahaha")
        //console.log(pauz)
    }
}


console.log(pauz)
console.log(num);

//Heart button press
let heartClicks = 0;
heartB.addEventListener('click', function() {
    
    heartClicks += 1;
    heartPress(heartClicks, num)
}); 

function heartPress (heartClicks, num) {
    const likes = document.createElement('li');
    likes.className = `data-num`; 
    document.getElementsByClassName("data-num").class = num;
    likes.innerText = `${num} has been liked ${heartClicks}  times`
    likesHeart.appendChild(likes);
}

// Changing the timer number

  
minusB.addEventListener('click', function() {
  num -= 1;
}); 

plusB.addEventListener('click', function() {
    num += 1;
}); 

//Commentor

submitB.addEventListener('click', function() {
    let coolComment = commentor();
}); 

function commentor() {
    let inputB = document.querySelector('#comment-input')
    let pLikes = document.createElement('p');
    let usrText = inputB.value
    console.log(inputB);
    //pLikes.innerText = `${usrText}`
    commentList.appendChild(pLikes);
}



