const toggleButton = document.getElementById("toggleButton");
const toggleCircle = document.getElementById("toggleCircle");
let toggled = false;

// Retrieve the saved toggle state when the popup loads
browser.storage.local.get("toggled").then((result) => {
    if (result.toggled !== undefined) {
        toggled = result.toggled;
        updateToggleUI();
    }
});

// Toggle functionality
toggleButton.addEventListener("click", () => {
    toggled = !toggled;
    updateToggleUI();
    // Save the toggle state to storage
    browser.storage.local.set({ toggled: toggled }).then(() => {
        console.log("Toggle state saved:", toggled);
    });
});

// Update the UI based on the toggle state
function updateToggleUI() {
    toggleButton.classList.toggle("bg-green-600/20", toggled);
    toggleCircle.classList.toggle("translate-x-6", toggled);
}