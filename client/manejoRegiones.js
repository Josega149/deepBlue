$(document).ready(function() {

    var mapData = {
        "CO-RAN": 1135,
        "CO-RCA": 200,
        "CO-BOG": 200

    };

    var pozoSelecionado = undefined;
    var mapaPozos = {};

    var convert = [];
    msg = [];
    for (var i = 0; i < msg.length; i++) {
        mapaPozos[msg[i].id] = msg[i];
        var color = undefined;
        if (msg[i].estado === "PRODUCCION") {
            color = "green";
        } else if (msg[i].estado === "PARADO") {
            color = "red";
        } else if (msg[i].estado === "CLAUSURADO") {
            color = "black";
        }
        var n = {
            latLng: [
                msg[i].lat, msg[i].lon
            ],
            name: msg[i].id,
            style: {
                fill: color
            }
        };
        convert.push(n);
    }

    $('#colombia-map').vectorMap({
        map: 'co_mill',
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
        series: {
            regions: [
                {
                    values: mapData,
                    scale: [
                        "#1ab394", "#22d6b1"
                    ],
                    normalizeFunction: 'polynomial'
                }
            ]
        }
    });
});
