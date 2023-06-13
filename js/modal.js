
/*
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

*/

document.addEventListener("DOMContentLoaded", function() {
    var boton = document.getElementById("miBoton");
    var modal = document.getElementById("miModal");
    var cerrar = document.getElementsByClassName("cerrar")[0];
    var contenidocard = document.getElementsByClassName("contenidocard")[0];
    var modalContent = modal.getElementsByClassName("modal-content")[0];
  
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
  
    modalContent.addEventListener("scroll", function() {
      // Aquí puedes realizar cualquier acción adicional cuando se desplace el contenido de la modal
    });
  });
  
  // Repite el mismo código para las otras dos modales (miModal2 y miModal3), ajustando los IDs y clases correspondientes.
  document.addEventListener("DOMContentLoaded", function() {
    var boton = document.getElementById("miBoton2");
    var modal = document.getElementById("miModal2");
    var cerrar = document.getElementsByClassName("cerrar")[1];
    var contenidocard = document.getElementsByClassName("contenidocard")[0];
    var modalContent = modal.getElementsByClassName("modal-content")[0];
  
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
  
    modalContent.addEventListener("scroll", function() {
      // Aquí puedes realizar cualquier acción adicional cuando se desplace el contenido de la modal
    });
  });
  
  // Repite el mismo código para las otras dos modales (miModal2 y miModal3), ajustando los IDs y clases correspondientes.

  document.addEventListener("DOMContentLoaded", function() {
    var boton = document.getElementById("miBoton3");
    var modal = document.getElementById("miModal3");
    var cerrar = document.getElementsByClassName("cerrar")[2];
    var contenidocard = document.getElementsByClassName("contenidocard")[0];
    var modalContent = modal.getElementsByClassName("modal-content")[0];
  
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
  
    modalContent.addEventListener("scroll", function() {
      // Aquí puedes realizar cualquier acción adicional cuando se desplace el contenido de la modal
    });
  });
  
  // Repite el mismo código para las otras dos modales (miModal2 y miModal3), ajustando los IDs y clases correspondientes.
  