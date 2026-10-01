/* =====================================================
   CARRITO
===================================================== */

let carrito = [];


/* =====================================================
   AGREGAR CURSO
===================================================== */

function agregarCurso(nombre, precio) {


    const cursoExistente =
        carrito.find(curso => curso.nombre === nombre);


    if (cursoExistente) {

        mostrarToast(
            "Este curso ya está en tu carrito"
        );

        return;

    }


    carrito.push({

        nombre: nombre,

        precio: precio

    });


    actualizarCarrito();


    mostrarToast(
        "✓ Curso agregado correctamente"
    );

}



/* =====================================================
   ACTUALIZAR CARRITO
===================================================== */

function actualizarCarrito() {


    const contador =
        document.getElementById(
            "contador-carrito"
        );


    contador.textContent =
        carrito.length;


    const contenido =
        document.getElementById(
            "contenido-carrito"
        );


    const total =
        document.getElementById(
            "total-carrito"
        );


    if (carrito.length === 0) {


        contenido.innerHTML = `

            <div class="carrito-vacio">

                🛒

                <h3>
                    Tu carrito está vacío
                </h3>

                <p>
                    Agrega un curso para comenzar.
                </p>

            </div>

        `;


        total.textContent = "S/ 0";


        return;

    }


    let html = "";

    let suma = 0;


    carrito.forEach((curso, index) => {


        suma += curso.precio;


        html += `

            <div class="carrito-item">

                <div>

                    <h4>
                        ${curso.nombre}
                    </h4>

                    <span>
                        S/ ${curso.precio}
                    </span>

                </div>


                <button
                    class="eliminar"
                    onclick="eliminarCurso(${index})">

                    Eliminar

                </button>

            </div>

        `;

    });


    contenido.innerHTML = html;


    total.textContent =
        "S/ " + suma;

}



/* =====================================================
   ELIMINAR CURSO
===================================================== */

function eliminarCurso(index) {


    carrito.splice(index, 1);


    actualizarCarrito();


    mostrarToast(
        "Curso eliminado del carrito"
    );

}



/* =====================================================
   ABRIR CARRITO
===================================================== */

function abrirCarrito() {


    actualizarCarrito();


    document.getElementById(
        "modal-carrito"
    ).style.display = "flex";

}



/* =====================================================
   CERRAR CARRITO
===================================================== */

function cerrarCarrito() {


    document.getElementById(
        "modal-carrito"
    ).style.display = "none";

}



/* =====================================================
   FAVORITOS
===================================================== */

function favorito(boton) {


    boton.classList.toggle("activo");


    if (boton.classList.contains("activo")) {

        boton.textContent = "♥";

        mostrarToast(
            "Curso agregado a favoritos"
        );

    } else {

        boton.textContent = "♡";

    }

}



/* =====================================================
   BUSCADOR
===================================================== */

function buscarCursos() {


    const texto =
        document
        .getElementById("buscador")
        .value
        .toLowerCase()
        .trim();


    const cursos =
        document.querySelectorAll(".curso");


    let encontrados = 0;


    cursos.forEach(curso => {


        const nombre =
            curso.dataset.nombre;


        if (nombre.includes(texto)) {

            curso.style.display = "";

            encontrados++;

        } else {

            curso.style.display = "none";

        }

    });


    const sinResultados =
        document.getElementById(
            "sin-resultados"
        );


    if (encontrados === 0) {

        sinResultados.style.display =
            "block";

    } else {

        sinResultados.style.display =
            "none";

    }

}



/* =====================================================
   FILTRAR CATEGORIA
===================================================== */

function filtrarCategoria(
    categoria,
    boton = null
) {


    const cursos =
        document.querySelectorAll(".curso");


    let encontrados = 0;


    cursos.forEach(curso => {


        if (
            curso.dataset.categoria === categoria
        ) {

            curso.style.display = "";

            encontrados++;

        } else {

            curso.style.display = "none";

        }

    });


    const sinResultados =
        document.getElementById(
            "sin-resultados"
        );


    if (encontrados === 0) {

        sinResultados.style.display =
            "block";

    } else {

        sinResultados.style.display =
            "none";

    }


    if (boton) {


        document
            .querySelectorAll(".filtro")
            .forEach(btn => {

                btn.classList.remove(
                    "activo"
                );

            });


        boton.classList.add(
            "activo"
        );

    }


    document
        .getElementById("cursos")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* =====================================================
   MOSTRAR TODOS
===================================================== */

function mostrarTodos(boton) {


    const cursos =
        document.querySelectorAll(".curso");


    cursos.forEach(curso => {

        curso.style.display = "";

    });


    document
        .querySelectorAll(".filtro")
        .forEach(btn => {

            btn.classList.remove(
                "activo"
            );

        });


    boton.classList.add("activo");


    document.getElementById(
        "sin-resultados"
    ).style.display = "none";

}



/* =====================================================
   TOAST
===================================================== */

function mostrarToast(mensaje) {


    const toast =
        document.getElementById("toast");


    toast.textContent = mensaje;


    toast.classList.add("mostrar");


    setTimeout(() => {

        toast.classList.remove(
            "mostrar"
        );

    }, 2500);

}



/* =====================================================
   VIDEO
===================================================== */

function mostrarVideo() {


    document.getElementById(
        "modal-video"
    ).style.display = "flex";

}


function cerrarVideo() {


    document.getElementById(
        "modal-video"
    ).style.display = "none";

}



/* =====================================================
   FINALIZAR COMPRA
===================================================== */

function finalizarCompra() {


    if (carrito.length === 0) {


        mostrarToast(
            "Primero agrega un curso"
        );


        return;

    }


    let total = 0;


    carrito.forEach(curso => {

        total += curso.precio;

    });


    alert(

        "🎓 ¡Excelente!\n\n" +

        "Cursos seleccionados: " +
        carrito.length +

        "\n\nTotal: S/ " +
        total +

        "\n\nEste es un proyecto educativo. " +
        "Aquí podrías conectar un sistema real de pagos."

    );

}



/* =====================================================
   NEWSLETTER
===================================================== */

function suscribirse(event) {


    event.preventDefault();


    const email =
        document.getElementById(
            "email"
        ).value;


    mostrarToast(
        "✓ " +
        email +
        " fue suscrito correctamente"
    );


    document
        .getElementById("email")
        .value = "";

}



/* =====================================================
   MENU MOBILE
===================================================== */

function mostrarMenu() {


    const menu =
        document.querySelector(".menu");


    if (menu.style.display === "flex") {

        menu.style.display = "none";

    } else {

        menu.style.display = "flex";

        menu.style.flexDirection =
            "column";

        menu.style.position =
            "absolute";

        menu.style.top = "65px";

        menu.style.left = "0";

        menu.style.right = "0";

        menu.style.background = "white";

        menu.style.padding = "20px";

        menu.style.boxShadow =
            "0 10px 20px rgba(0,0,0,.1)";

    }

}



/* =====================================================
   CERRAR MODALES AL HACER CLICK AFUERA
===================================================== */

window.addEventListener(
    "click",
    function(event) {


        const modalCarrito =
            document.getElementById(
                "modal-carrito"
            );


        const modalVideo =
            document.getElementById(
                "modal-video"
            );


        if (event.target === modalCarrito) {

            cerrarCarrito();

        }


        if (event.target === modalVideo) {

            cerrarVideo();

        }

    }
);