export default function calculateShortestDistance(
  origin,
  parkingAround,
  dispatchDestination,
  navigation,
) {
  // const {origin, dispatchOrigin} = React.useContext(OriginContext);

  console.log('orgin', origin);
  const earthRadius = 6371; // Radius of the Earth in kilometers

  function toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  function calculateDistance(point1, point2) {
    const lat1 = toRadians(point1.latitude);
    const lon1 = toRadians(point1.longitude);
    const lat2 = toRadians(point2.latitude);
    const lon2 = toRadians(point2.longitude);

    const deltaLat = lat2 - lat1;
    const deltaLon = lon2 - lon1;

    const a =
      Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(lat1) *
        Math.cos(lat2) *
        Math.sin(deltaLon / 2) *
        Math.sin(deltaLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadius * c;
    return distance;
  }

  let shortestDistance = Infinity;
  let nearestParkingLocation = null;

  for (const location of parkingAround) {
    const distance = calculateDistance(origin, location);
    if (distance < shortestDistance) {
      shortestDistance = distance;
      nearestParkingLocation = location;
    }
  }
  console.log('nearestParkingLocation', nearestParkingLocation);
  dispatchDestination({
    type: 'ADD_DESTINATION',
    payload: {
      latitude: nearestParkingLocation.latitude,
      longitude: nearestParkingLocation.longitude,
      address: nearestParkingLocation.address,
      name: nearestParkingLocation.name,
      number: nearestParkingLocation.number,
    },
  });
  if (navigation) {
    navigation.goBack();
  }
  return nearestParkingLocation;
}
