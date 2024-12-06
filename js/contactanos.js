$(document).ready(function(e) {

  $("body").on("click", "#EnviarFromContac", function(e){
    e.preventDefault();
   
    d_nombre = $("#contactanos #Usu_Nombre").val();
    d_correo = $("#contactanos #Usu_Correo").val();
    d_telefono = $("#contactanos #Usu_telefono").val();
    d_empresa = $("input[type=radio][id=empresa]:checked").val();
    d_particular = $("input[type=radio][id=particular]:checked").val();
    d_situacion = $("#contactanos #Usu_Situacion").val();
    d_mensaje = $("#contactanos #Usu_Comentario").val();
   
    $.ajax({
      type:"POST",
      url:"php/op_enviarMensajeContacto.php",
      beforeSend: function() {
        $(".correcto").html("Enviando Mensaje...");
        $(".incorrecto").css("display", "none");
      },
      data:{ nombre: d_nombre, correo: d_correo, telefono: d_telefono, particular: d_particular, empresa: d_empresa, situacion: d_situacion, mensaje4: d_mensaje },
      success: function(data) {
        //$(".").html(data);
        $(".enviado").css("display", "block");
        //$(".correcto").css("flex-direction", "column");
//        $(".correcto").html("Se ha enviado el mensaje correctamente");
        $(".no_enviado").css("display", "none");
       
        $("#contactanos #Usu_Nombre").val("");
        $("#contactanos #Usu_Correo").val("");
        $("#contactanos #Usu_telefono").val("");
        $("#contactanos #particular").val("");
        $("#contactanos #empresa").val("");
        $("#contactanos #Usu_Situacion").val("");
        $("#contactanos #Usu_Comentario").val("");
        $("#contactanos .Con_Politica").attr("checked",false);  
      },
      error: function(er1, er2, er3) {
        console.log(er2+"-"+er3);
        $(".no_enviado").css("display", "block");
        //$(".incorrecto").css("flex-direction", "column");
//        $(".incorrecto").html("No fue posible enviar el correo, <br> intenta nuevamente");
        $(".enviado").css("display", "none");
      }
    });
  });
});



