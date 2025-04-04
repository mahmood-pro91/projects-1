//the end of the year date to count to 
// 1000 milliseconds = 1 second

let countDownDate = new Date("Dec 31, 2025 23:59:59").getTime();


let counter = setInterval(() => {
    // Get Date now
    let dateNow = new Date().getTime();

    //find the date difference |.| Now and countdown
    let dateDiff = countDownDate - dateNow; // in milliseconds

    // Get time unites
    let days = Math.floor(dateDiff /(1000*60*60*24));
    let hour = Math.floor(dateDiff %(1000*60*60*24)/(1000*60*60));
    let min = Math.floor(dateDiff %(1000*60*60*24)/(1000*60));
    let sec = Math.floor(dateDiff %(1000*60*60*24)/ 1000); 
    
    
    
    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hour;
    document.querySelector(".minutes").innerHTML = min;
    document.querySelector(".seconds").innerHTML = sec;

},1000)