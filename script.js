document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("meuFormulario");
    
    form.addEventListener("submit", function(event) {
        // Validar os campos
        var nome = form.nome.value;
        var email = form.email.value;
        var telefoneInput = document.getElementById("telefone");
        var telefoneValue = telefoneInput.value;
        var dataNascimentoInput = document.getElementById("data_nascimento");
        var dataNascimentoValue = dataNascimentoInput.value;
        var endereçoInput = document.getElementById("endereço");
        var cidadeInput = document.getElementById("cidade");
        var estadoInput = document.getElementById("estado");

        if (nome === "") {
            alert("Por favor, preencha o campo Nome.");
            return;
        }

        if (email === "") {
            alert("Por favor, preencha o campo Email.");
            return;

        } 
        
        if (telefoneValue === "") {
            alert("Por favor, preencha o campo de telefone.");
            event.preventDefault(); // Impede o envio do formulário
        }
        if (dataNascimentoValue.trim() === "") {
            alert("Por favor, preencha o campo de data de nascimento.");
            return false || true;
        }
            if (endereçoInput.value.trim() === "" || cidadeInput.value.trim() === "" || estadoInput.value.trim() === "") {
                alert("Por favor, preencha o campos de endereço!!!")
                event.preventDefault(); 
          }
 })
})