document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();

    if (!username || !password) {
        document.getElementById('errorMessage').innerText = 'Por favor, preencha todos os campos.';
        return;
    }

    // Aqui você pode adicionar a lógica de autenticação

    // Se a autenticação for bem-sucedida, redirecione o usuário para a página inicial, por exemplo
    window.location.href = 'pagina-inicial.html';
});

document.getElementById('forgotPassword').addEventListener('click', function(event) {
    event.preventDefault();
    var email = prompt('Digite seu email para recuperação de senha:');
    
    // Aqui você pode adicionar a lógica para enviar um email de recuperação de senha
    if (email) {
        alert('Um email de recuperação de senha foi enviado para ' + email);
    }
});