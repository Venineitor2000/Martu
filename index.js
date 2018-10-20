var device = navigator.userAgent; //Esta variable es para despues comprobar si se esta en celu o no
var css = document.getElementById("Estilo");
var Contador_Dias = document.getElementById("Dias")
var Contador_Horas = document.getElementById("Horas")

var meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //Cantidad de dias que tiene cada mes del año

var mes_deseado = [10, 10];
var dia_deseado = [17, 31];

var paginas = ["Cumple"]
var fondo = ["cyan, purple", "#1A8F8B, #FF0080"]

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
