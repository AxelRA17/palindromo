import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SweetAlert2 from 'sweetalert2';

const filtro_cadena = (cadena) => {
    const cadena_limpia = cadena.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const cadena_invertida = cadena_limpia.split('').reverse().join('');
    return cadena_limpia === cadena_invertida;
}

document.getElementById('btn_verificar').addEventListener('click', () => {
    const cadena = document.getElementById('cadena').value;
    if (cadena.trim() === '') {
        SweetAlert2.fire({
            icon: 'warning',
            title: 'Advertencia',
            text: 'Por favor, ingrese una cadena.',
            confirmButtonText: 'Aceptar'
        });
        return;
    }
    const es_palindromo = filtro_cadena(cadena);
    if (es_palindromo) {
        SweetAlert2.fire({
            icon: 'success',
            title: 'Resultado',
            text: `La cadena "${cadena}" es un palíndromo.`,
            confirmButtonText: 'Aceptar'
        });
    } else {
        SweetAlert2.fire({
            icon: 'error',
            title: 'Resultado',
            text: `La cadena "${cadena}" no es un palíndromo.`,
            confirmButtonText: 'Aceptar'
        });
    }
    document.getElementById('cadena').value = '';
    document.getElementById('cadena').focus();
});

document.getElementById('cadena').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('btn_verificar').click();
    }
});

