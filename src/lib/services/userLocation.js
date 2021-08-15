export async function getUserLocation() {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          return resolve({
            userLocation: {
              lng: position.coords.longitude,
              lat: position.coords.latitude,
            },
          });
        },
        (_error) => {
          alert(
            "Your location is unknown. If you denied the permission to share your location, reset your decision and try again."
          );
          return reject();
        },
        { enableHighAccuracy: true }
      );
    } else {
      alert("your browser is not supported :(");
      return reject();
    }
  });
}
