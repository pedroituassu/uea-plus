const toggleButton = document.getElementById("toggleButton");
const toggleCircle = document.getElementById("toggleCircle");
let toggled = true;

console.log("Toggle state when starting:", toggled)
// Retrieve the saved toggle state when the popup loads
browser.storage.local.get("toggled").then((result) => {
    if (result.toggled !== undefined) {
        toggled = result.toggled;
        console.log("Toggle state after getting storage:", toggled)
        updateToggleUI();
    }
});

// Toggle functionality
toggleButton.addEventListener("click", () => {
    console.log("Toggle state before click:", toggled);
    toggled = !toggled;
    updateToggleUI();
    // Save the toggle state to storage
    browser.storage.local.set({ toggled: toggled }).then(() => {
        console.log("Toggle state after click:", toggled);
    });
});

// Update the UI based on the toggle state
function updateToggleUI() {
    if (toggled) {
        toggleButton.classList.add("bg-green-600");
        toggleCircle.classList.add("translate-x-6");
        toggleButton.classList.remove("bg-green-600/20");
    } else {
        toggleButton.classList.add("bg-green-600/20");
        toggleButton.classList.remove("bg-green-600");
        toggleCircle.classList.remove("translate-x-6");
    }
    console.log("Toggle state after updateToggleUI:", toggled);
}