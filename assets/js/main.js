// Fundación Red de Rescate Animal EC — interacciones del sitio
(function () {
  "use strict";

  // Menú móvil
  var toggle = document.querySelector(".nav__toggle");
  var panel = document.getElementById("menu-principal");
  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      var abierto = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!abierto));
      panel.classList.toggle("abierto", !abierto);
    });
    panel.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        toggle.setAttribute("aria-expanded", "false");
        panel.classList.remove("abierto");
        toggle.focus();
      }
    });
  }

  // Año en el pie
  document.querySelectorAll("[data-anio]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Filtros de animales en adopción
  var filtros = document.querySelectorAll(".filtro");
  var animales = document.querySelectorAll(".animal[data-especie]");
  var conteo = document.querySelector("[data-conteo]");
  var vacio = document.querySelector(".sin-resultados");

  function aplicarFiltro(valor) {
    var visibles = 0;
    animales.forEach(function (a) {
      var mostrar =
        valor === "todos" ||
        a.dataset.especie === valor ||
        (a.dataset.etiquetas || "").split(" ").indexOf(valor) !== -1;
      a.hidden = !mostrar;
      if (mostrar) visibles++;
    });
    filtros.forEach(function (f) {
      f.setAttribute("aria-pressed", String(f.dataset.filtro === valor));
    });
    if (conteo) {
      conteo.textContent =
        visibles === 1 ? "1 animal" : visibles + " animales";
    }
    if (vacio) vacio.hidden = visibles !== 0;
  }

  if (filtros.length) {
    filtros.forEach(function (f) {
      f.addEventListener("click", function () {
        aplicarFiltro(f.dataset.filtro);
      });
    });
    aplicarFiltro("todos");
  }

  // Formulario de contacto: abre el correo del visitante con el mensaje listo.
  // Para recibir mensajes sin correo, cambiar por un servicio de formularios (ver README).
  var form = document.querySelector("[data-formulario-contacto]");
  if (form) {
    var params = new URLSearchParams(window.location.search);
    var animal = params.get("animal");
    var motivo = params.get("motivo");
    if (motivo && form.motivo) form.motivo.value = motivo;
    if (animal && form.mensaje) {
      if (form.motivo) form.motivo.value = "Quiero adoptar";
      form.mensaje.value =
        "Hola, me interesa conocer a " + animal + ". ";
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var destino = form.dataset.correo;
      var asunto =
        (form.motivo ? form.motivo.value : "Mensaje") +
        " · " + form.nombre.value;
      var cuerpo =
        "Nombre: " + form.nombre.value +
        "\nCorreo: " + form.correo.value +
        (form.telefono && form.telefono.value ? "\nTeléfono: " + form.telefono.value : "") +
        "\n\n" + form.mensaje.value;
      window.location.href =
        "mailto:" + destino +
        "?subject=" + encodeURIComponent(asunto) +
        "&body=" + encodeURIComponent(cuerpo);
      var estado = form.querySelector(".formulario__estado");
      if (estado) {
        estado.textContent =
          "Abrimos tu aplicación de correo con el mensaje listo. Si no se abrió, escríbenos directamente a " +
          destino + ".";
      }
    });
  }
})();
