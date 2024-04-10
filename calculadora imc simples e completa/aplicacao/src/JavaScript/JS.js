document.addEventListener('DOMContentLoaded', function() {
    let botaoCalcular = document.querySelector('.botao');

    botaoCalcular.onclick = function(event) {
        let campos = document.querySelectorAll('input[type="text"], input[type="date"], input[type="number"], select');
        let camposPreenchidos = true;

        campos.forEach(function(campo) {
            let label = document.querySelector('label[for="' + campo.id + '"]');
            if (!campo.value) {
                camposPreenchidos = false;
                label.classList.add('chacoalhar');
            } else {
                label.classList.remove('chacoalhar');
            }
        });

        if (!camposPreenchidos) {
            event.preventDefault(); // Impede o envio do formulário

            let site = document.getElementById('site');
            site.classList.add('chacoalhar');

            setTimeout(function() {
                site.classList.remove('chacoalhar');
            }, 500);
        }
    };
});
