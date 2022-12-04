function updateMap() {
    fetch("/data.json")
        .then(response => response.json())
        .then(res => {
            console.log(res.data)
            res.data.forEach(element => {
                latitude = element.latitude;

                longitude = element.longitude;

                infected = element.infected;
                lessInfected = 255 - infected;
                if (infected > 255) {
                    color = "rgb(255,0,0)";
                }
                else {
                    color = `rgb(${infected},${lessInfected},0)`;
                }
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map)
            });


        })

}

updateMap();