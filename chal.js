/**
 * Utility Functions
 */
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Event Handling
 */
function onClickHandler(event) {
    console.log("Button clicked!", event.target);
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("myButton");
    if (button) {
        button.addEventListener("click", onClickHandler);
    }
});

/**
 * Fetch API Data
 */
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

/**
 * DOM Manipulation
 */
function createList(items) {
    const ul = document.createElement("ul");
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}

/**
 * Date and Time Utilities
 */
function formatDate(date) {
    return date.toISOString().split("T")[0];
}

function getCurrentTime() {
    return new Date().toLocaleTimeString();
}

/**
 * Sample Usage
 */
console.log("Random number:", generateRandomNumber(1, 100));
console.log("Shuffled array:", shuffleArray([1, 2, 3, 4, 5]));

fetchData("https://jsonplaceholder.typicode.com/todos/1").then(data => {
    console.log("Fetched data:", data);
});
/** part 3 : ck3d_w3b_ */
createList(["Apple", "Banana", "Cherry"]);
console.log("Today's date:", formatDate(new Date()));
console.log("Current time:", getCurrentTime());
