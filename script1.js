// Counting up the number
let countElement = document.getElementById('count');
let count = 0;
let target = 17; // Change this to the number you want to count to
let speed = 50; // Speed of counting

function updateCount() {
    if (count < target) {
        count++;
        countElement.innerText = count;
        setTimeout(updateCount, speed);
    }
}

window.onload = function() {
    setTimeout(updateCount, 4000); // Start counting after the counter appears
};
