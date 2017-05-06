export default lectorSensores1 = { traerProximoLote: ejemplo }

function ejemplo(){
  var listaSensores = [];

  //pacifico

for(var h=0; h<10; h++){
  //6.407404, -81.369337      6.563181, -77.698067
  //3.335571, -81.447727      3.348614, -77.619677
var latitud = (Math.random()*3)+3.33; //entre 9.907525 y 10.882633
var longitud = -((Math.random()*3)+77.65);

var estadoS= Math.floor(Math.random()*5+2); //numero maximo= 5
     var lastPh = (Math.random()+7.5).toFixed(2);
var lastTemp = (Math.random()*10+25).toFixed(2);
var lastSal = (Math.random()+7.5).toFixed(2);
var nuevoSensor= {_id:h,lat:latitud,lon:longitud,estado:estadoS, lastPh: lastPh, lastSal: lastSal, lastTemp:lastTemp}

listaSensores.push(nuevoSensor);

}
  //atlantico

    for(var h=10; h<20; h++){
   //region prueba 1

   //10.876642, -79.916493    9.924860, -79.914089
   //9.907525, -78.894015     10.882633, -78.896450
   var latitud = (Math.random()*1)+9.907525; //entre 9.907525 y 10.882633
   var longitud = -((Math.random()*1)+78.894015);

   var estadoS= Math.floor(Math.random()*5); //numero maximo= 5
        var lastPh = (Math.random()+7.5).toFixed(2);
   var lastTemp = (Math.random()*10+10).toFixed(2);
   var lastSal = (Math.random()+7.5).toFixed(2);
   var nuevoSensor= {_id:h,lat:latitud,lon:longitud,estado:estadoS, lastPh: lastPh, lastSal: lastSal, lastTemp:lastTemp}

   listaSensores.push(nuevoSensor);

   }
   for(var h=20; h<30; h++){
  //region prueba 1

  //11.096641, -78.084891    10.401551, -78.096599
  //11.064894, -76.225118	   10.406086, -76.199919
  var latitud = (Math.random()*1)+10.406086; //entre 10.406086 y 11.096641
  var longitud = -((Math.random()*2)+76.199919);

  var estadoS= Math.floor(Math.random()*5); //numero maximo= 5
       var lastPh = (Math.random()+7.5).toFixed(2);
  var lastTemp = (Math.random()*10+10).toFixed(2);
  var lastSal = (Math.random()+7.5).toFixed(2);
  var nuevoSensor= {_id:h,lat:latitud,lon:longitud,estado:estadoS, lastPh: lastPh, lastSal: lastSal, lastTemp:lastTemp}

  listaSensores.push(nuevoSensor);

  }
  for(var h=30; h<40; h++){
    //region prueba 1

    //12.537533,- 81.478809    11.913364, -81.489793
    //12.530615,- 80.891931    11.925841, -80.923353
    var latitud = (Math.random()*1)+11.913364; //entre 11.913364 y 12.537533
    var longitud = -((Math.random()*1)+80.478809);

    var estadoS= Math.floor(Math.random()*5); //numero maximo= 5
         var lastPh = (Math.random()+7.5).toFixed(2);
    var lastTemp = (Math.random()*10+10).toFixed(2);
    var lastSal = (Math.random()+7.5).toFixed(2);
    var nuevoSensor= {_id:h,lat:latitud,lon:longitud,estado:estadoS, lastPh: lastPh, lastSal: lastSal, lastTemp:lastTemp}

    listaSensores.push(nuevoSensor);

    }

  return listaSensores;
}
