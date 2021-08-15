export async function getListingsByArea(polygon) {
  const res = await fetch("/api/listings/area", {
    method: "post",
    body: JSON.stringify({ polygon }),
  });
  const data = await res.json();
  return data;
}

export async function getListingsNearMe(point) {
  const { lng, lat } = point;
  const res = await fetch("/api/listings/near-me", {
    method: "post",
    body: JSON.stringify({
      lat,
      lng,
    }),
  });
  const data = await res.json();
  return data;
}

export async function addListing(details) {
  const { lng, lat, emoji, price, description } = details;
  const res = await fetch("/api/listings", {
    method: "post",
    body: JSON.stringify({
      lng: lng.toFixed(4),
      lat: lat.toFixed(4),
      emoji,
      price,
      description,
    }),
  });
  const data = await res.json();
  return data;
}
