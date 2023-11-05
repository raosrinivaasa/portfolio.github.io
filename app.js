console.log("Thanks for inspecting! This is PURE")

// Function to hide the preloader after a set time (e.g., 1500ms)
function hidePreloader() {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
}

    // Add an event listener to hide the preloader after 1500ms (1.5 seconds)
    window.addEventListener("load", () => {
    setTimeout(hidePreloader, 800);
    });