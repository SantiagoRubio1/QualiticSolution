<?php

if($_POST['particular'] == 1){
  $resultado6 = "Persona Natural";
}elseif($_POST['empresa'] == 1){
  $resultado6 = "Empresa";
}

switch ($_POST['situacion']){
  case 1:
    $resultado7 = "Tengo una idea de proyecto pero necesito ayuda";
    break;
  case 2: 
    $resultado7 =  "Busco quien mantenga mi programa, web o aplicación";
    break;
  case 3:
    $resultado7 =  "Tengo un proyecto a medias y me gustaría poder terminarlo";
    break;
  case 4:
    $resultado7 =  "Necesito subcontratar un servicio de programación";
    break;
  case 5:
    $resultado7 =  "Otro";
    break;
}



if($_POST['correo'] != ""){
  
  $destinatario = $_POST['correo']; 
  $asunto = "Mensaje Recibido"; 
  $cuerpo = sprintf(' 
  <html> 
  <head> 
    <meta charset="utf-8">
    <title>Mensaje Recibido.</title> 
  </head>
  <body align="center">
  <img src="https://qualiticsolution.com/home/img/Imagen-correo-100.jpg"><br>
  </body>
  </html> 
  ');  

  //para el envío en formato HTML 
  $headers = "MIME-Version: 1.0\r\n"; 
  $headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

  //dirección del remitente 
  ////////$headers .= "From: QUALITIC SOLUTION <noresponder@qualiticsolution.com>\r\n"; 
  $headers .= "From: PRUEBAS <prosanti04@gmail.com.com>\r\n"; 

  $resultado['correo1'] = mail($destinatario,$asunto,$cuerpo,$headers); 
}

  $destinatario1 = "prosanti04@gmail.com"; 
  $asunto1 = "Mensaje Recibido."; 
  $cuerpo1 = sprintf('
  <html> 
  <head> 
    <meta charset="utf-8">
    <title>Mensaje Recibido.</title> 
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 20px;
        background-color: #f4f4f9;
      }
      table {
        width: 80%%;
        margin: 20px auto;
        border-collapse: collapse;
        background-color: #ffffff;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }
      th, td {
        border: 1px solid #ddd;
        padding: 10px;
        text-align: left;
      }
      th {
        background-color: #007BFF;
        color: white;
        font-weight: bold;
      }
      tr:nth-child(even) {
        background-color: #f9f9f9;
      }
      tr:hover {
        background-color: #f1f1f1;
      }
      .title {
        text-align: center;
        color: #333333;
        margin-bottom: 20px;
      }
    </style>
  </head>
  <body>
    <h2 class="title">Detalles del Formulario de Contacto</h2>
    <table>
      <tr>
        <th>Campos</th>
        <th>Descripción</th>
      </tr>
      <tr>
        <td><strong>Nombre</strong></td>
        <td>%s</td>
      </tr>
      <tr>
        <td><strong>Correo</strong></td>
        <td>%s</td>
      </tr>
      <tr>
        <td><strong>Teléfono</strong></td>
        <td>%s</td>
      </tr>
      <tr>
        <td><strong>Empresa o Particular</strong></td>
        <td>%s</td>
      </tr>
      <tr>
        <td><strong>Qué Necesitas</strong></td>
        <td>%s</td>
      </tr>
      <tr>
        <td><strong>Descripción</strong></td>
        <td>%s</td>
      </tr>
    </table>
  </body>
  </html>
', $_POST['nombre'], $_POST['correo'], $_POST['telefono'], $resultado6, $resultado7, $_POST['mensaje4']);

  //para el envío en formato HTML 
  $headers1 = "MIME-Version: 1.0\r\n"; 
  $headers1 .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
  //dirección del remitente 
  ////////$headers1 .= "From: QUALITIC SOLUTION <noresponder@qualiticsolution.com>\r\n";
  $headers .= "From: PRUEBAS <prosanti04@gmail.com.com>\r\n"; 
  $resultado['correo'] = mail($destinatario1,$asunto1,utf8_decode($cuerpo1),$headers1);

$resultado['mensaje'] = "OK";

echo json_encode($resultado);
?>