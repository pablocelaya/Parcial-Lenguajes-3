//LLamo al dom 
document.getElementById("registroForm").addEventListener("submit", function (e) {
  e.preventDefault();
    //Obtengo datos del formulario
  let apel = document.getElementById("apellido").value.trim();
  let nom = document.getElementById("nombre").value.trim();
  let dni = document.getElementById("dni").value.trim();
  let fech = document.getElementById("fecha").value;
  let email = document.getElementById("email").value.trim();


    //Validaciones usando tst
  if (!/^[a-zA-Z\s]+$/.test(apel)) {
    alert("apellido invalido. Solo letras");
    return;
  }
  if (!/^[a-zA-Z\s]+$/.test(nom)) {
    alert("Nombre inválido. Solo letras.");
    return;
  }


  //el dni debe ser menor a 8
  if (!/^\d{8}$/.test(dni) ) {
    alert("deben ser 8 numeros.y solo numeros, sin puntos");
    return;
  }
  const year = new Date(fech).getFullYear();
  if (year <= 2006) {
    alert("F Debe ser posterior a 2006.");
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Email invalido.");
    return;
  }
  //Aviso que se envio el formulario
  alert("Formulario enviado!");
});

//Tanda de preguntas
document.getElementById("Preguntas").addEventListener("click", function () {
  let r1 = prompt("¿Nacionalidad?");
  let r2 = prompt("¿color favorito?");
  let r3 = prompt("¿mascota?");

  document.getElementById("respuestas").innerHTML = `
    <h5>Respuestas:</h5>
    <ul>
      <li><strong>Nacionalidad:</strong> ${r1}</li>
      <li><strong>Color favorito:</strong> ${r2}</li>
      <li><strong>Mascota:</strong> ${r3}</li>
    </ul>
  `;
});

