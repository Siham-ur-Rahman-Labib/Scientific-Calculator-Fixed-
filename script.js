let display = document.getElementById("display");
let historyContainer = document.getElementById("history");
let history = [];
let aboutUsModal = document.getElementById("about-us-modal");
let closeModal = document.getElementById("close-modal");

// Event listener for button clicks
document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", handleClick);
});

// Handle button click
function handleClick(event) {
    let buttonValue = event.target.innerText;

    if (buttonValue === "=") {
        try {
            let result = eval(display.value);
            let calculation = `${display.value} = ${result}`;
            display.value = result;
            history.push(calculation);
            updateHistory();
        } catch (error) {
            display.value = "Error";
        }
    } else if (buttonValue === "C") {
        display.value = "";
    } else if (buttonValue === "History") {
        toggleHistory();
    } else if (buttonValue === "About Us") {
        showAboutUs();
    } else {
        display.value += buttonValue;
    }
}

// Scientific functions
document.getElementById("btn-sin").addEventListener("click", () => {
    display.value = Math.sin(parseFloat(display.value));
});

document.getElementById("btn-cos").addEventListener("click", () => {
    display.value = Math.cos(parseFloat(display.value));
});

document.getElementById("btn-tan").addEventListener("click", () => {
    display.value = Math.tan(parseFloat(display.value));
});

document.getElementById("btn-sqrt").addEventListener("click", () => {
    display.value = Math.sqrt(parseFloat(display.value));
});

document.getElementById("btn-square").addEventListener("click", () => {
    display.value = Math.pow(parseFloat(display.value), 2);
});

document.getElementById("btn-cube").addEventListener("click", () => {
    display.value = Math.pow(parseFloat(display.value), 3);
});

document.getElementById("btn-pi").addEventListener("click", () => {
    display.value = Math.PI;
});

document.getElementById("btn-e").addEventListener("click", () => {
    display.value = Math.E;
});

// Update history function
function updateHistory() {
    historyContainer.innerHTML = history.map((item) => `<p>${item}</p>`).join("");
}

// Toggle history display
function toggleHistory() {
    historyContainer.style.display = historyContainer.style.display === "block" ? "none" : "block";
}

// Show the About Us modal
function showAboutUs() {
    aboutUsModal.style.display = "flex";
}

// Close the About Us modal
closeModal.onclick = function () {
    aboutUsModal.style.display = "none";
}

// Prevent multiple clicks in quick succession
document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", function () {
        btn.disabled = true;
        setTimeout(() => (btn.disabled = false), 200); // Re-enable button after 200ms
    });
});