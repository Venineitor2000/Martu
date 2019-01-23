var device = navigator.userAgent; //Esta variable es para despues comprobar si se esta en celu o no
var css = document.getElementById("Estilo");
var Contador_Dias = document.getElementById("Dias");
var Contador_Horas = document.getElementById("Horas");
var Menu = document.getElementById("Menu_Recuerdos");

var meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //Cantidad de dias que tiene cada mes del año

var mes_deseado = [9, 10, 10, 12];
var dia_deseado = [3, 20, 31, 25];

var paginas = ["Aniversario","Cumple", "Hallowen", "Navidad"];
var fondo = ["pink, blue","cyan, purple", "#1A8F8B, #FF0080", "#79FFFB, #A00000"];

var fecha_proxima; //Representa la ubicacion de los array (dia_deseado, mes_deseado, mensajes) para saber cuales tomar para los calculos

var dias_faltantes;

function Tiempo() //Calcula y controla todo
{
  var fecha = new Date();

  var año = fecha.getFullYear();

  var mes = fecha.getMonth();
  var dia = fecha.getDate();

  var horas = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = fecha.getSeconds();

//Calcula cual es la fecha_proxima
  for(i = 0; i < mes_deseado.length; i++)
{
    if(mes_deseado[i] - 1 > mes)
    {
        fecha_proxima = i;
        i= mes_deseado.length;
    }
    else if(mes_deseado[i] - 1 == mes)
    {
        if(dia_deseado[i] >= dia)
        {
            fecha_proxima = i;
            i = mes_deseado.lengtht;
        }
    }
    if(i == mes_deseado.length - 1) //Este if se encarga de que si llega a terminar el for y la fecha mas proxima seria el año que viene y por tanto no entraria en las otras opciones IF, se quede con la primera de todas que seria la mas cercana
    {
      fecha_proxima = 0;
    }
}

//Calcula los dias_faltantes:
if(mes_deseado[fecha_proxima] - 1 == mes && dia_deseado[fecha_proxima] >= dia) //Se resta 1 en mes_deseado debido a que la variable mes los cuenta del 0 al 11
{
  dias_faltantes = dia_deseado[fecha_proxima]- dia;
}
else if(mes_deseado[fecha_proxima] -1 > mes) //Se resta 1 en mes_deseado debido a que la variable mes los cuenta del 0 al 11
{
  switch (mes_deseado[fecha_proxima] - 1 - mes)
  {
    case 1: dias_faltantes = meses[mes] + dia_deseado[fecha_proxima] - dia
    break;

    case 2: dias_faltantes = meses[mes] + meses[mes + 1] + dia_deseado[fecha_proxima] - dia
    break;

    case 3: dias_faltantes = meses[mes] + meses[mes + 1] + meses[mes + 2] + dia_deseado[fecha_proxima] - dia
    break;

    case 4: dias_faltantes = meses[mes] + meses[mes + 1] + meses[mes + 2] + meses[mes + 3] + dia_deseado[fecha_proxima] - dia
    break;

    case 5: dias_faltantes = meses[mes] + meses[mes + 1] + meses[mes + 2] + meses[mes + 3] + meses[mes + 4] + dia_deseado[fecha_proxima] - dia
    break;

    case 6: dias_faltantes = meses[mes] + meses[mes + 1] + meses[mes + 2] + meses[mes + 3] + meses[mes + 4] + meses[mes + 5] + dia_deseado[fecha_proxima] - dia
    break;

    case 7: dias_faltantes = meses[mes] + meses[mes + 1] + meses[mes + 2] + meses[mes + 3] + meses[mes + 4] + meses[mes + 5] + meses[mes + 6] + dia_deseado[fecha_proxima] - dia
    break;

    case 8: dias_faltantes = meses[mes] + meses[mes + 1] + meses[mes + 2] + meses[mes + 3] + meses[mes + 4] + meses[mes + 5] + meses[mes + 6] + meses[mes + 7] + dia_deseado[fecha_proxima] - dia
    break;

    case 9: dias_faltantes = meses[mes] + meses[mes + 1] + meses[mes + 2] + meses[mes + 3] + meses[mes + 4] + meses[mes + 5] + meses[mes + 6] + meses[mes + 7] + meses[mes + 8] + dia_deseado[fecha_proxima] - dia
    break;

    case 10: dias_faltantes = meses[mes] + meses[mes + 1] + meses[mes + 2] + meses[mes + 3] + meses[mes + 4] + meses[mes + 5] + meses[mes + 6] + meses[mes + 7] + meses[mes + 8] + meses[mes + 9] + dia_deseado[fecha_proxima] - dia
    break;

    case 11: dias_faltantes = meses[mes] + meses[mes + 1] + meses[mes + 2] + meses[mes + 3] + meses[mes + 4] + meses[mes + 5] + meses[mes + 6] + meses[mes + 7] + meses[mes + 8] + meses[mes + 9] + meses[mes + 10] + dia_deseado[fecha_proxima] - dia
    break;
  }
}
else if(mes_deseado[fecha_proxima] - 1 == mes && dia_deseado[fecha_proxima] < dia) //Se resta 1 en mes_deseado debido a que la variable mes los cuenta del 0 al 11
{
  dias_faltantes = 365 + dia_deseado[fecha_proxima] - dia
}
else if(mes_deseado[fecha_proxima] - 1 < mes)
{
  switch (mes - (mes_deseado[fecha_proxima] - 1))
  {
    case 1: dias_faltantes = 365 + dia_deseado[fecha_proxima] - meses[mes - 1] - dia
    break;

    case 2: dias_faltantes = 365 + dia_deseado[fecha_proxima] - meses[mes - 1] - meses[mes - 2] - dia
    break;

    case 3: dias_faltantes = 365 + dia_deseado[fecha_proxima] - meses[mes - 1] - meses[mes - 2] - meses[mes - 3] - dia
    break;

    case 4: dias_faltantes = 365 + dia_deseado[fecha_proxima] - meses[mes - 1] - meses[mes - 2] - meses[mes - 3] - meses[mes - 4] - dia
    break;

    case 5: dias_faltantes = 365 + dia_deseado[fecha_proxima] - meses[mes - 1] - meses[mes - 2] - meses[mes - 3] - meses[mes - 4] - meses[mes - 5] - dia
    break;

    case 6: dias_faltantes = 365 + dia_deseado[fecha_proxima] - meses[mes - 1] - meses[mes - 2] - meses[mes - 3] - meses[mes - 4] - meses[mes - 5] - meses[mes - 6] - dia
    break;

    case 7: dias_faltantes = 365 + dia_deseado[fecha_proxima] - meses[mes - 1] - meses[mes - 2] - meses[mes - 3] - meses[mes - 4] - meses[mes - 5] - meses[mes - 6] - meses[mes - 7] - dia
    break;

    case 8: dias_faltantes = 365 + dia_deseado[fecha_proxima] - meses[mes - 1] - meses[mes - 2] - meses[mes - 3] - meses[mes - 4] - meses[mes - 5] - meses[mes - 6] - meses[mes - 7] - meses[mes - 8] - dia
    break;

    case 9: dias_faltantes = 365 + dia_deseado[fecha_proxima] - meses[mes - 1] - meses[mes - 2] - meses[mes - 3] - meses[mes - 4] - meses[mes - 5] - meses[mes - 6] - meses[mes - 7] - meses[mes - 8] - meses[mes - 9] - dia
    break;

    case 10: dias_faltantes = 365 + dia_deseado[fecha_proxima] - meses[mes - 1] - meses[mes - 2] - meses[mes - 3] - meses[mes - 4] - meses[mes - 5] - meses[mes - 6] - meses[mes - 7] - meses[mes - 8] - meses[mes - 9] - meses[mes - 10] - dia
    break;

    case 11: dias_faltantes = 365 + dia_deseado[fecha_proxima] - meses[mes - 1] - meses[mes - 2] - meses[mes - 3] - meses[mes - 4] - meses[mes - 5] - meses[mes - 6] - meses[mes - 7] - meses[mes - 8] - meses[mes - 9] - meses[mes - 10] - meses[mes - 11] - dia
    break;
  }
}

//Muestra o oculta el contador de horas (Lo demas es para que se sigan mostrando bien los estilos de la pagina despues del cambio)
if(dias_faltantes == 1)
{
  Estilo.innerHTML = "body{background: linear-gradient(" + fondo[fecha_proxima] + "); animation-name: Animacion;animation-duration: 5s;}"
  +
  "@keyframes Animacion{0% {opacity: 0;}100% {opacity: 1;}}"
  +
  "#Dias{font-size:1000%; color: gold; text-align: center; text-shadow:-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;}"
  +
  "#Horas{opacity: 1; color: blue; text-align: center; font-size: 500%; text-shadow:-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;}"
  +
  "#Menu_Recuerdos{padding:0px;transform: translateX(100%);width:500px;font-family:Arial, Helvetica, sans-serif;text-shadow:-1px -1px 0 blue,1px -1px 0 blue,-1px 1px 0 blue,1px 1px 0 blue;}ul, ol{padding:0px;list-style:none;}.nav > li{float:left;display: table-cell;vertical-align: middle;}.nav li a{background: radial-gradient(#F000FF, #2D5EB4);color:white;text-decoration:none;padding:10px 12px;display: table-cell;vertical-align: middle;}.nav li a:hover{background: radial-gradient(gold,"
  +
    "red);display: table-cell;vertical-align: middle;}.nav li ul{display:none;position:absolute;min-width:140px;}.nav li:hover > ul{display: table-cell;vertical-align: middle;}.nav li ul li{position:relative;display: table-cell;vertical-align: middle;}.nav li ul li ul{right:-140px;top:0px;display: table-cell;vertical-align: middle;}"
}
else
{
  Estilo.innerHTML = "body{background: linear-gradient(" + fondo[fecha_proxima] + "); animation-name: Animacion;animation-duration: 5s;}"
  +
  "@keyframes Animacion{0% {opacity: 0;}100% {opacity: 1;}}"
  +
  "#Dias{font-size:1000%; color: gold; text-align: center; text-shadow:-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;}"
  +
  "#Horas{opacity: 0; color: blue; text-align: center; font-size: 500%; text-shadow:-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;}"
  +
  "#Menu_Recuerdos{padding:0px;transform: translateX(100%);width:500px;font-family:Arial, Helvetica, sans-serif;text-shadow:-1px -1px 0 blue,1px -1px 0 blue,-1px 1px 0 blue,1px 1px 0 blue;}ul, ol{padding:0px;list-style:none;}.nav > li{float:left;display: table-cell;vertical-align: middle;}.nav li a{background: radial-gradient(#F000FF, #2D5EB4);color:white;text-decoration:none;padding:10px 12px;display: table-cell;vertical-align: middle;}.nav li a:hover{background: radial-gradient(gold,"
  +
    "red);display: table-cell;vertical-align: middle;}.nav li ul{display:none;position:absolute;min-width:140px;}.nav li:hover > ul{display: table-cell;vertical-align: middle;}.nav li ul li{position:relative;display: table-cell;vertical-align: middle;}.nav li ul li ul{right:-140px;top:0px;display: table-cell;vertical-align: middle;}"
}

//Cambia la pagina a la de la fecha actual en version movil o compu segun el dispositivo
if(dias_faltantes == 0)
{
  if (device.match(/Iphone/i)|| device.match(/Ipod/i)|| device.match(/Android/i)|| device.match(/J2ME/i)|| device.match(/BlackBerry/i)|| device.match(/iPhone|iPad|iPod/i)|| device.match(/Opera Mini/i)|| device.match(/IEMobile/i)|| device.match(/Mobile/i)|| device.match(/Windows Phone/i)|| device.match(/windows mobile/i)|| device.match(/windows ce/i)|| device.match(/webOS/i)|| device.match(/palm/i)|| device.match(/bada/i)|| device.match(/series60/i)|| device.match(/nokia/i)|| device.match(/symbian/i)|| device.match(/HTC/i)|| device.match(/CriOS/i))
   {
     location.href = paginas[fecha_proxima] + "/" + paginas[fecha_proxima] + "_Celu.html";
   }
   else
   {
     location.href = paginas[fecha_proxima] + "/" + paginas[fecha_proxima] + "_Compu.html";
   }
}

//Establece los contadores
Contador_Dias.innerHTML = dias_faltantes;
Contador_Horas.innerHTML = (24 - horas  - 1 ) + ":" + (60 - minutos) + ":" + (60 - segundos);
}

Tiempo();

setInterval(Tiempo, 1000)

//MENU DE RECUERDOS
if (device.match(/Iphone/i)|| device.match(/Ipod/i)|| device.match(/Android/i)|| device.match(/J2ME/i)|| device.match(/BlackBerry/i)|| device.match(/iPhone|iPad|iPod/i)|| device.match(/Opera Mini/i)|| device.match(/IEMobile/i)|| device.match(/Mobile/i)|| device.match(/Windows Phone/i)|| device.match(/windows mobile/i)|| device.match(/windows ce/i)|| device.match(/webOS/i)|| device.match(/palm/i)|| device.match(/bada/i)|| device.match(/series60/i)|| device.match(/nokia/i)|| device.match(/symbian/i)|| device.match(/HTC/i)|| device.match(/CriOS/i))
 {
   Menu.innerHTML =
   "<ul class=nav><li><a href=>Cumpleaños</a><ul><li><a href=Cumple_2018/Cumple_Celu.html>2018</a></li></ul></li><li><a href=>Hallowen</a><ul><li><a href=Hallowen_2018/Hallowen_Celu.html>2018</a></li></ul></li><li><a href=>Navidad</a><ul><li><a href=Navidad_2018/Navidad_Celu.html>2018</a></li></ul></li>"

   //Separador de secciones
     +
     "<br><br><br><br>"

   //Seccion poesias
  +
  "<li><a href=>Poesias</a><ul>"
  +
  "<li><a href=Poesias/El_diamante_mas_brillante/Celu.html>El diamante mas brillante</a></li>"
  +
  "<li><a href=Poesias/Amistad_eterna/Celu.html>Amistad eterna</a></li>"
  +
  "<li><a href=Poesias/Cumple_17_original/Celu.html>Cumple 17 original</a></li>"
  +
  "<li><a href=Poesias/Cumple_17_final/Celu.html>Cumple 17 final</a></li>"
  +
  "<li><a href=Poesias/Lo_que_pienso_de_vos/Celu.html>Lo que pienso de vos</a></li>"
  +
  "<li><a href=Poesias/Primer_aniversario/Celu.html>Primer aniversario</a></li>"
  +
  "<li><a href=Poesias/Un_angel_como_mejor_amiga/Celu.html>Un angel como mejor amiga</a></li>"
  +
  "</ul></li>"

  //Seccion videos
  +
   "<li><a href=>Videos</a><ul>"
   +
   "<li><a href=Videos/Yeyuno_Rap/Compu_Celu.html>Yeyuno Rap</a></li>"
   +
   "<li><a href=Videos/Primer_Aniversario/Compu_Celu.html>Primer Aniversario</a></li>"
   +
   "</ul></li>"

   //Cierre menu
   +
   "</ul>"
   ;
 }
else
{
  Menu.innerHTML =
  "<ul class=nav><li><a href=>Cumpleaños</a><ul><li><a href=Cumple_2018/Cumple_Compu.html>2018</a></li></ul></li><li><a href=>Hallowen</a><ul><li><a href=Hallowen_2018/Hallowen_Compu.html>2018</a></li></ul></li><li><a href=>Navidad</a><ul><li><a href=Navidad_2018/Navidad_Compu.html>2018</a></li></ul></li>"

//Separador de secciones
  +
  "<br><br><br><br>"

  //Seccion poesias
  +
 "<li><a href=>Poesias</a><ul>"
 +
 "<li><a href=Poesias/El_diamante_mas_brillante/Compu.html>El diamante mas brillante</a></li>"
 +
 "<li><a href=Poesias/Amistad_eterna/Compu.html>Amistad eterna</a></li>"
 +
 "<li><a href=Poesias/Cumple_17_original/Compu.html>Cumple 17 original</a></li>"
 +
 "<li><a href=Poesias/Cumple_17_final/Compu.html>Cumple 17 final</a></li>"
 +
 "<li><a href=Poesias/Lo_que_pienso_de_vos/Compu.html>Lo que pienso de vos</a></li>"
 +
 "<li><a href=Poesias/Primer_aniversario/Compu.html>Primer aniversario</a></li>"
 +
 "<li><a href=Poesias/Un_angel_como_mejor_amiga/Compu.html>Un angel como mejor amiga</a></li>"
 +
 "</ul></li>"

 //Seccion videos
 +
  "<li><a href=>Videos</a><ul>"
  +
  "<li><a href=Videos/Yeyuno_Rap/Compu_Celu.html>Yeyuno Rap</a></li>"
  +
  "<li><a href=Videos/Primer_Aniversario/Compu_Celu.html>Primer Aniversario</a></li>"
  +
  "</ul></li>"

  //Cierre menu
  +
  "</ul>"
;
}
