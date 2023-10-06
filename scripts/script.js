document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('preguntaForm');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        const respuestas = {
            respuesta1: formulario.querySelector('input[name="respuesta1"]:checked'),
            respuesta2: formulario.querySelector('input[name="respuesta2"]:checked'),
            respuesta3: formulario.querySelector('input[name="respuesta3"]:checked'),
            respuesta4: formulario.querySelector('input[name="respuesta4"]:checked'),
            respuesta5: formulario.querySelector('input[name="respuesta5"]:checked')
        };
        if (
            respuestas.respuesta1 && respuestas.respuesta1.value === "ahri" &&
            respuestas.respuesta2 && respuestas.respuesta2.value === "huesca" &&
            respuestas.respuesta3 && respuestas.respuesta3.value === "orianna" &&
            respuestas.respuesta4 && respuestas.respuesta4.value === "guarras" &&
            respuestas.respuesta5 && respuestas.respuesta5.value === "mejor"
        ) {
            window.location.href = 'sorpresa.html';
        } else {
            alert('Una o más respuestas son incorrectas. Inténtalo de nuevo.');
        }
    });
});
