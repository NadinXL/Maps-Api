if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const coords = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            console.log(coords);
        }, () => {
            alert("Dame permisos pls")
        })
} else {
    alert("Tu navagedor no dispone de la geolocalizacion, actualizalo");
}
