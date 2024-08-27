const fs = require('fs');

// Problem 1

console.log("This is synchronous")
setTimeout(() => {
    console.log('This is asynchronous.')
}, 2000)
console.log("End of script.")


// Problem 2

console.log("Interval started")
const name = setInterval(() => {
    console.log("Repeated message...")
}, 3000)

setTimeout(() => {
    clearInterval(name)
}, 10000)

// Problem 3
console.log("Async Code started")
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File contents:', data);
});

console.log("Sync Code started")
try {
    const data = fs.readFileSync('input.txt', 'utf8');
    console.log('File contents:', data);
} catch (err) {
    console.error('Error reading the file:', err);
}

console.log("<----- Sync Code ended ------>")

// Problem 4

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File contents:', data);
});

// Async file reading
setTimeout(() => {
    console.log("Async operation started.")
    fs.readFile('asyncData.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        console.log('File contents:', data);
    });
}, 2000)
console.log("Script complete.")

// Problem 5

// Synchronous log to start the script
console.log("Countdown initiated...");

// Blocking loop to delay the start of the countdown by 3 seconds
const delay = 3000
const start = Date.now()
while (Date.now() - start < delay) {
}

let countdown = 10;
const intervalId = setInterval(() => {
    console.log(countdown)
    countdown--

    if (countdown < 0) {
        clearInterval(intervalId)

        setTimeout(() => {
            console.log("Liftoff!")
        }, 0)
    }
}, 1000)