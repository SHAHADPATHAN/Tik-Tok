document.addEventListener("DOMContentLoaded", () => {
    // Make heart react on click
    document.querySelectorAll(".icon").forEach(icon => {
        icon.addEventListener("click", () => {
            icon.classList.add("pop");
            setTimeout(() => {
                icon.classList.remove("pop");
            }, 300);

            // Optional: Show an alert for fun
            if (icon.textContent === "🔁") {
                alert("You shared this video!");
            }
        });
    });
});
