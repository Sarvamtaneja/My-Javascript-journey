// setInterval
setInterval(() => console.log(`this function will repeat itself in every 2 seconds`),2000
);

// setTimeout
setTimeout(function() {
    console.log(`This function will be executed after 3 seconds`);
}, 3000
);

// stop the interval after 10 seconds
const intervalId = setInterval(function(){
    console.log(`This function is being executed for a time interval only (10 seconds)`);
}, 1000);

setTimeout(function(){
    clearInterval(intervalId);
    console.log(`Interval stopped`);
}, 10000);