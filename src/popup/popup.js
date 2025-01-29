document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    // Load saved data when popup opens
    browser.storage.local.get(["email", "senha"]).then((data) => {
        if (data.email) document.getElementById("email").value = data.email;
        if (data.senha) document.getElementById("password").value = data.senha;
    });

    // Save data when the form is submitted
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page reload

        const email = document.getElementById("email").value;
        const senha = document.getElementById("password").value;

        browser.storage.local.set({ email, senha }).then(() => {
            console.log("Data saved!");
        });
    });
});