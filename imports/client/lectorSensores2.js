export default lectorSensores1 = { traerProximoLote: ejemplo }

/**
Por hacer

mas chunks
cada chunk con tendencia de color parecida
poder hacer click

que unicamente los de colombia aporten información en la vista de colombia
*/


function ejemplo(){
  var listaSensores = [];
//gran barrera de coral
listaSensores.push({_id:0,lat:-16.827319,lon:150.542800,estado:3});
listaSensores.push({_id:1,lat:-20.604429,lon:152.361258,estado:3});
listaSensores.push({_id:2,lat:-27.716379,lon:157.230034,estado:3});
listaSensores.push({_id:3,lat:-12.343829,lon:147.081862,estado:3});


for(var h=0; h<20; h++){
  //region pacifico
  //47.975164, 154.274048   49.484220, -167.895326
  //-3.357093, 153.784363   -4.759782, -169.301576
  var latitud = ((Math.random()*49)-4);//desde -36 hasta +48
  var longitud = ((Math.random()*20)+154);

  var estadoS= Math.floor(Math.random()*4+1); //numero maximo= 5

  var nuevoSensor= {_id:h,lat:latitud,lon:longitud,estado:estadoS}

  listaSensores.push(nuevoSensor);

}

  //pacifico
for(var h=0; h<20; h++){
  //region pacifico
  //48.047351, -161.079220                      47.558598, -127.285275
  //-36.032975, -147.983517                   -35.748161, -126.538206
  var latitud = ((Math.random()*70)-36);//desde -36 hasta +48
  var longitud = ((Math.random()*40)-161);

  var estadoS= Math.floor(Math.random()*4+1); //numero maximo= 5

  var nuevoSensor= {_id:h,lat:latitud,lon:longitud,estado:estadoS}

  listaSensores.push(nuevoSensor);

}
for(var h=0; h<20; h++){
  //region pacifico
  //4.534576, -150.448494   -33.487560, -149.588389
  //4.543369, -92.547881   -33.472000, -92.754666
  var latitud = -(Math.random()*37-4);
  var longitud = -((Math.random()*56)+92.547881);

  var estadoS= Math.floor(Math.random()*5+1); //numero maximo= 5

  var nuevoSensor= {_id:h,lat:latitud,lon:longitud,estado:estadoS}

  listaSensores.push(nuevoSensor);

}




    // colombia
    //pacifico

  for(var h=0; h<10; h++){
    //6.407404, -81.369337      6.563181, -77.698067
    //3.335571, -81.447727      3.348614, -77.619677
  var latitud = (Math.random()*3)+3.33; //entre 9.907525 y 10.882633
  var longitud = -((Math.random()*3)+77.65);

  var estadoS= Math.floor(Math.random()*5+1.3); //numero maximo= 5

  var nuevoSensor= {_id:h,lat:latitud,lon:longitud,estado:estadoS}

  listaSensores.push(nuevoSensor);

  }
    //atlantico
    for(var h=0; h<10; h++){

   //10.876642, -79.916493    9.924860, -79.914089
   //9.907525, -78.894015     10.882633, -78.896450
   var latitud = (Math.random()*1)+9.907525; //entre 9.907525 y 10.882633
   var longitud = -((Math.random()*1)+78.894015);

   var estadoS= Math.floor(Math.random()*5+1); //numero maximo= 5

   var nuevoSensor= {_id:h,lat:latitud,lon:longitud,estado:estadoS}

   listaSensores.push(nuevoSensor);

   }
   for(var h=0; h<10; h++){
  //region prueba 1

  //11.096641, -78.084891    10.401551, -78.096599
  //11.064894, -76.225118	   10.406086, -76.199919
  var latitud = (Math.random()*1)+10.406086; //entre 10.406086 y 11.096641
  var longitud = -((Math.random()*2)+76.199919);

  var estadoS= Math.floor(Math.random()*5+1); //numero maximo= 5

  var nuevoSensor= {_id:h,lat:latitud,lon:longitud,estado:estadoS}

  listaSensores.push(nuevoSensor);

  }



  for(var h=0; h<10; h++){
    //region prueba 1

    //12.537533,- 81.478809    11.913364, -81.489793
    //12.530615,- 80.891931    11.925841, -80.923353
    var latitud = (Math.random()*1)+11.913364; //entre 11.913364 y 12.537533
    var longitud = -((Math.random()*1)+80.478809);

    var estadoS= Math.floor(Math.random()*5+1); //numero maximo= 5

    var nuevoSensor= {_id:h,lat:latitud,lon:longitud,estado:estadoS}

    listaSensores.push(nuevoSensor);

    }

  return listaSensores;
}
