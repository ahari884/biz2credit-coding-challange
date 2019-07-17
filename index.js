
const UNIT_CONVERSION_FOR_KM = 6372.8;

/**
 * Returns distance between two coordinates in radians 
 * 
 */
exports.distanceBetween = function (coordinateA, coordinateB) {
    var coordinateALat, coordinateBLat, distance, degreesToRadians;
    degreesToRadians = Math.PI / 180;
    coordinateALat = (coordinateA.latitude || 0) * degreesToRadians;
    coordinateBLat = (coordinateB.latitude || 0) * degreesToRadians;
    distance = Math.abs((coordinateB.longitude || 0) - (coordinateA.longitude || 0)) * degreesToRadians;
    distance = Math.atan2(Math.sqrt(
        Math.pow(Math.cos(coordinateBLat) * Math.sin(distance), 2.0) +
        Math.pow(
            Math.cos(coordinateALat) * Math.sin(coordinateBLat) - Math.sin(coordinateALat) * Math.cos(coordinateBLat)
            * Math.cos(distance), 2.0)), Math.sin(coordinateALat) * Math.sin(coordinateBLat) + Math.cos(coordinateALat) * Math.cos(coordinateBLat) * Math.cos(distance));
    return distance;
}

/**
 * Returns boolean value whether the given radinace in the range or not
 */
exports.isInRange = function (distanceInRadiance, rangeInKm) {
    var rangeInRadiance;
    rangeInRadiance = rangeInKm / UNIT_CONVERSION_FOR_KM;
    return distanceInRadiance <= rangeInRadiance;
}
