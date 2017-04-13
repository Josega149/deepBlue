$(document).ready(function () {

    var pozoSelecionado=undefined;
    var mapaPozos ={};

        var convert=[];
        console.log(msg[1262]);
        for(var i=0;i<msg.length;i++){
            mapaPozos[msg[i].id]=msg[i];
            var color=undefined;
            if(msg[i].estado==="PRODUCCION"){
                color="green";
            }
            else if(msg[i].estado==="PARADO"){
                color = "red";
            }
            else if(msg[i].estado==="CLAUSURADO"){
                color="black";
            }
            var n = {latLng:[msg[i].lat,msg[i].lon],name:msg[i].id,style:{fill:color}};
            convert.push(n);
        }
        console.log(convert);
        var map = new jvm.MultiMap({
            container: $('#world-map'),
            maxLevel: 2,
            main: {
                map: 'co-compl_merc',
                backgroundColor: "transparent",
                regionStyle: {
                    initial: {
                        fill: '#7D7D7D',
                        "fill-opacity": 1,
                        stroke: 'none',
                        "stroke-width": 0,
                        "stroke-opacity": 0
                    }
                },
                markers: convert,
                //$.ajax({
                //    method: "GET",
                //    url:"/"
                //   })
                onMarkerClick:function(event, index){
                    //console.log(map);
                    pozoSelecionado=map.params.main.markers[index].name;
                    //console.log("LLEGA AQUI HIJUEPUTA");
                    var pozo = mapaPozos[pozoSelecionado];
                    $('#infoPozo').text("pozo: "+ pozoSelecionado);

                    $.get("/registro/ener/"+pozo.id,function(data,status){
                        console.log(data.info);
                        $("#ener").text(data.info);
                    });*/

                    $.ajax({
                        method: "GET",
                        url:"/registro/ener/"+pozo.id
                    }).done(function (msg){
                        console.log(msg["info"]);
                        $("#ener").text(msg["info"]);
                    });

                    $.ajax({
                        method: "GET",
                        url:"/registro/temp/"+pozo.id
                    }).done(function (msg){
                        console.log(msg["info"]);
                        $("#temp").text(msg["info"]);
                    });

                    $.ajax({
                        method: "GET",
                        url:"/registro/barr/"+pozo.id
                    }).done(function (msg){
                        console.log(msg["info"]);
                        $("#barr").text(msg["info"]);
                    });


                    console.log(pozoSelecionado);
                },
                markerStyle: {
                    initial: {
                        fill: '#F8E23B',
                        stroke: '#383f47'
                    }
                },
                series: {
                    regions: [{
                        values: mapData,
                        scale: ["#1ab394", "#22d6b1"],
                        normalizeFunction: 'polynomial'
                    }]

                }
            },mapUrlByCode: function (code, multiMap) {
                // var id = code.toLowerCase()+'_merc';
                // return id;
                // console.log("CODIGO REGION "+code);
                var path = 'js/plugins/jvectormap/col-compl.js';
                //console.log(path);
                var reg = {
                    'CO-RCA': "Caribe",
                    'CO-RAN': "Andina",
                    'CO-RAM': "Amazonia",
                    'CO-RPA': "Pacifico",
                    'CO-ROR': "Orinoquia",
                    'CO-COMPL': "Nacional"
                };
                var stringP = $('#title-h').text();
                // console.log(stringP);
                string2 = stringP.split(":");
                //console.log(string2[0]);
               // var cuantos = cuantosPozos(reg[code].toUpperCase());
                if (reg[code] == undefined)
                {
                    //no hace nada
                } else {

                    stringP = string2[0].concat(": ", reg[code]);
                    //console.log(stringP);
                    var stringP = $('#title-h').text(stringP);

                    var estadoPozosAntes = $('#estadoPozos').text();
                    estadoPozosAntes = estadoPozosAntes.split(":")[0];
                    $('#estadoPozos').text(estadoPozosAntes + ": " + reg[code]);

                    var estadoEmergenciasPerc = $('#emergenciasPerc').text();
                    estadoEmergenciasPerc = estadoEmergenciasPerc.split(":")[0];
                    $('#emergenciasPerc').text(estadoEmergenciasPerc + ": " + reg[code]);

                    var estadoListaEmergen = $('#listaEmergen').text();
                    estadoListaEmergen = estadoListaEmergen.split(":")[0];
                    $('#listaEmergen').text(estadoListaEmergen + ": " + reg[code]);

                    cuantosPozos(reg[code].toUpperCase());

                }


                return path;
            }

        });
