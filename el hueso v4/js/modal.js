/*document.addEventListener("DOMContentLoaded", function() {
    var boton = document.getElementById("miBoton");
    var modal = document.getElementById("miModal");
    var cerrar = document.getElementsByClassName("cerrar")[0];

    boton.addEventListener("click", function() {
        modal.style.display = "block";
    });

    cerrar.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});

*/

document.addEventListener("DOMContentLoaded", function() {
    var boton = document.getElementById("miBoton");
    var modal = document.getElementById("miModal");
    var cerrar = document.getElementsByClassName("cerrar")[0];
    var contenidocard = document.getElementsByClassName("contenidocard")[0];

    boton.addEventListener("click", function() {
        modal.style.display = "block";
    });

    cerrar.addEventListener("click", function() {
        modal.style.display = "none";
    });

    contenidocard.addEventListener("mouseleave", function(event) {
        var isInsideModal = modal.contains(event.relatedTarget);
        if (!isInsideModal) {
            modal.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var boton = document.getElementById("miBoton2");
    var modal = document.getElementById("miModal2");
    var cerrar = document.getElementsByClassName("cerrar")[1];
    var contenidocard = document.getElementsByClassName("contenidocard")[0];

    boton.addEventListener("click", function() {
        modal.style.display = "block";
    });

    cerrar.addEventListener("click", function() {
        modal.style.display = "none";
    });

    contenidocard.addEventListener("mouseleave", function(event) {
        var isInsideModal = modal.contains(event.relatedTarget);
        if (!isInsideModal) {
            modal.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var boton = document.getElementById("miBoton3");
    var modal = document.getElementById("miModal3");
    var cerrar = document.getElementsByClassName("cerrar")[2];
    var contenidocard = document.getElementsByClassName("contenidocard")[0];

    boton.addEventListener("click", function() {
        modal.style.display = "block";
    });

    cerrar.addEventListener("click", function() {
        modal.style.display = "none";
    });

    contenidocard.addEventListener("mouseleave", function(event) {
        var isInsideModal = modal.contains(event.relatedTarget);
        if (!isInsideModal) {
            modal.style.display = "none";
        }
    });
});


