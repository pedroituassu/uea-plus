const auto_login = (email, senha) => {
    document.getElementById("email").value = email
    document.getElementById("senha").value = senha
    document.getElementById("formLogin").submit()
}

let email = "pcmi.eng23@uea.edu.br"
let senha = "99538199200"

auto_login(email, senha)