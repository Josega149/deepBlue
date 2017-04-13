$(document).ready(function() {

    var pozoSelecionado = undefined;
    var sensor = {
        _id: 0,
        avgTemp: 20,
        avgPh: 8,
        avgSalt: 4,
        lat: 6.544560,
        lon: -78.019409,
        lastTemp: 40,
        lastPh: 8,
        lastSal: 4
    };
    var msg = [sensor];
    var convert = [];
    console.log(msg);
    for (var i = 0; i < msg.length; i++) {
        var color = undefined;
        if (msg[i].lastTemp > 30) {
            color = "green";
        } else if (msg[i].lastTemp === 30) {
            color = "red";
        } else if (msg[i].lastTemp === 30) {
            color = "black";
        }
        var n = {
            latLng: [
                msg[i].lat, msg[i].lon
            ],
            name: msg[i]._id,
            style: {
                fill: color
            }
        };
        convert.push(n);
    }
    console.log(convert);

    $('#world-map').vectorMap({
        map: 'world_mill',
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
        onMarkerClick: function(event, index) {
            pozoSelecionado = map.params.main.markers[index].name;
            var pozo = mapaPozos[pozoSelecionado];
            $('#infoPozo').text("pozo: " + pozoSelecionado);
            $.get("/registro/ener/" + pozo.id, function(data, status) {
                console.log(data.info);
                $("#ener").text(data.info);
            });
            $.ajax({
                method: "GET",
                url: "/registro / ener / " + pozo.id
            }).done(function(msg) {
                console.log(msg["info"]);
                $("#ener").text(msg["info"]);
            });
            $.ajax({
                method: "GET",
                url: "/registro/temp/" + pozo.id
            }).done(function(msg) {
                console.log(msg["info"]);
                $("#temp").text(msg["info"]);
            });
            $.ajax({
                method: "GET",
                url: "/registro/barr/" + pozo.id
            }).done(function(msg) {
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
        }
    });
});
