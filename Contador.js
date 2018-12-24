var meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //Cantidad de dias que tiene cada mes del año

var mes_deseado = [10, 10, 12];
var dia_deseado = [20, 31, 25];

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

//Cambia la pagina a la pagina principal de nuevo una vez termino la fecha festiva
if(dias_faltantes != 0)
{
  location.href = "../index.html";
}

}

Tiempo();

setInterval(Tiempo, 1000)
