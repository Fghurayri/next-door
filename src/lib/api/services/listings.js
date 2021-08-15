import Listing from "../models/listing";
import dbConnect from "../db";

export async function addListing({ lat, lng, price, description, emoji }) {
  await dbConnect();
  return await Listing.create({
    properties: {
      emoji,
      description,
      price: Number(price),
    },
    geometry: { coordinates: [lng, lat] },
  });
}

export async function getListingsNearLocation(
  { lng, lat },
  maxDistance = 2 * 1000 * 1.6 // 2 miles in meters
) {
  await dbConnect();
  return await Listing.find({
    geometry: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [lng, lat],
        },
        $maxDistance: maxDistance, // in meters
      },
    },
  });
}

export async function getListingsInArea(polygon) {
  await dbConnect();
  return await Listing.find({
    geometry: {
      $geoWithin: {
        $geometry: {
          type: "Polygon",
          coordinates: polygon,
        },
      },
    },
  });
}
