const auto_login = (email, senha) => {
    document.getElementById("email").value = email
    document.getElementById("senha").value = senha
    document.getElementById("formLogin").submit()
}

browser.storage.local.get(["email", "senha", "toggled"]).then((data) => {
    let email = data.email;
    let senha = data.senha;
    let autoLogin = data.toggled;
    if (autoLogin) auto_login(email, senha);
})