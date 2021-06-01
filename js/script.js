function Validarinformacion() {
    let datos = new Object();
    var nombre = document.getElementById("name_contact").value;
    var correo = document.getElementById("email_contact").value;
    var telefono = document.getElementById("tel_contact").value;
    var pedido = document.getElementById("pedido").value;

//Evaluar nombre//
    if (nombre.length < 5) {
        document.getElementById("msgNombre").innerText ="ingrese nombre correcto";
    } else {
        document.getElementById("msgNombre").innerText ="";
        datos["Nombre"] = nombre;
    }

//Evaluar correo//
    if (correo.length > 0){

        var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(!regex.test(correo)){
            document.getElementById("msgCorreo").innerText = "Ingrese un correo válido";
        }else{
            document.getElementById("msgCorreo").innerText = "";
            datos["Correo"] = correo;
        }
    }else{
            document.getElementById("msgCorreo").innerText = "El correo es obligatorio"
    }
 
//Evaluar telefono//
    if (telefono.length  < 9) {

            document.getElementById("msgfono").innerText ="ingrese un teléfono válido";
    } else {
             document.getElementById("msgfono").innerText ="";
             datos["Telefono"] = telefono;
             }

//Evaluar pedido//
    if (pedido.length  <= 0) {

        document.getElementById("msgpedido").innerText ="Ingrese la cantidad deseada y sus comentarios";
    } else {
         document.getElementById("msgpedido").innerText ="";
         datos["Pedido"] = pedido;
  }

  console.log(datos);
 }
