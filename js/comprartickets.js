const valorTicket = 200;

const emailValido = mail => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
} 

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria = document.getElementById("categoria");


function quitarClaseError () {
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove("is-invalid");
    }
}

function ResetMontoTotal() {
    quitarClaseError();
    Total.innerHTML = "";
}

function MontoTotal (){

    quitarClaseError();

    if (nombre.value === "") {
        nombre.classList.add ("is-invalid");
        nombre.focus();
        alert ("Por favor, escribí tu nombre");
        return;
    }
    
    if (apellido.value === ""){
        apellido.focus();
        apellido.classList.add("is-invalid");
        alert ("Por favor, escribí tu apellido");
        return;
    }
    
    if (mail.value === ""){
        mail.focus();
        mail.classList.add("is-invalid");
        alert ("Por favor, escribí tu mail");
        return;
    }
    
    if (!emailValido(mail.value)) {
        mail.focus();
        mail.classList.add("is-invalid");
        alert ("Por favor, escribí un mail válido");
        return;
    }
    
    if (cantidadTickets.value == 0) {
        cantidadTickets.focus();
        cantidadTickets.classList.add("is-invalid");
        alert ("Por favor, elegí la cantidad de tickets");
        return; 
    }

    if (categoria.value === "") {
        categoria.focus();
        categoria.classList.add("is-invalid");
        alert ("Por favor, elegi una categoría");
        return;
    }
   
    let TotalValorTickets = (cantidadTickets.value)*(valorTicket);

    if (categoria.value == 0) {
        TotalValorTickets = TotalValorTickets;
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