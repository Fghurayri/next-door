export function convertBoundToPolygon(bounds) {
  const southWest = [bounds._sw.lng, bounds._sw.lat];
  const northEast = [bounds._ne.lng, bounds._ne.lat];

  let [y1, x1] = southWest;
  let [y2, x2] = northEast;

  x1 = x1.toFixed(4);
  y1 = y1.toFixed(4);
  x2 = x2.toFixed(4);
  y2 = y2.toFixed(4);

  return [
    [
      [y1, x1],
      [y2, x1],
      [y2, x2],
      [y1, x2],
      [y1, x1],
    ],
  ];
}
