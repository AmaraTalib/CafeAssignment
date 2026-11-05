
const form = document.getElementById("feedback-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const birthYear = parseInt(document.getElementById("birth-year").value);

    if (username !== "" && email !== "") {
        document.getElementById("form-message").textContent =
            "Thank you for visiting, " + username +
            "! We will contact you at " + email + ".";
    }

    const age = 2026 - birthYear;
    const discountMessage = document.getElementById("discount-message");

    if (isNaN(birthYear) || birthYear < 1900 || birthYear > 2026) {
        discountMessage.textContent = "Please enter a valid birth year.";
    } else if (age <= 25) {
        discountMessage.textContent =
            "You qualify for our student discount!";
    } else if (age >= 60) {
        discountMessage.textContent =
            "You qualify for our senior discount!";
    } else {
        discountMessage.textContent =
            "Sorry, no age-based discount is available.";
    }
});


const menuRows = document.querySelectorAll("#menu-table tr");

menuRows.forEach(function(row, index) {
    if (index > 0) {
        row.addEventListener("mouseover", function() {
            row.style.backgroundColor = document.body.classList.contains("dark-mode")
                ? "#66533a"
                : "#fff1a8";
            row.style.color = document.body.classList.contains("dark-mode")
                ? "#ffffff"
                : "#4b3b5a";
        });

        row.addEventListener("mouseout", function() {
            row.style.backgroundColor = "";
            row.style.color = "";
        });
    }
});


const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});


const orderItems = document.querySelectorAll(".order-item");
const total = document.getElementById("total");

function calculateTotal() {
    let sum = 0;

    orderItems.forEach(function(item) {
        if (item.checked) {
            sum += parseInt(item.value);
        }
    });

    total.textContent = "Total: Rs. " + sum;
}

orderItems.forEach(function(item) {
    item.addEventListener("change", calculateTotal);
});


const readMoreButton = document.getElementById("read-more-button");
const extraStory = document.getElementById("extra-story");

readMoreButton.addEventListener("click", function() {
    if (extraStory.style.display === "none") {
        extraStory.style.display = "block";
        readMoreButton.textContent = "Read Less";
    } else {
        extraStory.style.display = "none";
        readMoreButton.textContent = "Read More";
    }
});


const filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const category = button.dataset.category;

        menuRows.forEach(function(row, index) {
            if (index === 0) {
                row.style.display = "";
            } else if (
                category === "all" ||
                row.dataset.category === category
            ) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });
});


const currentHour = new Date().getHours();
const openStatus = document.getElementById("open-status");

if (currentHour >= 8 && currentHour < 21) {
    openStatus.textContent = "We are Open!";
    openStatus.style.color = "green";
} else {
    openStatus.textContent = "Closed - Open at 8 AM";
    openStatus.style.color = "red";
}


const specialNotes = document.getElementById("special-notes");
const characterCount = document.getElementById("character-count");

specialNotes.addEventListener("input", function() {
    const remaining = 100 - specialNotes.value.length;
    characterCount.textContent = remaining + " characters remaining";
});
