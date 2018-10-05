var device = navigator.userAgent //Esta variable es para despues comprobar si se esta en celu o no
var parrafo_dias_faltantes = document.getElementById("Ja");
var parrafo_cuenta_regresvia = document.getElementById("Ju");
var estilo_Ju = document.getElementById("estilo_Ju");
var estilo_Ja = document.getElementById("estilo_Ja");

var meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var mes_deseado = [10];
var dia_deseado = [20];

var fecha_proxima; //Representa la ubicacion de los array (dia_deseado, mes_deseado, mensajes) para saber cuales tomar para los calculos

var dias_faltantes;

var cumple =

"Bueno bueno bueno, miren quien se me une al club de los ancianitos, nada menos que la mejor chiquita labio del mundo 😂 "
+
"<br><br> Primero que nada te quiero decir, muy feliz cumple locucha mia y espero que la pases de 10 en este hermoso dia!"
+
"<br><br>No se si este con vos cuando leas esto o no, pero ojala que si por que si te soy sincero me hubiera encantado poder pasar cumples juntos con vos desde hace años y aun que por motivos que nunca voy a entender del todo no nos hablabamos y obvio no lo haciamos por tanto. Ahora quisiera aprovechar cada cumpleaños al maximo! Y en especial uno tan importante como este, despues de todo no todos los años se cumple 18 🤗 "
+
"<br><br>Y aun que seguro ya lo sepas, quiero decirte que para mi sos una persona asombrosa y sin igual, desde tu gran corazon que puedo asegurar por experiencia propia que es inmenso como el de pocos en especial en una sociedad como la de estos dias, hasta cosas como tu personalidad arisca pero que cuando queres, podes ser mas dulce que nadie, o tu belleza de angel tanto externa como interna. ❤️"
+
"<br><br> A decir verdad me encanta hablar con vos y saber que siempre voy a poder contar con tu ayuda cuando lo necesite, y por supuesto vos no dudes jamas de lo mismo con la mia 😉"
+
"<br><br> Asi que muchas gracias por ser mi mejor amiga!!! La verdad que mi vida no seria lo mismo sin vos en ningun sentido, me ayudas a crecer en multiples sentidos dia a dia, y eso es algo que siempre te voy a agradecer ❤️"
+
"<br><br>Por muchisimos mas cumple juntos! Y que nunca nada rompa nuestra amistad capaz de enfrentarse a todo!"
+
"<br><br> MUY FELIZ LEGALIDAD MARTU!!! TE QUIERO HASTA EL INFINITO Y MAS ALLA!!! 🔞💞💗"
+
"<br><br>🐀 + 👄 = 💕 "

var mensajes = [cumple]

function Tiempo() //Calcula y controla todo
{
  var fecha = new Date();

  var año = fecha.getFullYear();

  var mes = fecha.getMonth();
  var dia = fecha.getDate();

  var horas = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = fecha.getSeconds();

  for(i = 0; i < mes_deseado.length; i++) //Calcula cual es la fecha_proxima
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
}

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

  if(dias_faltantes == 1)
  {
    estilo_Ju.innerHTML = "#Ju{opacity: 1;}"; //Muestra el cronometro
  }
  else
  {
    estilo_Ju.innerHTML = "#Ju{opacity: 0;}"; //Oculta el cronometro
  }

  if(dias_faltantes == 0)
  { //Se ajusta el tamaño de el mensaeje segun si se esta en celu o no
    if (device.match(/Iphone/i)|| device.match(/Ipod/i)|| device.match(/Android/i)|| device.match(/J2ME/i)|| device.match(/BlackBerry/i)|| device.match(/iPhone|iPad|iPod/i)|| device.match(/Opera Mini/i)|| device.match(/IEMobile/i)|| device.match(/Mobile/i)|| device.match(/Windows Phone/i)|| device.match(/windows mobile/i)|| device.match(/windows ce/i)|| device.match(/webOS/i)|| device.match(/palm/i)|| device.match(/bada/i)|| device.match(/series60/i)|| device.match(/nokia/i)|| device.match(/symbian/i)|| device.match(/HTC/i)|| device.match(/CriOS/i))
     {
       parrafo_dias_faltantes.innerHTML = mensajes[fecha_proxima];
       estilo_Ja.innerHTML = "#Ja{font-size:250%;}" + "body{background: radial-gradient(cyan, purple);}";
     }
     else
     {
       parrafo_dias_faltantes.innerHTML = mensajes[fecha_proxima];
       estilo_Ja.innerHTML = "#Ja{font-size:400%;}" + "body{background: radial-gradient(cyan, purple);}";
     }
  }
  else
  {
    parrafo_dias_faltantes.innerHTML = dias_faltantes;
    estilo_Ja.innerHTML = "#Ja{font-size:1000%;}" + "body{background: linear-gradient(cyan, purple);}";
  }
  parrafo_cuenta_regresvia.innerHTML = (24 - horas  - 1 ) + ":" + (60 - minutos) + ":" + (60 - segundos); //El -1 en las horas es por que las 12 de la noche cuentan como 0 asi que queda en 25 el contador
}

Tiempo();

setInterval(Tiempo, 1000)
