function myFunction() {
    console.log("I live in London");
    console.log("I love it");
}

let timer = setInterval(myFunction, 1000); //repeats it every 1 second

function stop() {
    clearInterval(timer);
}

setTimeout(stop, 10000); //makes it stop
