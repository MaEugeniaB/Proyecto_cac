const valorTicket = 200;



let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria = document.getElementById("categoria");

//let TotalValorTickets = 0;

function quitarClaseError () {
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i=0; i < x.length; i++) {
        x[i].classlist.remove ("is-invalid");
    }
}

const emailValido = mail => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
} 


function ResetMontoTotal() {
  //  quitarClaseError();
    Total.innerHTML = "";
}

function MontoTotal (){

    //quitarClaseError();

    if (nombre.value === "") {
       // nombre.classList.add("is-invalid");
        nombre.focus();
        alert ("Por favor, escribí tu nombre");
        return;
    }

    if (apellido.value === ""){
        alert ("Por favor, escribí tu apellido");
        apellido.focus();
        //apellido.classList.add("is-invalid");
        return;
    }

    if (mail.value === ""){
        alert ("Por favor, escribí tu mail");
        mail.focus();
       // mail.classList.add("is-invalid");
        return;
    }
    

    if (!emailValido(mail.value)) {
        alert ("Por favor, escribí un mail válido");
        mail.focus();
        //mail.classList.add("is-invalid");
        return;
    }
    

    if (cantidadTickets.value == 0) {
        alert ("Por favor, elegí la cantidad de tickets");
        cantidadTickets.focus();
       // cantidadTickets.classList.add("is-invalid");
        return; 
    }

    if (categoria.value === "") {
        alert ("Por favor, elegi una categoría");
        categoria.focus();
        //categoria.classList.add("is-invalid");
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