const auto_login = (email, senha) => {
    document.getElementById("email").value = email
    document.getElementById("senha").value = senha
    document.getElementById("formLogin").submit()
}

browser.storage.local.get(["email", "senha"]).then((data) => {
    let email = data.email;
    let senha = data.senha;
    auto_login(email, senha)
})