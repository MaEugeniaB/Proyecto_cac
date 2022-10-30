const valorTicket = 200;

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria = document.getElementById("categoria");

let TotalValorTickets = 0;


const emailValido = mail => {
    return /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(mail);
}

function ResetMontoTotal() {
    Total.innerHTML = "";
}

function MontoTotal (){

    if (nombre.value === ""){
        alert ("Por favor, escribí tu nombre");
        nombre.focus();
        nombre.classList.add("is-invalid");
        return;
    }

    if (apellido.value === ""){
        alert ("Por favor, escribí tu apellido");
        apellido.focus();
        apellido.classList.add("is-invalid");
        return;
    }

    if (mail.value === ""){
        alert ("Por favor, escribí tu mail");
        mail.focus();
        mail.classList.add("is-invalid");
        return;
    }

    if (!emailValido(mail.value)){
        alert ("Por favor, escribí un mail válido");
        mail.focus();
        mail.classList.add("is-invalid");
        return;
    }

    if (cantidadTickets == 0) || (isNaN(cantidadTickets)) {
        alert ("Por favor, elegí la cantidad de tickets");
        cantidadTickets.focus();
        cantidadTickets.classList.add("is-invalid");
        return; 
    }

    if (categoria.value === "") {
        alert ("Por favor, eleg{i una categoría");
        categoria.focus();
        categoria.classList.add("is-invalid");
        return;
    }

    TotalValorTickets = (cantidadTickets)*(valorTicket);

    if (categoria.value == 0) {
        TotalValorTickets = TotalValorTickets
    } else {
        if (categoria.value == 1) {
            TotalValorTickets = TotalValorTickets -  (TotalValorTickets * descuentoEstudiante / 100);
        } else {
            if (categoria.value == 2) {
                TotalValorTickets = TotalValorTickets -  (TotalValorTickets * descuentoTrainee / 100);
            } else {
                TotalValorTickets = TotalValorTickets -  (TotalValorTickets * descuentoJunior / 100);
            }      
        }
    }
    Total.innerHTML = TotalValorTickets;
}


btnResumen.addEventListener("click", MontoTotal);
btnBorrar.addEventListener("click", ResetMontoTotal);