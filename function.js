// Navbar Counters
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heart = document.getElementById("heart");
const coin = document.getElementById("coinCount");
const copy = document.getElementById("nav-copy");



const heartButtons = document.querySelectorAll("[id^='heart-btn-']");
heartButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        heartCount++;
        heart.textContent = heartCount;
    });
});

const copyButtons = document.querySelectorAll(".fa-copy").forEach(copyIcon => {
    const btn = copyIcon.parentElement;
    btn.addEventListener("click", () => {
        const card = btn.closest("div.col-span-3");
        const number = card.querySelector("h1").innerText;

        navigator.clipboard.writeText(number).then(() => {
            alert(`Copied number: ${number}`);
            copyCount++;
            copy.textContent = copyCount;
        });
    });
});

// Call Button Function

const callButtons = document.querySelectorAll(".fa-phone").forEach(callIcon => {
    const btn = callIcon.parentElement;
    btn.addEventListener("click", () => {
        const card = btn.closest("div.col-span-3");
        const serviceName = card.querySelector("h2").innerText;
        const number = card.querySelector("h1").innerText;

        if (coinCount < 20) {
            alert("Not enough coins");
            return;
        }

        coinCount -= 20;
        coin.textContent = coinCount;

        const time = new Date().toLocaleTimeString();

        alert(`Calling ${serviceName} at ${number}`);

        const historyItem = document.getElementById("history");
        const item = document.createElement("div",);
        item.innerHTML = `
            <div class="flex justify-between items-center p-3">
            <div>
            <p class="font-bold">${serviceName}</p>
            <p>${number}</p>
            </div>
            <p class="text-sm text-black">${time}</p></div>
        `;
        historyItem.appendChild(item);
    });
});

document.getElementById("clear-btn").addEventListener("click",function() {
    document.getElementById("history").innerHTML = "";
});
